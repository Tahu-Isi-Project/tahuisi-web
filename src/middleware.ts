import { defineMiddleware } from "astro:middleware";
import configs from "./island-configs.json";

type IslandHeader = {
  island: string;
  headers: {
    name: string;
    value: string;
  }[];
};

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const url = context.url.pathname;

  if (url.includes("_server-islands/")) {
    const config = (configs as IslandHeader[]).find((item) =>
      url.includes(item.island)
    );

    if (config)
      config.headers.forEach((header) =>
        response.headers.set(header.name, header.value)
      );
  }

  else if (!response.headers.has("Cache-Control")) {
    response.headers.set("Cache-Control", "public, max-age=60, s-maxage=31536000");
    response.headers.set("Cache-Tag", "page-shell");
  }

  return response;
});
