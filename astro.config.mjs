// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: vercel({
    isr: {
      bypassToken: process.env.VERCEL_BYPASS_TOKEN
    }
  }),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    "/event": {
      status: 308,
      destination: "/event/news",
    },
    "/gallery": {
      status: 308,
      destination: "/gallery/illustration",
    },
    "/social": {
      status: 308,
      destination: "/",
    },
    "/blog": {
      status: 308,
      destination: "/",
    }
  }
});
