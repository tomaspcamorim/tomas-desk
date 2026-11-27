"use client";

import { useState } from "react";
import { calendarioGoogle } from "@/lib/data";

const vistas = [
  { id: "WEEK", nome: "Semana" },
  { id: "AGENDA", nome: "Lista" },
  { id: "MONTH", nome: "Mês" },
];

export default function CalendarioEmbed() {
  const [vista, setVista] = useState("WEEK");

  const src =
    "https://calendar.google.com/calendar/embed?" +
    new URLSearchParams({
      src: calendarioGoogle.id,
      ctz: calendarioGoogle.fuso,
      mode: vista,
      hl: "pt_PT",
      wkst: "2",
      showTitle: "0",
      showPrint: "0",
      showTz: "0",
      showCalendars: "0",
      showNav: "1",
      showTabs: "0",
      bgcolor: "#ffffff",
    }).toString();

  return (
    <>
      <div className="flex gap-2 mb-4">
        {vistas.map((v) => (
          <button
            key={v.id}
            onClick={() => setVista(v.id)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer ${
              vista === v.id ? "bg-accent text-background" : "bg-surface-2 text-muted hover:text-foreground border border-line"
            }`}
          >
            {v.nome}
          </button>
        ))}
      </div>
      <div className="rounded-[1.75rem] overflow-hidden border border-line bg-white">
        <iframe
          key={vista}
          src={src}
          title="Calendário do Tomás"
          className="w-full h-[72vh] min-h-[480px] block"
        />
      </div>
    </>
  );
}
