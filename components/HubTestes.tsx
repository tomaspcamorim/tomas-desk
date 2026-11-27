"use client";

import { Button } from "@astryxdesign/core/Button";
import { Card } from "@astryxdesign/core/Card";
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
          <Card key={l} padding={5}>
            <div className="num text-5xl leading-none text-accent">{n}</div>
            <div className="etiqueta mt-2">{l}</div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {disciplinas.map((d) => (
          <Button
            key={d}
            label={d}
            size="sm"
            onClick={() => setFiltro(d)}
            aria-pressed={filtro === d}
            variant={filtro === d ? "primary" : "secondary"}
          />
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
                <span className="subject-icon !size-14">
                  <Icone nome={t.icone} size={28} />
                </span>
                {rec === total ? (
                  <Trophy className="text-accent-2" size={22} />
                ) : (
                  <ArrowUpRight className="text-muted transition group-hover:text-[color:var(--c)]" />
                )}
              </div>
              <div>
                <div className="etiqueta !text-[0.65rem] !text-[var(--subject-ink)]">{t.disciplina}</div>
                <h3 className="display text-3xl leading-[0.95] mt-1.5">{t.titulo}</h3>
              </div>
              <div className="mt-auto">
                <div className="flex gap-1">
                  {t.perguntas.map((_, i) => (
                    <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: rec !== undefined && i < rec ? "var(--subject-ink)" : "var(--line)" }} />
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
