export interface Heritage {
  id: string;
  title: string;
  type: string;
  year_start: number;
  year_end?: number;
  importance?: 1 | 2 | 3 | 4 | 5;
  authors: string[];
  tags: string[];
  status: "verified" | "draft" | "disputed";
  platform: string;
  summary: string;
  storyMarkdown?: string;
  cover?: string;
  coverAlt?: string;
  coverCredit?: string;
  coverSourceUrl?: string;
  coverOrigin?: "official" | "archive" | "own-capture" | "press" | "unknown";
  coverLicense?: string;
  sources: string[];
  company?: string;
}

export interface Person {
  id: string;
  name: string;
  bio: string;
  roles: string[];
  periods: string[];
  projects: string[];
}

export interface Company {
  id: string;
  name: string;
  overview: string;
  founded: number;
  dissolved?: number;
  milestones: { year: number; event: string }[];
  projects: string[];
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  id: string;
}
