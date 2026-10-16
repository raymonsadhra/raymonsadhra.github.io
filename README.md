# Raymon Sadhra — Built Worlds

A production-ready, statically exported Next.js portfolio organized around the different worlds Raymon builds: systems, AI, research, developer tools, products, and life beyond code.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Quality checks:

```bash
npm run typecheck
npm test
npm run build
```

## Content checklist

All content is separated from layout:

- `src/data/links.ts`: GitHub, LinkedIn, email, résumé, Scholar, project, paper, award, demo, and conference URLs. Keep unknown links `null`; their buttons stay hidden.
- `src/data/projects.ts`: projects, categories, case studies, stacks, and verified results.
- `src/data/experience.ts`: roles, dates, achievements, and verification flags. Confirm every exact title, date, location, and ownership statement before making the site public.
- `src/data/life.ts`: photo-journal entries. Duplicate one typed entry to add a story.
- `src/data/site.ts`: navigation, “Now” items, and skill groups.
- `src/data/media.ts`: portrait, gallery, video, and research asset paths.

### Add real media

1. Put a portrait in `public/images/profile/` and set `media.profile.portrait` to `/images/profile/filename.jpg`.
2. Put project covers and galleries in `public/images/projects/`; update that project in `src/data/media.ts`.
3. Put travel and journal photos in `public/images/life/`; add root-relative paths to the entry's `photos` array in `src/data/life.ts`.
4. Put research diagrams in `public/images/research/` and videos in `public/videos/`.
5. Put the résumé and paper PDFs in `public/documents/`, then update `src/data/links.ts` (for example, `resume: "/documents/resume.pdf"`).

Use descriptive filenames, optimized WebP/AVIF/JPEG files, useful alt text when wiring real images, and compressed MP4/WebM video. Current abstract media is intentionally labeled placeholder or conceptual.

### Journal draft studio

Visit `/life/editor`. It stores drafts only in that browser’s `localStorage`; it never claims to modify the deployed filesystem. Export the JSON, review it, and copy verified entries into `src/data/life.ts`. Import restores an exported draft locally.

## Routes

`/`, `/work`, `/work/[slug]`, `/experience`, `/research`, `/about`, `/life`, `/life/editor`, and `/contact`.

## Deploy to Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import it in Vercel as a Next.js project.
3. Build command: `npm run build`.
4. The site uses `output: "export"`, producing `out/`; Vercel detects this automatically.
5. Replace the Sites URL in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` after connecting a custom domain.

No API keys, paid services, or server runtime are required. Core interactions are browser-local. The contact area intentionally shows no fake form; email and profile CTAs activate only after real values are configured.

## Before public launch

- Confirm employment titles, dates, locations, lab affiliations, and project ownership.
- Add actual profile/contact URLs and email.
- Add the résumé, paper, conference, award, repository, and live-demo URLs.
- Replace photo and project placeholders with owned media.
- Set the final canonical domain and add a custom Open Graph image if desired.
- Run the three quality-check commands above.
