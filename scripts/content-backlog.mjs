import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectsDir = path.resolve(__dirname, "../src/content/projects");

const files = (await readdir(projectsDir)).filter((name) => name.endsWith(".json")).sort();

const projects = await Promise.all(
  files.map(async (fileName) => {
    const filePath = path.join(projectsDir, fileName);
    const raw = JSON.parse(await readFile(filePath, "utf8"));
    const hasCover = Boolean(raw.cover);
    const hasStory = Boolean(raw.storyMarkdown);
    const score = (raw.importance ?? 0) * 10 + (hasCover ? 0 : 2) + (hasStory ? 0 : 1);

    return {
      fileName,
      id: raw.id,
      title: raw.title,
      year: raw.year_start,
      status: raw.status,
      importance: raw.importance ?? null,
      hasCover,
      hasStory,
      sources: Array.isArray(raw.sources) ? raw.sources.length : 0,
      score,
    };
  })
);

const backlog = projects
  .filter((project) => !project.hasCover || !project.hasStory)
  .sort(
    (a, b) =>
      b.score - a.score ||
      (b.importance ?? 0) - (a.importance ?? 0) ||
      a.year - b.year ||
      a.title.localeCompare(b.title)
  );

console.log(JSON.stringify({ total: projects.length, backlogCount: backlog.length, backlog }, null, 2));
