"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, CalendarDays, GraduationCap, LayoutGrid, Zap } from "lucide-react";

const paginas = [
  { href: "/", titulo: "Início", icon: LayoutGrid },
  { href: "/calendario", titulo: "Calendário", icon: CalendarDays },
  { href: "/testes", titulo: "Testes", icon: GraduationCap },
  { href: "/3d", titulo: "3D", icon: Box },
];

export default function Navegacao() {
  const pathname = usePathname();

  return (
    <aside className="navigation">
      <Link href="/" className="brand">
        <span className="brand-mark">T<span>.</span></span>
        <span>Casa do <br />Tomás</span>
      </Link>
      <nav aria-label="Navegação principal">
        {paginas.map(({ href, titulo, icon: Icon }) => {
          const ativo = href === "/" ? pathname === href : pathname.startsWith(href);
          return (
            <Link key={href} href={href} className="nav-link" aria-current={ativo ? (pathname === href ? "page" : "location") : undefined}>
              <Icon size={19} aria-hidden /> {titulo}
            </Link>
          );
        })}
        <Link href="/#atalhos" className="nav-link"><Zap size={19} aria-hidden /> Atalhos</Link>
      </nav>
      <div className="nav-footer">6.º ano</div>
    </aside>
  );
}
