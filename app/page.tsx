import Cabecalho from "@/components/Cabecalho";
import ProximoJogo from "@/components/ProximoJogo";
import Horario from "@/components/Horario";
import Atalhos from "@/components/Atalhos";
import CartaoTestes from "@/components/CartaoTestes";
import { obterJogos } from "@/lib/calendario";

// Em ecrã horizontal (landscape) tudo cabe num só ecrã, em 3 colunas, sem scroll.
// Em vertical, a ordem é: saudação, jogo, horário, testes, atalhos.
export default async function Home() {
  const jogos = await obterJogos(); // vem do calendário do Google

  return (
    <main className="mx-auto max-w-[1800px] p-4 md:p-8 flex flex-col gap-4 land:grid land:grid-cols-12 land:gap-3 land:p-4 land:h-dvh land:min-h-[620px] land:overflow-hidden">
      <div className="contents land:col-span-4 land:flex land:flex-col land:gap-3 land:min-h-0">
        <div className="order-1"><Cabecalho /></div>
        <div className="order-5 land:flex-1 land:min-h-0 flex flex-col"><Atalhos /></div>
      </div>
      <div className="contents land:col-span-4 land:flex land:flex-col land:gap-3 land:min-h-0">
        <div className="order-2"><ProximoJogo jogos={jogos} /></div>
        <div className="order-3 land:flex-1 land:min-h-0 flex flex-col"><Horario jogos={jogos} /></div>
      </div>
      <div className="order-4 land:col-span-4 land:min-h-0 flex flex-col">
        <CartaoTestes />
      </div>
    </main>
  );
}
