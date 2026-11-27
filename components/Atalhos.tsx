import { ArrowUpRight, Zap } from "lucide-react";
import { Card } from "@astryxdesign/core/Card";
import Icone from "./Icone";
import { atalhos } from "@/lib/data";

export default function Atalhos() {
  return (
    <Card id="atalhos" className="dashboard-panel" role="region" aria-labelledby="atalhos-title">
      <div className="panel-heading"><h2 id="atalhos-title"><Zap size={20} aria-hidden /> Atalhos</h2></div>
      <div className="shortcut-grid">
        {atalhos.map((a) => (
          <a key={a.nome} href={a.url} className="shortcut-link" style={{ ["--c" as string]: a.cor }}>
            <span className="subject-icon"><Icone nome={a.icone} size={20} /></span>
            <span>{a.nome}</span>
            <ArrowUpRight className="shortcut-arrow" size={14} aria-hidden />
          </a>
        ))}
      </div>
    </Card>
  );
}
