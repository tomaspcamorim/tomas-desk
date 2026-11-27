"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Trophy } from "lucide-react";
import Icone from "./Icone";
import { testes } from "@/lib/data";

export default function HubTestes() {
  const [filtro, setFiltro] = useState<string>("Todas");
  const [recordes, setRecordes] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const r: Record<string, number> = {};
      testes.forEach((t) => {
        const v = localStorage.getItem(`recorde-${t.id}`);
        if (v !== null) r[t.id] = Number(v);
      });
      setRecordes(r);
    } catch {}
  }, []);

  const disciplinas = useMemo(() => ["Todas", ...Array.from(new Set(testes.map((t) => t.disciplina)))], []);
  const visiveis = testes.filter((t) => filtro === "Todas" || t.disciplina === filtro);

  const feitos = testes.filter((t) => recordes[t.id] !== undefined).length;
  const perfeitos = testes.filter((t) => recordes[t.id] === t.perguntas.length).length;

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          [String(testes.length), "testes disponíveis"],
          [`${feitos}/${testes.length}`, "já experimentados"],
          [String(perfeitos), "com nota máxima"],
        ].map(([n, l]) => (
          <div key={l} className="cartao px-6 py-5">
            <div className="num text-5xl leading-none text-accent">{n}</div>
            <div className="etiqueta mt-2">{l}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {disciplinas.map((d) => (
          <button
            key={d}
            onClick={() => setFiltro(d)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
              filtro === d ? "bg-accent text-background" : "bg-surface-2 text-muted hover:text-foreground border border-line"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((t) => {
          const rec = recordes[t.id];
          const total = t.perguntas.length;
          return (
            <Link
              key={t.id}
              href={`/testes/${t.id}`}
              className="cartao group p-6 flex flex-col gap-5 transition hover:-translate-y-1 hover:border-[color:var(--c)]"
              style={{ ["--c" as string]: t.cor }}
            >
              <div className="flex items-start justify-between">
                <span className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: t.cor + "22", color: t.cor }}>
                  <Icone nome={t.icone} size={28} />
                </span>
                {rec === total ? (
                  <Trophy className="text-accent-2" size={22} />
                ) : (
                  <ArrowUpRight className="text-muted transition group-hover:text-[color:var(--c)]" />
                )}
              </div>
              <div>
                <div className="etiqueta !text-[0.65rem]" style={{ color: t.cor }}>{t.disciplina}</div>
                <h3 className="display text-3xl leading-[0.95] mt-1.5">{t.titulo}</h3>
              </div>
              <div className="mt-auto">
                <div className="flex gap-1">
                  {t.perguntas.map((_, i) => (
                    <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: rec !== undefined && i < rec ? t.cor : "var(--line)" }} />
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-sm text-muted">
                  <span>{total} perguntas</span>
                  <span>{rec !== undefined ? `Recorde ${rec}/${total}` : "Ainda não feito"}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
