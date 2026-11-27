import Cabecalho from "@/components/Cabecalho";
import ProximoJogo from "@/components/ProximoJogo";
import Horario from "@/components/Horario";
import Atalhos from "@/components/Atalhos";
import CartaoTestes from "@/components/CartaoTestes";
import { obterJogos } from "@/lib/calendario";

export default async function Home() {
  const jogos = await obterJogos();

  return (
    <main className="dashboard">
      <Cabecalho />
      <div className="dashboard-grid">
        <Horario jogos={jogos} />
        <div className="dashboard-secondary">
          <ProximoJogo jogos={jogos} />
          <CartaoTestes />
          <Atalhos />
        </div>
      </div>
    </main>
  );
}
