"use client";

import { useEffect, useState } from "react";
import { TextInput } from "@astryxdesign/core/TextInput";
import { CalendarDays, Clock3, Search } from "lucide-react";
import { diasSemana } from "@/lib/data";

const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

export default function Cabecalho() {
  const [pesquisa, setPesquisa] = useState("");
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
    <header className="dashboard-header">
      <div className="dashboard-toolbar">
        <span className="dashboard-location">O meu painel</span>
        <form
          action="https://www.google.com/search"
          method="get"
          role="search"
          className="dashboard-search"
          onSubmit={(event) => { if (!pesquisa.trim()) event.preventDefault(); }}
        >
          <input type="hidden" name="q" value={pesquisa.trim()} />
          <TextInput
            value={pesquisa}
            onChange={setPesquisa}
            type="search"
            label="Pesquisar no Google"
            isLabelHidden
            isRequired
            placeholder="Pesquisar no Google…"
            startIcon={<Search size={17} aria-hidden />}
            enterKeyHint="search"
          />
        </form>
      </div>
      <div className="dashboard-welcome">
        <div>
          <p className="welcome-date"><CalendarDays size={16} aria-hidden /> {data || saudacao}</p>
          <h1>Olá, <span>Tomás.</span></h1>
        </div>
        <div className="welcome-clock">
          <Clock3 size={18} aria-hidden />
          <time dateTime={agora ? `${hh}:${mm}` : undefined}>{hh}:{mm}</time>
        </div>
      </div>
    </header>
  );
}
