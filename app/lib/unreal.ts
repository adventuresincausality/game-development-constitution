import unrealSkillsJson from "../data/unreal-skills.json";

export type UnrealReference = {
  slug: string;
  file: string;
  title: string;
  rawMarkdown: string;
  webMarkdown: string;
  searchText: string;
};

export type UnrealSkill = {
  slug: string;
  name: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  referenceCount: number;
  rawMarkdown: string;
  webMarkdown: string;
  searchText: string;
  references: UnrealReference[];
};

export const unrealSkills = unrealSkillsJson as UnrealSkill[];
export const unrealSkillBySlug = new Map(unrealSkills.map((skill) => [skill.slug, skill]));
export const unrealReferenceCount = unrealSkills.reduce((total, skill) => total + skill.referenceCount, 0);
