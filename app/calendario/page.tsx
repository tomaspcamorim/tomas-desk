import Link from "next/link";
import CalendarioEmbed from "@/components/CalendarioEmbed";

export const metadata = { title: "Calendário · Casa do Tomás" };

export default function Calendario() {
  return (
    <main className="subpage">
      <Link href="/" className="inline-block mb-4 text-muted hover:text-accent">← Início</Link>
      <h1 className="subpage-title mb-8">Calendário</h1>
      <CalendarioEmbed />
    </main>
  );
}
