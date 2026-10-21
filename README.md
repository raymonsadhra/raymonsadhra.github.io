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

To add a project, duplicate a typed entry in `src/data/projects.ts`, give it a unique slug, and add any real URLs under the same slug in `src/data/links.ts`. Published detail pages are controlled by `generateStaticParams` in `src/app/work/[slug]/page.tsx`; draft entries marked with `needsInfo` remain out of the public route list until their facts are complete.

Causeway is intentionally published as a clearly marked draft using `publishDraft: true`. Confirm the role, features, Causeway-specific technologies, team contribution, impact, and media in `src/data/projects.ts` before removing its `needsInfo` list. Add owned screenshots or video under `public/images/projects/causeway/` and configure them in `src/data/media.ts`; add only real repository or demo URLs in `src/data/links.ts`.

### Add real media

1. Put a portrait in `public/images/profile/` and set `media.profile.portrait` to `/images/profile/filename.jpg`.
2. Put project covers and galleries in `public/images/projects/`; update that project in `src/data/media.ts`.
3. Put travel and journal photos in `public/images/life/`; add root-relative paths to the entry's `photos` array in `src/data/life.ts`.
4. Put research diagrams in `public/images/research/` and videos in `public/videos/`.
5. Put the résumé and paper PDFs in `public/documents/`, then update `src/data/links.ts` (for example, `resume: "/documents/resume.pdf"`).

Use descriptive filenames, optimized WebP/AVIF/JPEG files, useful alt text when wiring real images, and compressed MP4/WebM video. Current abstract media is intentionally labeled placeholder or conceptual.

### Journal draft studio

Visit `/life/editor`. It stores drafts only in that browser’s `localStorage`; it never claims to modify the deployed filesystem. Export the JSON, review it, and copy verified entries into `src/data/life.ts`. Import restores an exported draft locally.

### Edit the World Tree

The homepage reads project and experience copy directly from `src/data/projects.ts` and `src/data/experience.ts`. `src/data/worldTree.ts` contains only presentation hints:

- `projectTreePositions` selects the left/right canopy branch and vertical level for a project slug.
- `experienceTreePositions` selects the left/right side for an organization.
- Entries without an explicit mapping fall back to an alternating, stacked position so new content remains readable.

Add or edit facts in their original data file first, then optionally add a placement hint. The shared tree geometry lives in `src/components/WorldTreeHome.tsx`; routine content changes should not require editing its SVG.

## Routes

`/`, `/work`, `/work/[slug]`, `/experience`, `/research`, `/about`, `/life`, `/life/editor`, and `/contact`.

## GitHub Pages deployment

The project is compatible with GitHub Pages because `next.config.ts` uses `output: "export"` and the complete site is emitted to `out/`. Browser-local theme and journal features do not need a server.

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`. It installs the locked dependencies, runs TypeScript, ESLint, tests, and the production build, then publishes `out/` with the official GitHub Pages actions. It automatically uses no base path for a `<username>.github.io` user site and uses `/<repository>` for a project site. Canonical metadata, sitemap URLs, Next.js routes, and public media paths receive the corresponding deployment URL at build time.

### Umami Cloud analytics

Analytics is optional and disabled unless `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is set during a production build. Local `npm run dev` visits are never tracked, and the tracker is restricted to `raymonsadhra.github.io`. It also respects supported Do Not Track signals and excludes URL query strings and hashes.

1. Sign in to [Umami Cloud](https://cloud.umami.is/), open **Websites**, and add a website with domain `raymonsadhra.github.io`.
2. Copy the Website ID from its tracking code. This public identifier is not an account password or administrative API key.
3. In the GitHub repository, open **Settings → Secrets and variables → Actions → Variables** and create `NEXT_PUBLIC_UMAMI_WEBSITE_ID` with that value.
4. Run the Pages workflow again, or push a new commit to `main`.

Umami automatically records initial pageviews and client-side Next.js navigation. Declarative event attributes record `featured_work_click`, `resume_click`, `email_click`, `linkedin_click`, `github_click`, and `project_resource_click` without storing email addresses or other user-entered data. The project/resource properties contain only stable, nonpersonal identifiers.

In the Umami website dashboard, use the overview for visitors and pageviews, **Pages** for popular case studies, **Locations** for approximate country/region/city, **Referrers** for traffic sources, and **Events** for portfolio engagement. Location values are approximate and do not identify where a specific visitor lives or works. Umami cannot identify individual recruiters or Google employees.

After the repository exists, open **Settings → Pages → Build and deployment** and select **GitHub Actions**. GitHub Pages is available for public repositories on GitHub Free; private-repository Pages availability depends on the account or organization plan.

### Publish an update

```bash
git add .
git commit -m "Describe the portfolio update"
git push origin main
```

Open the repository’s **Actions** tab and select **Deploy portfolio to GitHub Pages** to see each quality check and the deployment URL. A green deployment job means that GitHub Pages accepted the generated artifact.

To roll back a broken deployment, revert the offending commit and push the revert:

```bash
git revert <commit-sha>
git push origin main
```

The workflow will deploy the restored source as a new Pages deployment. Do not force-push `main` for a normal rollback.

GitHub Pages cannot provide a server runtime, private environment variables, database writes, or authenticated upload endpoints. This portfolio currently requires none of those: `/life/editor` remains local to each browser and every case-study route is pre-rendered. A custom domain is configured in the repository’s Pages settings, then pointed to GitHub with the DNS records it supplies; keep a `CNAME` file in the published artifact when using one.

### Custom domain

1. Verify the domain under **GitHub account settings → Pages → Verified domains**.
2. Open the repository’s **Settings → Pages** and enter the domain under **Custom domain**.
3. For `www`, create the CNAME record GitHub supplies. For an apex domain, use GitHub’s documented A/AAAA records.
4. Wait for DNS verification, then enable **Enforce HTTPS**.
5. Set `NEXT_PUBLIC_SITE_URL` to the final `https://` origin in the deployment workflow and include a `public/CNAME` file containing only the hostname.

Do not add the `CNAME` file until the domain is owned and ready. The free `github.io` address works without one.

No API keys, paid services, or server runtime are required. The contact area intentionally shows no fake form; email and profile CTAs activate only after real values are configured.

## Before public launch

- Confirm employment titles, dates, locations, lab affiliations, and project ownership.
- Add actual profile/contact URLs and email.
- Add the résumé, paper, conference, award, repository, and live-demo URLs.
- Replace photo and project placeholders with owned media.
- Set the final canonical domain and add a custom Open Graph image if desired.
- Run the three quality-check commands above.
