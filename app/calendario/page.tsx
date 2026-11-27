import Link from "next/link";
import CalendarioEmbed from "@/components/CalendarioEmbed";

export const metadata = { title: "Calendário · Casa do Tomás" };

export default function Calendario() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
      <Link href="/" className="inline-block mb-4 text-muted hover:text-accent">← Início</Link>
      <h1 className="display text-6xl md:text-8xl leading-[0.85] mb-8">Calendário</h1>
      <CalendarioEmbed />
    </main>
  );
}
