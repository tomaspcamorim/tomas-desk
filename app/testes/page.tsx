import Link from "next/link";
import HubTestes from "@/components/HubTestes";
import { anoEscolar } from "@/lib/data";

export const metadata = { title: "Centro de treino · Casa do Tomás" };

export default function TestesHub() {
  return (
    <main className="subpage">
      <Link href="/" className="inline-block mb-4 text-muted hover:text-accent">← Início</Link>
      <header className="mb-8">
        <p className="etiqueta !text-accent">{anoEscolar}</p>
        <h1 className="subpage-title mt-2">Centro de treino</h1>
        <p className="text-muted mt-4 max-w-xl text-lg">
          Escolhe uma disciplina, faz o teste e tenta bater o teu recorde.
        </p>
      </header>
      <HubTestes />
    </main>
  );
}
