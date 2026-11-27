"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { diasSemana } from "@/lib/data";

const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

export default function Cabecalho() {
  const [agora, setAgora] = useState<Date | null>(null);

  useEffect(() => {
    setAgora(new Date());
    const t = setInterval(() => setAgora(new Date()), 15000);
    return () => clearInterval(t);
  }, []);

  const h = agora?.getHours() ?? 12;
  const saudacao = h < 12 ? "Bom dia" : h < 20 ? "Boa tarde" : "Boa noite";
  const hh = agora ? String(agora.getHours()).padStart(2, "0") : "--";
  const mm = agora ? String(agora.getMinutes()).padStart(2, "0") : "--";
  const data = agora ? `${diasSemana[agora.getDay()]}, ${agora.getDate()} de ${meses[agora.getMonth()]}` : "";

  return (
    <section className="entra d1 cartao p-6 md:p-8 land:p-5 shrink-0">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="etiqueta flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-accent pulsa" /> {saudacao}
          </p>
          <p className="etiqueta mt-1 !text-[0.65rem] normal-case !tracking-wider">{data}</p>
        </div>
        <div className="num text-5xl md:text-6xl land:text-[clamp(2.5rem,6vh,4rem)] leading-none">
          {hh}<span className="pulsa text-accent">:</span>{mm}
        </div>
      </div>

      <h1 className="display text-7xl sm:text-8xl land:text-[clamp(3.5rem,11vh,6.5rem)] leading-[0.85] mt-4 land:mt-[1.5vh]">
        Olá, <span className="text-accent">Tomás</span>
      </h1>

      <form action="https://www.google.com/search" method="get" className="mt-5 land:mt-[2vh] flex items-center gap-3 rounded-2xl bg-background/60 border border-line px-4 focus-within:border-accent transition">
        <Search size={20} className="text-muted shrink-0" />
        <input
          name="q"
          placeholder="Pesquisar no Google…"
          className="flex-1 bg-transparent py-4 land:py-3 text-lg outline-none placeholder:text-muted"
        />
      </form>
    </section>
  );
}
