"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { Card } from "@astryxdesign/core/Card";
import Icone from "./Icone";
import Emblema from "./Emblema";
import { NOSSA_EQUIPA } from "@/lib/clubes";
import { diasSemana, horarioSemanal, type Evento, type Tipo } from "@/lib/data";
import type { Jogo } from "@/lib/calendario";

const estilo: Record<Tipo, { cor: string; nome: string }> = {
  escola: { cor: "#6546c1", nome: "Escola" },
  treino: { cor: "#487118", nome: "Treino" },
  jogo: { cor: "#aa511e", nome: "Jogo" },
  outro: { cor: "#2459c4", nome: "Atividade" },
};

const ordem = [1, 2, 3, 4, 5, 6, 0];

function chave(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function Horario({ jogos }: { jogos: Jogo[] }) {
  const [hoje, setHoje] = useState<number | null>(null);
  const [dia, setDia] = useState<number>(1);
  const [agora, setAgora] = useState<number | null>(null);

  useEffect(() => {
    const d = new Date();
    setHoje(d.getDay());
    setDia(d.getDay());
    setAgora(d.getTime());
  }, []);

  // Data de cada dia da semana atual (segunda a domingo)
  function dataDoDia(d: number) {
    const base = new Date(agora ?? 0);
    const hojeN = base.getDay() === 0 ? 7 : base.getDay();
    const alvo = d === 0 ? 7 : d;
    base.setDate(base.getDate() + (alvo - hojeN));
    return chave(base);
  }

  const dataSel = agora === null ? null : dataDoDia(dia);
  const jogosDoDia: Evento[] = jogos
    .filter((j) => j.data === dataSel)
    .map((j) => ({
      hora: j.hora,
      titulo: `vs. ${j.adversario}`,
      tipo: "jogo" as Tipo,
      local: `${j.casa ? "Casa" : "Fora"} · ${j.local}`,
    }));
  const eventos = [...(horarioSemanal[dia] ?? []), ...jogosDoDia].sort((a, b) => a.hora.localeCompare(b.hora));

  const proximos = agora ? jogos.filter((j) => new Date(j.iso).getTime() > agora) : [];
  const resultados = agora
    ? jogos.filter((j) => j.resultado && new Date(j.iso).getTime() <= agora).reverse().slice(0, 3)
    : [];

  const linhaData = (j: Jogo) => {
    const [a, m, d] = j.data.split("-").map(Number);
    return { a, m, d, dow: new Date(a, m - 1, d).getDay() };
  };

  return (
    <Card className="dashboard-panel" role="region" aria-labelledby="horario-title">
      <div className="panel-heading">
        <h2 id="horario-title"><CalendarDays size={20} aria-hidden /> O meu horário</h2>
        <Link href="/calendario" className="panel-link">Calendário <ArrowUpRight size={15} aria-hidden /></Link>
      </div>

      <div className="week-tabs" aria-label="Dias da semana">
        {ordem.map((d) => (
          <button
            key={d}
            onClick={() => setDia(d)}
            className="week-tab"
            aria-label={diasSemana[d]}
            aria-pressed={dia === d}
            aria-current={hoje === d ? "date" : undefined}
          >
            <span>{diasSemana[d].slice(0, 3)}</span>
            <strong>{agora === null ? "–" : dataDoDia(d).slice(-2)}</strong>
          </button>
        ))}
      </div>

      <div>
        <ul className="agenda-events" key={dia} aria-label={diasSemana[dia]}>
          {eventos.length === 0 && (
            <li className="rounded-2xl border border-dashed border-line p-6 text-center text-muted">Dia livre!</li>
          )}
          {eventos.map((e, i) => (
            <li
              key={i}
              className="agenda-event"
            >
              {e.tipo === "treino" ? (
                <span className="grid h-11 w-11 place-items-center rounded-xl shrink-0" style={{ background: "#c8102e" }}>
                  <Emblema clube={NOSSA_EQUIPA} tamanho={34} />
                </span>
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-xl shrink-0"
                  style={{ background: estilo[e.tipo].cor + "22", color: `light-dark(${estilo[e.tipo].cor}, color-mix(in srgb, ${estilo[e.tipo].cor} 55%, white))` }}>
                  <Icone nome={e.tipo} size={22} />
                </span>
              )}
              <div className="flex-1 min-w-0">
                <div className="event-title">{e.titulo}</div>
                <div className="event-detail">{estilo[e.tipo].nome}{e.local ? ` · ${e.local}` : ""}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="event-time">{e.hora}</div>
                {e.fim && <div className="event-detail">até {e.fim}</div>}
              </div>
            </li>
          ))}
        </ul>

        {proximos.length > 0 && (
          <>
            <h3 className="etiqueta mt-9 land:mt-5 mb-1 !text-accent-2">Próximos jogos</h3>
            <ul className="divide-y divide-line">
              {proximos.slice(0, 6).map((j) => {
                const { d, m, dow } = linhaData(j);
                return (
                  <li key={j.iso} className="flex items-center gap-4 py-3 land:py-2">
                    <div className="w-12 text-center leading-none shrink-0">
                      <div className="num text-3xl text-accent-2">{d}</div>
                      <div className="etiqueta !text-[0.6rem] mt-1 whitespace-nowrap !tracking-wide">{diasSemana[dow].slice(0, 3)} · {m}</div>
                    </div>
                    <Emblema clube={j.adversario} tamanho={36} />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{j.adversario}</div>
                      <div className="text-muted text-xs truncate">{j.casa ? "Casa" : "Fora"} · {j.local}</div>
                    </div>
                    <div className="num text-xl text-muted">{j.hora}</div>
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {resultados.length > 0 && (
          <>
            <h3 className="etiqueta mt-7 land:mt-4 mb-1">Últimos resultados</h3>
            <ul className="divide-y divide-line">
              {resultados.map((j) => {
                const r = j.resultado!;
                const v = r.nos > r.eles ? "V" : r.nos < r.eles ? "D" : "E";
                const cor = v === "V" ? "#375e31" : v === "D" ? "#aa3246" : "#526780";
                return (
                  <li key={j.iso} className="flex items-center gap-3 py-2.5">
                    <span className="num grid h-8 w-8 place-items-center rounded-lg text-lg text-white" style={{ background: cor }}>{v}</span>
                    <Emblema clube={j.adversario} tamanho={28} />
                    <span className="flex-1 truncate">{j.adversario}</span>
                    <span className="num text-2xl">{r.nos}–{r.eles}</span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </Card>
  );
}
