// ============================================================
//  OS DADOS DO TOMÁS — edita aqui (ou pede ao Claude para editar)
// ============================================================

export type Tipo = "escola" | "treino" | "jogo" | "outro";

export type Evento = { hora: string; fim?: string; titulo: string; tipo: Tipo; local?: string };

// (EXEMPLO: troca pelos horários reais)
// Horário da escola: EBS Carolina Michaëlis (Agrupamento de Escolas Carolina Michaëlis, Porto)
const D = {
  EDF: "Educação Física", EDM: "Educação Musical", MAT: "Matemática", POR: "Português",
  ING: "Inglês", CNT: "Ciências Naturais", HGP: "História e Geografia de Portugal",
  EDV: "Educação Visual", ETL: "Educação Tecnológica", EMR: "Educação Moral e Religiosa",
  CID: "Cidadania / TIC",
};
const aula = (hora: string, fim: string, d: keyof typeof D, sala: string): Evento => ({
  hora, fim, titulo: D[d], tipo: "escola", local: `Sala ${sala}`,
});
const treinoOM = (fim: string): Evento => ({ hora: "19:00", fim, titulo: "Treino LSC", tipo: "treino", local: "Oscar Marques" });
const treinoPer: Evento = { hora: "19:00", fim: "20:00", titulo: "Treino LSC", tipo: "treino", local: "Perafita" };

// Horário semanal. 0 = Domingo, 1 = Segunda ... 6 = Sábado
export const horarioSemanal: Record<number, Evento[]> = {
  1: [
    aula("08:10", "09:55", "EDF", "GIMC"),
    aula("10:15", "11:05", "EDM", "0.01"),
    aula("11:15", "13:00", "MAT", "0.05"),
    treinoOM("20:15"),
  ],
  2: [
    aula("08:10", "09:55", "POR", "0.05"),
    aula("10:15", "11:05", "CNT", "0.05"),
    aula("11:15", "12:05", "HGP", "0.05"),
    aula("13:10", "14:00", "ING", "0.05"),
    aula("14:10", "15:00", "MAT", "0.05"),
    treinoPer,
  ],
  3: [
    aula("08:10", "09:00", "MAT", "0.05"),
    aula("09:05", "09:55", "ING", "0.05"),
    aula("10:15", "11:05", "POR", "0.06"),
    aula("11:15", "13:00", "EDV", "2.12"),
    aula("15:10", "16:00", "EMR", "0.21"),
    treinoPer,
  ],
  4: [
    aula("08:10", "09:00", "EDF", "GIMC"),
    aula("09:05", "09:55", "POR", "0.05"),
    aula("10:15", "12:05", "ETL", "2.12"),
    aula("13:10", "14:00", "CNT", "0.05"),
    aula("14:10", "15:00", "HGP", "0.05"),
    treinoOM("20:15"),
  ],
  5: [
    aula("08:10", "09:00", "ING", "0.05"),
    aula("09:05", "09:55", "MAT", "0.05"),
    aula("10:15", "11:05", "POR", "0.05"),
    aula("11:15", "12:05", "CID", "0.22 / E0.2"),
    aula("12:10", "13:00", "EDM", "0.01"),
  ],
  6: [],
  0: [],
};

export const diasSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

// Atalhos para sites (troca os links pelos que ele usa)
export const atalhos = [
  { nome: "YouTube", url: "https://www.youtube.com", icone: "youtube", cor: "#ff5a5f" },
  { nome: "Xadrez", url: "https://www.chess.com", icone: "xadrez", cor: "#9be15d" },
  { nome: "Steam", url: "https://store.steampowered.com", icone: "jogos", cor: "#5fb0ff" },
  { nome: "Printables", url: "https://www.printables.com", icone: "impressora", cor: "#ff9f43" },
  { nome: "Futebol", url: "https://www.zerozero.pt", icone: "bola", cor: "#b6f23a" },
  { nome: "Escola Virtual", url: "https://www.escolavirtual.pt", icone: "escola", cor: "#c792ff" },
];

// ============================================================
//  TESTES — para adicionar um teste novo, copia um bloco e muda.
//  "certa" é o número da resposta certa (0 = primeira, 1 = segunda...)
// ============================================================

export type Pergunta = {
  pergunta: string;
  opcoes: string[];
  certa: number;
  explicacao?: string;
};

export type Teste = {
  id: string;
  titulo: string;
  disciplina: string;
  icone: "calc" | "livro" | "xadrez" | "ciencia" | "mapa" | "ingles";
  cor: string;
  perguntas: Pergunta[];
};

