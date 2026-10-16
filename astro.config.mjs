import { defineConfig } from 'astro/config';
// Defaults target the custom domain. The GitHub Pages workflow overrides these with
// SITE_URL=https://hader0.github.io and BASE_PATH=/recruitaistack until the domain is live.
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://recruitpicks.com',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
});
