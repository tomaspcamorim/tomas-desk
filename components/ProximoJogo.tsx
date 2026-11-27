"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import Emblema from "./Emblema";
import { NOSSA_EQUIPA } from "@/lib/clubes";
import { diasSemana } from "@/lib/data";
import type { Jogo } from "@/lib/calendario";

export default function ProximoJogo({ jogos }: { jogos: Jogo[] }) {
  const [agora, setAgora] = useState<number | null>(null);

  useEffect(() => {
    setAgora(Date.now());
    const t = setInterval(() => setAgora(Date.now()), 30000);
    return () => clearInterval(t);
  }, []);

  const jogo = agora ? jogos.find((j) => new Date(j.iso).getTime() > agora) : undefined;
  const dt = jogo ? new Date(jogo.iso) : null;
  const resto = agora && dt ? Math.max(0, dt.getTime() - agora) : 0;
  const dias = Math.floor(resto / 86400000);
  const horas = Math.floor((resto % 86400000) / 3600000);
  const mins = Math.floor((resto % 3600000) / 60000);
  const f = (n: number) => (jogo ? String(n).padStart(2, "0") : "--");

  let dataTxt = "";
  if (jogo) {
    const [a, m, d] = jogo.data.split("-").map(Number);
    dataTxt = `${diasSemana[new Date(a, m - 1, d).getDay()]} ${d}/${m} às ${jogo.hora}`;
  }

  return (
    <section
      className="entra d3 relative overflow-hidden rounded-[1.75rem] p-6 land:p-4 flex flex-col gap-4 land:gap-3 shrink-0"
      style={{ background: "linear-gradient(160deg,#1e4a30,#0f2a1c 70%)", border: "1px solid #2a5a3d" }}
    >
      <svg aria-hidden viewBox="0 0 400 400" className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 max-w-none opacity-[0.10]" fill="none" stroke="#eef3ea" strokeWidth="3">
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="6" fill="#eef3ea" />
        <line x1="0" y1="200" x2="400" y2="200" />
      </svg>

      <div className="relative flex items-center justify-between gap-3">
        <p className="etiqueta !text-accent flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent pulsa" /> Próximo jogo
        </p>
        {jogo && (
          <span className="etiqueta rounded-full bg-background/50 px-2.5 py-0.5 !text-foreground">
            {jogo.casa ? "Casa" : "Fora"}
          </span>
        )}
      </div>

      <div className="relative flex items-center gap-4">
        {jogo && (
          <div className="flex items-center gap-1 shrink-0">
            <Emblema clube={NOSSA_EQUIPA} tamanho={44} />
            <Emblema clube={jogo.adversario} tamanho={44} />
          </div>
        )}
        <div className="min-w-0">
          <h2 className="display text-4xl land:text-[clamp(1.75rem,4.2vh,2.4rem)] leading-[0.95] truncate">
            {jogo ? jogo.adversario : agora ? "Sem jogos marcados" : "A carregar…"}
          </h2>
          {jogo && (
            <p className="mt-1 text-sm text-foreground/80 flex items-center gap-1.5 min-w-0">
              <MapPin size={14} className="shrink-0" />
              <span className="truncate">{dataTxt} · {jogo.local}</span>
            </p>
          )}
        </div>
      </div>

      <div className="relative flex gap-5 items-end border-t border-white/10 pt-3">
        {[[f(dias), "dias"], [f(horas), "horas"], [f(mins), "min"]].map(([n, l]) => (
          <div key={l} className="flex items-baseline gap-1.5">
            <span className="num text-5xl land:text-[clamp(2rem,5.5vh,3rem)] leading-none">{n}</span>
            <span className="etiqueta">{l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
