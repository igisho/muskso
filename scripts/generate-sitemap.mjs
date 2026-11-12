#!/usr/bin/env node
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const site = (process.env.SITE_URL || "https://muskso.sk").replace(/\/$/, "");

const staticRoutes = [
  "/",
  "/archive",
  "/people",
  "/companies",
  "/timeline",
  "/contribute",
  "/docs",
  "/docs/readme",
  "/docs/conduct",
  "/docs/license",
];

const readIds = async (subdir) => {
  const dir = path.join(root, "src/content", subdir);
  const files = (await readdir(dir)).filter((name) => name.endsWith(".json"));
  const entries = [];

  for (const fileName of files) {
    const filePath = path.join(dir, fileName);
    const raw = JSON.parse(await readFile(filePath, "utf8"));
    const info = await stat(filePath);
    entries.push({ id: raw.id, lastmod: info.mtime.toISOString().slice(0, 10) });
  }

  return entries;
};

const escapeXml = (value) =>
  value.replace(/[<>&'"]/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[char]);

const urls = [];

for (const route of staticRoutes) {
  urls.push({ loc: `${site}${route}`, priority: route === "/" ? "1.0" : "0.7" });
}

for (const [subdir, prefix] of [
  ["projects", "project"],
  ["people", "person"],
  ["companies", "company"],
]) {
  for (const entry of await readIds(subdir)) {
    urls.push({
      loc: `${site}/${prefix}/${entry.id}`,
      lastmod: entry.lastmod,
      priority: "0.8",
    });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ""}
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

await writeFile(path.join(dist, "sitemap.xml"), xml, "utf8");
console.log(`Sitemap: ${urls.length} URL → dist/sitemap.xml`);
