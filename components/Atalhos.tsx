import Icone from "./Icone";
import { atalhos } from "@/lib/data";

export default function Atalhos() {
  return (
    <section className="entra d5 land:flex-1 land:min-h-0 flex flex-col">
      <h2 className="display text-4xl md:text-5xl land:text-3xl mb-4 land:mb-2.5">Atalhos</h2>
      <div className="grid grid-cols-3 sm:grid-cols-6 land:grid-cols-2 land:grid-rows-3 land:flex-1 land:min-h-0 gap-3 land:gap-2">
        {atalhos.map((a) => (
          <a
            key={a.nome}
            href={a.url}
            className="cartao group flex flex-col items-center gap-3 px-3 py-6 land:py-2 land:justify-center transition hover:-translate-y-1 hover:border-[color:var(--c)]"
            style={{ ["--c" as string]: a.cor }}
          >
            <span className="grid h-14 w-14 land:h-[clamp(3rem,8vh,4.5rem)] land:w-[clamp(3rem,8vh,4.5rem)] place-items-center rounded-2xl transition group-hover:scale-110"
              style={{ background: a.cor + "22", color: a.cor }}>
              <Icone nome={a.icone} size={32} />
            </span>
            <span className="text-sm land:text-base font-medium">{a.nome}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
