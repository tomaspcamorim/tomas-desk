"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Card } from "@astryxdesign/core/Card";
import Icone from "./Icone";
import { testes } from "@/lib/data";

export default function CartaoTestes() {
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

  return (
    <Card className="dashboard-panel" role="region" aria-labelledby="treino-title">
      <div className="panel-heading">
        <h2 id="treino-title"><GraduationCap size={21} aria-hidden /> Treino para a escola</h2>
        <Link href="/testes" className="panel-link">Ver todos <ArrowUpRight size={15} aria-hidden /></Link>
      </div>
      <div className="study-grid">
        {testes.map((t) => {
          const rec = recordes[t.id];
          return (
            <Link
              key={t.id}
              href={`/testes/${t.id}`}
              className="study-link"
              style={{ ["--c" as string]: t.cor }}
            >
              <span className="subject-icon">
                <Icone nome={t.icone} size={20} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold leading-tight">{t.titulo}</div>
                <div className="event-detail mt-1">{t.disciplina}</div>
                {rec !== undefined && (
                  <div className="mt-2 flex gap-1" aria-label={`Recorde ${rec} de ${t.perguntas.length}`}>
                    {t.perguntas.map((_, i) => (
                      <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i < rec ? "var(--subject-ink)" : "var(--line)" }} />
                    ))}
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </Card>
  );
}
