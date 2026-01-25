// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      envFiles: ["./.env"]
    },
    imageService: "compile"
  }),

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

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
  }
});