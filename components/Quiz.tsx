"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Teste } from "@/lib/data";

export default function Quiz({ teste }: { teste: Teste }) {
  const [i, setI] = useState(0);
  const [escolha, setEscolha] = useState<number | null>(null);
  const [pontos, setPontos] = useState(0);
  const [fim, setFim] = useState(false);
  const [recorde, setRecorde] = useState<number | null>(null);
  const chave = `recorde-${teste.id}`;

  useEffect(() => {
    try {
      const r = localStorage.getItem(chave);
      if (r) setRecorde(Number(r));
    } catch {}
  }, [chave]);

  const p = teste.perguntas[i];
  const total = teste.perguntas.length;

  function responder(n: number) {
    if (escolha !== null) return;
    setEscolha(n);
    if (n === p.certa) setPontos((x) => x + 1);
  }

  function seguinte() {
    if (i + 1 >= total) {
      const final = pontos;
      try {
        if (recorde === null || final > recorde) {
          localStorage.setItem(chave, String(final));
          setRecorde(final);
        }
      } catch {}
      setFim(true);
    } else {
      setI(i + 1);
      setEscolha(null);
    }
  }

  function reiniciar() {
    setI(0); setEscolha(null); setPontos(0); setFim(false);
  }

  if (fim) {
    const perfeito = pontos === total;
    return (
      <div className="rounded-3xl bg-surface border border-line p-8 text-center">
        <div className="text-6xl">{perfeito ? "🏆" : pontos >= total / 2 ? "👏" : "💪"}</div>
        <h2 className="display text-6xl mt-4">
          {pontos} / {total}
        </h2>
        <p className="text-muted mt-2">
          {perfeito ? "Perfeito! Golaço!" : pontos >= total / 2 ? "Bom trabalho! Tenta outra vez para melhorar." : "Continua a treinar, tu consegues!"}
        </p>
        <p className="text-accent mt-1">Recorde: {recorde ?? pontos} / {total}</p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={reiniciar} className="rounded-full bg-accent text-background font-bold px-6 py-3 cursor-pointer">
            Tentar outra vez
          </button>
          <Link href="/testes" className="rounded-full border border-line px-6 py-3 font-semibold">
            Mais testes
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-surface border border-line p-6 md:p-8">
      <div className="flex justify-between text-sm text-muted">
        <span>Pergunta {i + 1} de {total}</span>
        <span>Pontos: {pontos}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-surface-2 overflow-hidden">
        <div className="h-full bg-accent transition-all" style={{ width: `${(i / total) * 100}%` }} />
      </div>

      <h2 className="display text-3xl md:text-4xl mt-6 normal-case">
        {p.pergunta}
      </h2>

      <div className="mt-6 grid gap-3">
        {p.opcoes.map((o, n) => {
          const certa = escolha !== null && n === p.certa;
          const errada = escolha === n && n !== p.certa;
          return (
            <button
              key={n}
              onClick={() => responder(n)}
              disabled={escolha !== null}
              className={`text-left rounded-2xl border px-5 py-4 text-lg transition cursor-pointer ${
                certa
                  ? "border-accent bg-accent/20"
                  : errada
                  ? "border-red-400 bg-red-400/20"
                  : "border-line bg-surface-2 hover:border-accent"
              }`}
            >
              {o} {certa && "✅"} {errada && "❌"}
            </button>
          );
        })}
      </div>

      {escolha !== null && (
        <div className="mt-6">
          {p.explicacao && <p className="text-muted mb-4">💡 {p.explicacao}</p>}
          <button onClick={seguinte} className="rounded-full bg-accent text-background font-bold px-8 py-3 cursor-pointer">
            {i + 1 >= total ? "Ver resultado" : "Seguinte →"}
          </button>
        </div>
      )}
    </div>
  );
}