export const anoEscolar = "6.º ano";

export const testes: Teste[] = [
  {
    id: "matematica",
    titulo: "Frações, ângulos e áreas",
    disciplina: "Matemática",
    icone: "calc",
    cor: "#6cb8ff",
    perguntas: [
      {
        pergunta: "Quanto é 3/4 + 1/8?",
        opcoes: ["4/12", "7/8", "3/8", "1"],
        certa: 1,
        explicacao: "Mesmo denominador: 3/4 = 6/8. Então 6/8 + 1/8 = 7/8.",
      },
      {
        pergunta: "Qual é 25% de 80?",
        opcoes: ["15", "20", "25", "40"],
        certa: 1,
        explicacao: "25% é um quarto: 80 ÷ 4 = 20.",
      },
      {
        pergunta: "Qual é o menor destes números?",
        opcoes: ["−2", "−7", "−10", "0"],
        certa: 2,
        explicacao: "Nos negativos, quanto maior o número sem sinal, menor ele é: −10 < −7 < −2 < 0.",
      },
      {
        pergunta: "Um ângulo de 120° é…",
        opcoes: ["Agudo", "Reto", "Obtuso", "Raso"],
        certa: 2,
        explicacao: "Obtuso é maior que 90° e menor que 180°.",
      },
      {
        pergunta: "Qual é a área de um triângulo com 10 cm de base e 6 cm de altura?",
        opcoes: ["60 cm²", "30 cm²", "16 cm²", "36 cm²"],
        certa: 1,
        explicacao: "Área = (base × altura) ÷ 2 = (10 × 6) ÷ 2 = 30.",
      },
      {
        pergunta: "3 bilhetes custam 12 €. Quanto custam 5 bilhetes?",
        opcoes: ["15 €", "18 €", "20 €", "24 €"],
        certa: 2,
        explicacao: "Cada bilhete custa 12 ÷ 3 = 4 €. Então 5 × 4 = 20 €.",
      },
    ],
  },
  {
    id: "portugues",
    titulo: "Gramática",
    disciplina: "Português",
    icone: "livro",
    cor: "#b79cff",
    perguntas: [
      {
        pergunta: "Em “O Tomás marcou um golo”, qual é o sujeito?",
        opcoes: ["marcou", "O Tomás", "um golo", "marcou um golo"],
        certa: 1,
        explicacao: "O sujeito é quem pratica a ação: quem marcou? O Tomás.",
      },
      {
        pergunta: "Em “A professora entregou os testes aos alunos”, qual é o complemento direto?",
        opcoes: ["A professora", "os testes", "aos alunos", "entregou"],
        certa: 1,
        explicacao: "Pergunta-se ao verbo: entregou o quê? Os testes.",
      },
      {
        pergunta: "“Ontem, eu joguei à bola.” Em que tempo está o verbo?",
        opcoes: ["Presente", "Pretérito perfeito", "Futuro", "Pretérito imperfeito"],
        certa: 1,
        explicacao: "A ação aconteceu e terminou no passado: pretérito perfeito.",
      },
      {
        pergunta: "Qual destas palavras é um adjetivo?",
        opcoes: ["correr", "rápido", "bola", "ontem"],
        certa: 1,
      },
      {
        pergunta: "Qual é o plural de “pão”?",
        opcoes: ["pãos", "pães", "pões", "pãe"],
        certa: 1,
      },
      {
        pergunta: "Qual é o antónimo (contrário) de “generoso”?",
        opcoes: ["bondoso", "egoísta", "simpático", "alto"],
        certa: 1,
      },
    ],
  },
  {
    id: "ciencias",
    titulo: "Corpo humano",
    disciplina: "Ciências Naturais",
    icone: "ciencia",
    cor: "#5fd6a0",
    perguntas: [
      {
        pergunta: "Onde começa a digestão?",
        opcoes: ["Estômago", "Boca", "Intestino delgado", "Esófago"],
        certa: 1,
        explicacao: "Começa na boca, com a mastigação e a saliva.",
      },
      {
        pergunta: "Onde é absorvida a maior parte dos nutrientes?",
        opcoes: ["Estômago", "Intestino grosso", "Intestino delgado", "Esófago"],
        certa: 2,
      },
      {
        pergunta: "Qual é o órgão que bombeia o sangue?",
        opcoes: ["Pulmão", "Coração", "Fígado", "Rim"],
        certa: 1,
      },
      {
        pergunta: "Onde se fazem as trocas de gases nos pulmões?",
        opcoes: ["Traqueia", "Brônquios", "Alvéolos pulmonares", "Laringe"],
        certa: 2,
      },
      {
        pergunta: "Qual é o gás que o nosso corpo aproveita quando respiramos?",
        opcoes: ["Dióxido de carbono", "Oxigénio", "Azoto", "Hidrogénio"],
        certa: 1,
      },
      {
        pergunta: "Qual é o órgão do sistema excretor que filtra o sangue?",
        opcoes: ["Rim", "Estômago", "Coração", "Pulmão"],
        certa: 0,
        explicacao: "Os rins filtram o sangue e produzem a urina.",
      },
    ],
  },
  {
    id: "descobrimentos",
    titulo: "Os Descobrimentos",
    disciplina: "História e Geografia",
    icone: "mapa",
    cor: "#ff7a7a",
    perguntas: [
      {
        pergunta: "Em que ano os portugueses conquistaram Ceuta?",
        opcoes: ["1385", "1415", "1498", "1500"],
        certa: 1,
      },
      {
        pergunta: "Quem dobrou o Cabo da Boa Esperança em 1488?",
        opcoes: ["Vasco da Gama", "Bartolomeu Dias", "Pedro Álvares Cabral", "Gil Eanes"],
        certa: 1,
      },
      {
        pergunta: "Quem chegou à Índia por mar em 1498?",
        opcoes: ["Pedro Álvares Cabral", "Bartolomeu Dias", "Vasco da Gama", "Fernão de Magalhães"],
        certa: 2,
      },
      {
        pergunta: "Quem chegou ao Brasil em 1500?",
        opcoes: ["Vasco da Gama", "Pedro Álvares Cabral", "Cristóvão Colombo", "Bartolomeu Dias"],
        certa: 1,
      },
      {
        pergunta: "Qual era o navio leve e rápido muito usado nas viagens dos Descobrimentos?",
        opcoes: ["Galé", "Caravela", "Jangada", "Trirreme"],
        certa: 1,
      },
    ],
  },
  {
    id: "ingles",
    titulo: "Grammar and vocabulary",
    disciplina: "Inglês",
    icone: "ingles",
    cor: "#ff8fcf",
    perguntas: [
      {
        pergunta: "I ___ eleven years old.",
        opcoes: ["is", "am", "are", "have"],
        certa: 1,
        explicacao: "Em inglês diz-se “I am eleven years old”, nunca “I have eleven years”.",
      },
      {
        pergunta: "She ___ chess every Saturday.",
        opcoes: ["play", "plays", "playing", "played"],
        certa: 1,
        explicacao: "Com he/she/it, no presente, o verbo leva -s: she plays.",
      },
      {
        pergunta: "What is the plural of “child”?",
        opcoes: ["childs", "childrens", "children", "childes"],
        certa: 2,
        explicacao: "É um plural irregular: child → children.",
      },
      {
        pergunta: "There ___ two books on the table.",
        opcoes: ["is", "are", "am", "be"],
        certa: 1,
      },
      {
        pergunta: "What is the past of “go”?",
        opcoes: ["goed", "went", "gone", "going"],
        certa: 1,
        explicacao: "“Go” é irregular: go → went.",
      },
      {
        pergunta: "What is the opposite of “big”?",
        opcoes: ["tall", "small", "fast", "old"],
        certa: 1,
      },
    ],
  },
  {
    id: "xadrez",
    titulo: "Xadrez: o básico",
    disciplina: "Xadrez",
    icone: "xadrez",
    cor: "#ffb454",
    perguntas: [
      { pergunta: "Quantos pontos vale, em geral, a Dama?", opcoes: ["3", "5", "9", "10"], certa: 2 },
      { pergunta: "Qual peça se move em “L”?", opcoes: ["Bispo", "Torre", "Cavalo", "Peão"], certa: 2 },
      {
        pergunta: "Como se chama quando o Rei não tem como escapar?",
        opcoes: ["Afogamento", "Xeque-mate", "Roque", "Promoção"],
        certa: 1,
      },
      { pergunta: "Em que direção o Bispo se move?", opcoes: ["Em linha reta", "Em diagonal", "Em L", "Só 1 casa"], certa: 1 },
    ],
  },
];

// Calendário do Google (o mesmo que aparece em /calendario)
export const calendarioGoogle = {
  id: "de9cc48fc3481bd47c36c8cba80464175e89936587b79c4664551e1d779947e6@group.calendar.google.com",
  fuso: "Europe/Lisbon",
};
