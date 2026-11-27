import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const packageRoot = join(process.cwd(), "node_modules", "@astryxdesign", "theme-neutral");
const fonts = join(packageRoot, "fonts");
const fontName = /^figtree-latin(?:-ext)?-[4567]00-normal\.woff2$/;

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await readdir(fonts);
  return [
    { asset: ["theme.css"] },
    { asset: ["fonts.css"] },
    ...files.filter((file) => fontName.test(file)).map((file) => ({ asset: ["fonts", file] })),
  ];
}

export async function GET(_: Request, { params }: { params: Promise<{ asset: string[] }> }) {
  const [name, file, ...rest] = (await params).asset;
  const stylesheet = !file && (name === "theme.css" || name === "fonts.css");
  const font = rest.length === 0 && name === "fonts" && file && fontName.test(file);

  if (!stylesheet && !font) return new Response(null, { status: 404 });

  const path = stylesheet
    ? join(packageRoot, name === "theme.css" ? "dist/theme.css" : "fonts.css")
    : join(fonts, file);
  const content = await readFile(path);
  return new Response(new Uint8Array(content), {
    headers: { "Content-Type": stylesheet ? "text/css; charset=utf-8" : "font/woff2" },
  });
}
