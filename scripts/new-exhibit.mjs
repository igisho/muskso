#!/usr/bin/env node
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import readline from "node:readline/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentRoot = path.resolve(__dirname, "../src/content");

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    return [key, rest.join("=")];
  })
);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const ask = async (key, question, fallback = "") => {
  if (args.has(key)) return args.get(key);
  const answer = (await rl.question(`${question}${fallback ? ` [${fallback}]` : ""}: `)).trim();
  return answer || fallback;
};

const slugify = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

const fail = (message) => {
  console.error(`Chyba: ${message}`);
  rl.close();
  process.exit(1);
};

const collection = await ask("collection", "Kolekcia (projects/people/companies)", "projects");
if (!["projects", "people", "companies"].includes(collection)) {
  fail("kolekcia musí byť projects, people alebo companies");
}

const title = await ask("title", "Názov");
if (!title) fail("názov je povinný");

const id = slugify(await ask("id", "ID (slug)", slugify(title)));
if (!id) fail("ID je povinné");

const year = Number(await ask("year", "Rok (vydania / založenia / narodenia)", String(new Date().getFullYear())));
if (!Number.isInteger(year) || year < 1900 || year > 2100) fail("rok musí byť celé číslo 1900–2100");

const files = (await readdir(path.join(contentRoot, collection))).filter((name) => name.endsWith(".json"));

for (const fileName of files) {
  const raw = JSON.parse(await readFile(path.join(contentRoot, collection, fileName), "utf8"));
  if (raw.id === id) fail(`záznam s ID "${id}" už existuje v ${fileName}`);
}

let record;
let fileName;

if (collection === "projects") {
  const type = await ask("type", "Typ (application/game/utility/system)", "application");
  const platform = await ask("platform", "Platforma", "Web");
  const author = await ask("author", "Autor alebo tím (oddeľte čiarkou)", "");
  const summary = await ask("summary", "Krátke zhrnutie (max 300 znakov)", "");
  const source = await ask("url", "Primárny zdroj (URL)", "");
  const company = await ask("company", "ID firmy (nepovinné)", "");

  if (!author) fail("aspoň jeden autor je povinný");
  if (!summary) fail("zhrnutie je povinné");
  if (summary.length > 300) fail("zhrnutie má viac ako 300 znakov");
  if (!/^https?:\/\//.test(source)) fail("zdroj musí byť platná URL");

  record = {
    id,
    title,
    type,
    year_start: year,
    importance: 3,
    authors: author.split(",").map((value) => value.trim()).filter(Boolean),
    tags: [],
    status: "draft",
    platform,
    summary,
    sources: [source],
    ...(company ? { company } : {}),
  };
  fileName = `${year}-${id}.json`;
} else if (collection === "people") {
  const bio = await ask("bio", "Krátky životopis", "");
  const role = await ask("role", "Rola (oddeľte čiarkou)", "");
  const period = await ask("period", "Obdobie pôsobenia", "");
  const projectIds = await ask("projects", "ID projektov (oddeľte čiarkou)", "");

  if (!bio || !role || !period) fail("bio, rola a obdobie sú povinné");

  record = {
    id,
    name: title,
    bio,
    roles: role.split(",").map((value) => value.trim()).filter(Boolean),
    periods: period.split(",").map((value) => value.trim()).filter(Boolean),
    projects: projectIds.split(",").map((value) => value.trim()).filter(Boolean),
  };
  fileName = `${year}-${id}.json`;
} else {
  const overview = await ask("overview", "Krátky opis firmy", "");
  const projectIds = await ask("projects", "ID projektov (oddeľte čiarkou)", "");

  if (!overview) fail("opis firmy je povinný");

  record = {
    id,
    name: title,
    overview,
    founded: year,
    milestones: [],
    projects: projectIds.split(",").map((value) => value.trim()).filter(Boolean),
  };
  fileName = `${year}-${id}.json`;
}

const target = path.join(contentRoot, collection, fileName);
await writeFile(target, `${JSON.stringify(record, null, 2)}\n`, { flag: "wx" });

console.log(`\nVytvorené: src/content/${collection}/${fileName}`);
console.log("Ďalšie kroky:");
console.log("  1. doplňte storyMarkdown, tagy a ďalšie zdroje");
console.log("  2. overte, že ID sedia v referenciách");
console.log("  3. spustite npm run validate:content && npm run lint && npm test");
rl.close();
