// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    iconDir: "src/assets/icons",
  })],
  vite: {
    plugins: [yaml()]
  }
});