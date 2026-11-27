import {
  PlayCircle, Crown, Gamepad2, Printer, Trophy, GraduationCap, Calculator,
  BookOpen, FlaskConical, Compass, Languages, Dumbbell, Star, type LucideProps,
} from "lucide-react";

const mapa = {
  youtube: PlayCircle,
  xadrez: Crown,
  jogos: Gamepad2,
  impressora: Printer,
  bola: Trophy,
  escola: GraduationCap,
  calc: Calculator,
  livro: BookOpen,
  ciencia: FlaskConical,
  mapa: Compass,
  ingles: Languages,
  treino: Dumbbell,
  jogo: Trophy,
  outro: Star,
} as const;

export type NomeIcone = keyof typeof mapa;

export default function Icone({ nome, ...p }: { nome: string } & LucideProps) {
  const C = mapa[nome as NomeIcone] ?? Star;
  return <C strokeWidth={1.75} {...p} />;
}
