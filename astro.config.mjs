import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import node from "@astrojs/node";
import md from '@astropub/md'

import shiki from "shiki";
const shikiTheme = await shiki.loadTheme("../../../../../src/themes/shiki/everforest-dark.json");

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone"
  }),
  experimental: {
    assets: true
  },
  integrations: [tailwind(), md(), mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: shikiTheme
    },
  },
  output: "server"
});