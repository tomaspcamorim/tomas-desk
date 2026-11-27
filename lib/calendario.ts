// Lê os jogos do calendário público do Google (formato iCal) no servidor.
import { calendarioGoogle } from "./data";

export type Jogo = {
  iso: string; // momento do jogo (UTC)
  data: string; // AAAA-MM-DD (hora de Lisboa)
  hora: string; // HH:mm (hora de Lisboa)
  adversario: string;
  casa: boolean;
  local: string;
  resultado?: { nos: number; eles: number };
};

const EQUIPA = "Leixões";

function desdobrar(txt: string) {
  return txt.replace(/\r?\n[ \t]/g, "");
}
function limpar(v: string) {
  return v.replace(/\\,/g, ",").replace(/\;/g, ";").replace(/\\n/gi, " ").replace(/\\\\/g, "\\").trim();
}

function parseData(valor: string): Date | null {
  const m = valor.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?$/);
  if (!m) return null;
  const [, a, mo, d, h = "0", mi = "0", s = "0", z] = m;
  if (z) return new Date(Date.UTC(+a, +mo - 1, +d, +h, +mi, +s));
  // sem "Z": hora local de Lisboa (aproximação: tratar como UTC é suficiente aqui)
  return new Date(Date.UTC(+a, +mo - 1, +d, +h, +mi, +s));
}

function emLisboa(d: Date) {
  const partes = new Intl.DateTimeFormat("en-CA", {
    timeZone: calendarioGoogle.fuso,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(d);
  const g = (t: string) => partes.find((p) => p.type === t)!.value;
  return { data: `${g("year")}-${g("month")}-${g("day")}`, hora: `${g("hour")}:${g("minute")}` };
}

export function lerJogos(ics: string): Jogo[] {
  const jogos: Jogo[] = [];
  const blocos = desdobrar(ics).split("BEGIN:VEVENT").slice(1);

  for (const b of blocos) {
    const campo = (nome: string) => {
      const m = b.match(new RegExp(`^${nome}[^:\\r\\n]*:(.*)$`, "m"));
      return m ? m[1].trim() : "";
    };
    const inicio = parseData(campo("DTSTART"));
    if (!inicio) continue;

    let titulo = limpar(campo("SUMMARY")).replace(/^⚽\s*/, "");
    let resultado: Jogo["resultado"];
    let casa = true;
    let adversario = titulo;

    const comPlacar = titulo.match(/^(.*?)\s+(\d+)\s*-\s*(\d+)\s+(.*)$/);
    const semPlacar = titulo.match(/^(.*?)\s+vs\.?\s+(.*)$/i);

    if (comPlacar) {
      const [, a, ga, gb, c] = comPlacar;
      casa = a.includes(EQUIPA);
      adversario = casa ? c : a;
      resultado = casa ? { nos: +ga, eles: +gb } : { nos: +gb, eles: +ga };
    } else if (semPlacar) {
      const [, a, c] = semPlacar;
      casa = a.includes(EQUIPA);
      adversario = casa ? c : a;
    }

    jogos.push({
      iso: inicio.toISOString(),
      ...emLisboa(inicio),
      adversario: adversario.trim(),
      casa,
      local: limpar(campo("LOCATION")).split(",")[0],
      resultado,
    });
  }
  return jogos.sort((x, y) => x.iso.localeCompare(y.iso));
}

export async function obterJogos(): Promise<Jogo[]> {
  const url = `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarioGoogle.id)}/public/basic.ics`;
  try {
    const r = await fetch(url, { next: { revalidate: 900 } }); // atualiza de 15 em 15 minutos
    if (!r.ok) return [];
    return lerJogos(await r.text());
  } catch {
    return [];
  }
}
