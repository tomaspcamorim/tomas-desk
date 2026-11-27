import type { Metadata } from "next";
import "./globals.css";
import AstryxProvider from "@/components/AstryxProvider";
import Navegacao from "@/components/Navegacao";
import { AgentationProvider } from "@/components/AgentationProvider";

export const metadata: Metadata = {
  title: "Casa do Tomás",
  description: "A página inicial do Tomás: horário, treinos, jogos e testes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" data-theme="dark" data-astryx-theme="neutral">
      <body className="antialiased">
        <AstryxProvider>
          <div className="app-shell">
            <Navegacao />
            <div className="app-content">{children}</div>
          </div>
        </AstryxProvider>
        <AgentationProvider />
      </body>
    </html>
  );
}
