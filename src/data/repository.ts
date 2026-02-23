import { companySchema, heritageSchema, personSchema } from "@/data/schemas";
import type { Company, Heritage, Person, TimelineEvent } from "@/data/types";
import type { ZodType } from "zod";

type JsonModule = { default: unknown };

const parseCollection = <T>(
  modules: Record<string, unknown>,
  parser: ZodType<T>
): T[] => {
  return Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, module]) => parser.parse((module as JsonModule).default));
};

const projectModules = import.meta.glob("../content/projects/*.json", { eager: true });
const peopleModules = import.meta.glob("../content/people/*.json", { eager: true });
const companyModules = import.meta.glob("../content/companies/*.json", { eager: true });

export const heritageItems = parseCollection(projectModules, heritageSchema) as Heritage[];
export const people = parseCollection(peopleModules, personSchema) as Person[];
export const companies = parseCollection(companyModules, companySchema) as Company[];
export const timelineEvents: TimelineEvent[] = [...heritageItems]
  .sort((a, b) => a.year_start - b.year_start || a.title.localeCompare(b.title))
  .map((project) => ({
    year: project.year_start,
    title: project.title,
    description: project.summary,
    id: project.id,
  }));

export const getProjects = () => heritageItems;
export const getPeople = () => people;
export const getCompanies = () => companies;
export const getTimeline = () => timelineEvents;
