// astro.config.mjs
// -----------------
// Deployed on GitHub Pages at https://akhilanilnair.github.io

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://akhilanilnair.github.io',
  output: 'static', // builds to dist/ — works on Vercel & GitHub Pages
});
