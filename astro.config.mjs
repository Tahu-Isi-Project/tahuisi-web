// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import tailwindcss from "@tailwindcss/vite";

const allowedHosts = [
  process.env.BE_ENDPOINT || "",
  process.env.S3_API_ENDPOINT || ""
];

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  server: {
    allowedHosts,
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
    host: "0.0.0.0",
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
  },

  adapter: node({
    mode: "standalone"
  }),

  vite: {
    plugins: [tailwindcss()]
  }
});