import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentRoot = path.resolve(__dirname, "../src/content");

const heritageSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: z.string().min(1),
  year_start: z.number().int(),
  year_end: z.number().int().optional(),
  authors: z.array(z.string().min(1)).min(1),
  tags: z.array(z.string().min(1)),
  status: z.enum(["verified", "draft", "disputed"]),
  platform: z.string().min(1),
  summary: z.string().min(1).max(300),
  storyMarkdown: z.string().min(1).optional(),
  cover: z.string().optional(),
  sources: z.array(z.string().url()),
  company: z.string().optional(),
});

const personSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  bio: z.string().min(1),
  roles: z.array(z.string().min(1)).min(1),
  periods: z.array(z.string().min(1)).min(1),
  projects: z.array(z.string().min(1)),
});

const companySchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  overview: z.string().min(1),
  founded: z.number().int(),
  dissolved: z.number().int().optional(),
  milestones: z.array(
    z.object({
      year: z.number().int(),
      event: z.string().min(1),
    })
  ),
  projects: z.array(z.string().min(1)),
});

const readJsonCollection = async (subdir, schema) => {
  const dir = path.join(contentRoot, subdir);
  const files = (await readdir(dir)).filter((name) => name.endsWith(".json")).sort();

  const records = [];
  for (const name of files) {
    const filePath = path.join(dir, name);
    const raw = JSON.parse(await readFile(filePath, "utf8"));
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      throw new Error(`Invalid ${subdir}/${name}: ${parsed.error.message}`);
    }
    records.push({ fileName: name, data: parsed.data });
  }

  return records;
};

const fileNamePattern = /^(\d{4})(?:-(0[1-9]|1[0-2]))?-([a-z0-9]+(?:-[a-z0-9]+)*)\.json$/;

const assertFileNameConvention = (fileName, expectedYear, expectedSlug, label) => {
  const match = fileName.match(fileNamePattern);
  if (!match) {
    throw new Error(`Invalid ${label} filename: ${fileName}. Expected YYYY-slug.json or YYYY-MM-slug.json`);
  }

  const [, yearText, , slug] = match;
  const year = Number(yearText);

  if (expectedYear !== null && year !== expectedYear) {
    throw new Error(`Invalid ${label} filename year in ${fileName}. Expected ${expectedYear}`);
  }

  if (slug !== expectedSlug) {
    throw new Error(`Invalid ${label} filename slug in ${fileName}. Expected ${expectedSlug}`);
  }
};

const assertUniqueIds = (records, label) => {
  const seen = new Set();
  for (const record of records) {
    if (seen.has(record.id)) {
      throw new Error(`Duplicate ${label} id: ${record.id}`);
    }
    seen.add(record.id);
  }
};

const run = async () => {
  const projects = await readJsonCollection("projects", heritageSchema);
  const people = await readJsonCollection("people", personSchema);
  const companies = await readJsonCollection("companies", companySchema);

  const projectRecords = projects.map((entry) => entry.data);
  const peopleRecords = people.map((entry) => entry.data);
  const companyRecords = companies.map((entry) => entry.data);

  assertUniqueIds(projectRecords, "project");
  assertUniqueIds(peopleRecords, "person");
  assertUniqueIds(companyRecords, "company");

  const projectIds = new Set(projectRecords.map((project) => project.id));
  const companyIds = new Set(companyRecords.map((company) => company.id));
  const projectYearsById = new Map(projectRecords.map((project) => [project.id, project.year_start]));

  for (const project of projects) {
    assertFileNameConvention(project.fileName, project.data.year_start, project.data.id, "project");
  }

  for (const company of companies) {
    assertFileNameConvention(company.fileName, company.data.founded, company.data.id, "company");
  }

  for (const person of people) {
    const linkedYears = person.data.projects
      .map((projectId) => projectYearsById.get(projectId))
      .filter((year) => typeof year === "number");
    const earliestYear = linkedYears.length > 0 ? Math.min(...linkedYears) : null;

    assertFileNameConvention(person.fileName, earliestYear, person.data.id, "person");
  }

  for (const project of projectRecords) {
    if (project.company && !companyIds.has(project.company)) {
      throw new Error(`Project ${project.id} references missing company ${project.company}`);
    }
  }

  for (const person of peopleRecords) {
    for (const projectId of person.projects) {
      if (!projectIds.has(projectId)) {
        throw new Error(`Person ${person.id} references missing project ${projectId}`);
      }
    }
  }

  for (const company of companyRecords) {
    for (const projectId of company.projects) {
      if (!projectIds.has(projectId)) {
        throw new Error(`Company ${company.id} references missing project ${projectId}`);
      }
    }
  }

  console.log("Content validation passed.");
};

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
