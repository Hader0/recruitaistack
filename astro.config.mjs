import { defineConfig } from 'astro/config';
// GitHub Pages defaults. For a custom domain set SITE_URL=https://recruitaistack.com and BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://hader0.github.io',
  base: process.env.BASE_PATH ?? '/recruitaistack',
  trailingSlash: 'always',
});
