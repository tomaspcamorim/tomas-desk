// Emblemas dos clubes. Põe o ficheiro em public/clubes/<nome>.png (ou .svg / .webp)
// Exemplo: public/clubes/leixoes.png

export const NOSSA_EQUIPA = "leixoes";

// nome (sem acentos, minúsculas, sem " b" no fim) -> nome do ficheiro
const mapa: Record<string, string> = {
  leixoes: "leixoes",
  padroense: "padroense",
  "aldeia nova": "aldeia-nova",
  infesta: "infesta",
  custoias: "custoias",
  "leca fc": "leca-fc",
  "desp. leca balio": "leca-balio",
  lavrense: "lavrense",
  "sra. hora": "senhora-da-hora",
  "rio ave": "rio-ave",
  varzim: "varzim",
};

export function slugClube(nome: string) {
  const chave = nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+b$/, "")
    .trim();
  return mapa[chave] ?? chave.replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function iniciais(nome: string) {
  const p = nome.replace(/\s+B$/, "").split(/\s+/).filter((w) => !/^(de|da|do|fc|sc|cd|ud|gd|desp\.?)$/i.test(w));
  return (p.length > 1 ? p[0][0] + p[1][0] : (p[0] ?? "?").slice(0, 2)).toUpperCase();
}
