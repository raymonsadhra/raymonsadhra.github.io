export type LifeEntry = { slug: string; title: string; date: string; location?: string; caption: string; tags: string[]; layout: "wide" | "portrait" | "square"; photos: string[]; placeholder: boolean };

export const lifeEntries: LifeEntry[] = [
  { slug: "life-lately", title: "Life, lately", date: "Add a date", caption: "A reserved space for the small scenes worth remembering.", tags: ["Journal", "Placeholder"], layout: "wide", photos: [], placeholder: true },
  { slug: "places-and-paths", title: "Places & paths", date: "Add a date", location: "Add a location", caption: "Field notes, walks, windows, maps, and the routes between them.", tags: ["Places", "Placeholder"], layout: "portrait", photos: [], placeholder: true },
  { slug: "build-weekend", title: "A build weekend", date: "Add a date", caption: "For the candid hackathon photos, unfinished whiteboards, and post-demo exhale.", tags: ["Making", "Placeholder"], layout: "square", photos: [], placeholder: true },
  { slug: "currently", title: "Currently…", date: "Updated by you", caption: "What I’m reading, learning, listening to, and thinking about right now.", tags: ["Now", "Placeholder"], layout: "portrait", photos: [], placeholder: true },
];

export const getLifeEntry = (slug: string) => lifeEntries.find((entry) => entry.slug === slug);
