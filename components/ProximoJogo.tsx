"use client";

import { useEffect, useState } from "react";
import { MapPin, Trophy } from "lucide-react";
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
    <section className="match-panel">
      <div className="pitch-lines" aria-hidden><span /></div>
      <div className="match-content">
        <div className="panel-heading">
          <h2><Trophy size={19} aria-hidden /> Próximo jogo</h2>
          {jogo && <span className="match-venue">{jogo.casa ? "Casa" : "Fora"}</span>}
        </div>
        <div className="match-teams">
          <span className="match-crest"><Emblema clube={NOSSA_EQUIPA} tamanho={44} /></span>
          {jogo && <>
            <span className="match-versus">vs.</span>
            <span className="match-crest"><Emblema clube={jogo.adversario} tamanho={44} /></span>
          </>}
        </div>
        <p className="match-title">{jogo ? jogo.adversario : agora ? "Sem jogos marcados" : "A carregar…"}</p>
        <p className="match-detail">
          {jogo ? <><MapPin size={15} aria-hidden /> {dataTxt} · {jogo.local}</> : "Leixões SC · Sub-13 B"}
        </p>
        {jogo && <div className="match-countdown" aria-label="Tempo até ao jogo">
          {[[f(dias), "dias"], [f(horas), "horas"], [f(mins), "min"]].map(([n, l]) => (
            <span key={l}><strong>{n}</strong> {l}</span>
          ))}
        </div>}
      </div>
    </section>
  );
}
