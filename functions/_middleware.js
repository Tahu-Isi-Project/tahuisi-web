export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);

  if (url.pathname === "/")
    response.headers.set("Cache-Control", "public, max-age=60, s-maxage=86400");

  if (url.pathname === "/article")
    response.headers.set("Cache-Control", "public, max-age=30, s-maxage=86400");

  return response;
}