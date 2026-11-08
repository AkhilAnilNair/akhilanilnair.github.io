// astro.config.mjs
// -----------------
// For Vercel: no changes needed — deploy as-is.
//
// For GitHub Pages:
//   1. Set `site` to your repo URL:    site: 'https://your-username.github.io'
//   2. Set `base` to your repo name:   base: '/your-repo-name'
//      (omit `base` if the repo is your username.github.io root site)
//   3. Add the GitHub Pages adapter:   npm i @astrojs/node  (or use static output — it already is)

import { defineConfig } from 'astro/config';

export default defineConfig({
  // Uncomment and fill in for GitHub Pages:
  // site: 'https://your-username.github.io',
  // base: '/portfolio',

  output: 'static', // builds to dist/ — works on Vercel & GitHub Pages
});
