import Link from "next/link";
import { notFound } from "next/navigation";
import Quiz from "@/components/Quiz";
import { testes } from "@/lib/data";

export function generateStaticParams() {
  return testes.map((t) => ({ id: t.id }));
}

export default async function TestePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const teste = testes.find((t) => t.id === id);
  if (!teste) notFound();

  return (
    <main className="subpage subpage--quiz space-y-6">
      <Link href="/testes" className="inline-block mb-2 text-muted hover:text-accent">← Todos os testes</Link>
      <div>
        <p className="text-accent uppercase tracking-widest text-sm font-semibold">{teste.disciplina}</p>
        <h1 className="subpage-title mt-1">
          {teste.titulo}
        </h1>
      </div>
      <Quiz teste={teste} />
    </main>
  );
}
