"use client";

import { SegmentedControl, SegmentedControlItem } from "@astryxdesign/core/SegmentedControl";
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
      <div className="mb-4">
        <SegmentedControl value={vista} onChange={setVista} label="Vista do calendário">
          {vistas.map(({ id, nome }) => <SegmentedControlItem key={id} value={id} label={nome} />)}
        </SegmentedControl>
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
