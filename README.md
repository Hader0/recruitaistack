# RecruitPicks

Directory of AI tools for recruiters, built with Astro. Tool data lives in `src/data/tools.json`.

- Dev: `npm install && npx astro dev`
- Deploys to GitHub Pages on push to `main` (`.github/workflows/deploy.yml`).
- Defaults build for https://recruitpicks.com (base `/`). The Pages workflow sets `SITE_URL`/`BASE_PATH` for hader0.github.io/recruitaistack; remove those env vars and add `public/CNAME` when the domain is live.
