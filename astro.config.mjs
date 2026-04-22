// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  redirects: {
    "/event": {
      status: 308,
      destination: "/",
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
  },

  adapter: node({
    mode: "standalone"
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});