"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Icone from "./Icone";
import { anoEscolar, testes } from "@/lib/data";

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
    <section className="entra d4 land:flex-1 land:min-h-0 flex flex-col">
      <div className="flex items-end justify-between mb-4 land:mb-2.5">
        <h2 className="display text-4xl md:text-5xl land:text-3xl">Treino para a escola</h2>
        <Link href="/testes" className="etiqueta !text-accent hover:underline whitespace-nowrap">{anoEscolar} · Ver todos →</Link>
      </div>
      <div className="grid gap-3 land:gap-2.5 sm:grid-cols-3 land:grid-cols-1 land:grid-rows-6 land:flex-1 land:min-h-0">
        {testes.map((t) => {
          const rec = recordes[t.id];
          return (
            <Link
              key={t.id}
              href={`/testes/${t.id}`}
              className="cartao group relative p-5 land:px-4 land:py-2 flex items-center gap-4 transition hover:-translate-y-0.5"
              style={{ ["--c" as string]: t.cor }}
            >
              <span className="grid h-12 w-12 land:h-12 land:w-12 place-items-center rounded-xl shrink-0"
                style={{ background: t.cor + "22", color: t.cor }}>
                <Icone nome={t.icone} size={24} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold leading-tight">{t.titulo}</div>
                <div className="etiqueta !text-[0.65rem] mt-1" style={{ color: t.cor }}>{t.disciplina}</div>
                {rec !== undefined && (
                  <div className="mt-2 flex gap-1" aria-label={`Recorde ${rec} de ${t.perguntas.length}`}>
                    {t.perguntas.map((_, i) => (
                      <span key={i} className="h-1.5 flex-1 rounded-full" style={{ background: i < rec ? t.cor : "var(--line)" }} />
                    ))}
                  </div>
                )}
              </div>
              <ArrowUpRight className="text-muted transition group-hover:text-[color:var(--c)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          );
        })}
      </div>
    </section>
  );
}
