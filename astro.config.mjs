import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import remarkFrontmatter from "remark-frontmatter";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
  ],
  output: "hybrid",
  adapter: vercel(),
  prefetch: true,
  markdown: {
    remarkPlugins: [remarkFrontmatter],
  },
  site: "https://astro-docs.vercel.app",
});
