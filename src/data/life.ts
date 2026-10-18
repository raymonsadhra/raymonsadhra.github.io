export const lifeCategories = ["Portraits", "Hobbies", "Travel", "People & memories", "Campus", "Hackathons", "Milestones", "Journal"] as const;
export type LifeCategory = (typeof lifeCategories)[number];
export type LifeEntry = {
  slug: string;
  title: string;
  date: string;
  location?: string;
  caption: string;
  category: LifeCategory;
  order: number;
  tags: string[];
  layout: "wide" | "portrait" | "square";
  photos: string[];
  placeholder: boolean;
};

/**
 * Publish only real personal entries here. The homepage root prompts come from
 * rootContentGroups and are explicitly labeled as future collection spaces.
 */
export const lifeEntries: LifeEntry[] = [];

export const rootContentGroups = [
  { id: "hobbies", label: "Hobbies & interests", prompt: "A future collection for the things I make time for away from code.", category: "Hobbies" as const },
  { id: "travel", label: "Places & paths", prompt: "A future home for real travel and campus photographs.", category: "Travel" as const },
  { id: "moments", label: "People & moments", prompt: "A private-by-default space for memories I choose to share.", category: "People & memories" as const },
] as const;

export const getLifeEntry = (slug: string) => lifeEntries.find((entry) => entry.slug === slug);
