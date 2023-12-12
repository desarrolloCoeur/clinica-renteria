import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://clinicarenteria.com',
  integrations: [ react({
    include: ["**/react/*"],
  }),mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })]
});