import { Card } from "@astryxdesign/core/Card";
import Link from "next/link";
import { ArrowRight, Shirt, TreePine } from "lucide-react";

export const metadata = { title: "3D · Casa do Tomás" };

const ferramentas = [
  {
    nome: "Porta-chaves de camisola",
    descricao: "Personaliza o equipamento, o nome e o número. Cria uma camisola ou prepara um lote para a equipa.",
    url: "/modelos-3d/jersey-keychain/jersey-keychain-maker.html",
    Icone: Shirt,
  },
  {
    nome: "Árvore de nomes",
    descricao: "Junta os nomes da família numa árvore e escolhe o tamanho para imprimir.",
    url: "/modelos-3d/name-tree/name-tree-maker.html",
    Icone: TreePine,
  },
];

export default function Modelos3D() {
  return (
    <main className="subpage">
      <Link href="/" className="mb-4 inline-block text-muted hover:text-accent">← Início</Link>
      <h1 className="subpage-title">3D</h1>
      <p className="mb-8 mt-3 text-muted">Personaliza modelos para impressão 3D.</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {ferramentas.map(({ nome, descricao, url, Icone }) => (
          <Card key={url} padding={0}>
            <a href={url} className="library-link">
              <Icone aria-hidden="true" size={30} className="text-accent" />
              <h2>{nome}</h2>
              <p className="text-muted">{descricao}</p>
              <span className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-accent">
                Abrir editor <ArrowRight aria-hidden="true" size={16} />
              </span>
            </a>
          </Card>
        ))}
      </div>
    </main>
  );
}
