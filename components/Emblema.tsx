"use client";

import { useState } from "react";
import { iniciais, slugClube } from "@/lib/clubes";

const exts = ["png", "svg", "webp"];

export default function Emblema({ clube, tamanho = 48 }: { clube: string; tamanho?: number }) {
  const [i, setI] = useState(0);
  const slug = slugClube(clube);
  const cor = `hsl(${[...slug].reduce((a, c) => a + c.charCodeAt(0), 0) % 360} 35% 32%)`;

  if (i >= exts.length) {
    return (
      <span
        className="num grid shrink-0 place-items-center rounded-full text-foreground"
        style={{ width: tamanho, height: tamanho, background: cor, fontSize: tamanho * 0.4 }}
        aria-label={clube}
      >
        {iniciais(clube)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/clubes/${slug}.${exts[i]}`}
      alt={clube}
      width={tamanho}
      height={tamanho}
      className="shrink-0 object-contain"
      style={{ width: tamanho, height: tamanho }}
      onError={() => setI(i + 1)}
    />
  );
}
