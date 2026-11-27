import type { Metadata } from "next";
import { Barlow_Condensed, Outfit } from "next/font/google";
import "./globals.css";
import { AgentationProvider } from "@/components/AgentationProvider";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="pt" className={`${barlow.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
        <AgentationProvider />
      </body>
    </html>
  );
}
