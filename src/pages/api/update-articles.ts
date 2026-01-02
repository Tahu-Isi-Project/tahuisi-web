import { z } from 'astro:schema';
import type { APIRoute } from "astro";

const updateSchema = z.array(
  z.object({
    slug: z.string().regex(/^[a-z0-9-]+$/, "Slugs must be lowercase and contain no spaces.")
  })
);

export const POST: APIRoute = async ({ request }) => {
  const secret = request.headers.get("Authorization");

  if (secret !== import.meta.env.API_SECRET)
    return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });

  try {
    const body = await request.json();
    const result = updateSchema.safeParse(body);
    
    if (!result.success) {
      return new Response(JSON.stringify({ 
        message: "Invalid request", 
        errors: result.error.format() 
      }), { status: 400 });
    }

    const articleSlugs = result.data;
    
    const fetchPromises = articleSlugs.map((item) => 
      fetch(`${import.meta.env.BASE_URL}/article/${item.slug}`, {
        method: "GET",
        headers: { "x-prerender-revalidate": import.meta.env.VERCEL_BYPASS_TOKEN }
      })
    );

    await Promise.all(fetchPromises);

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({ message: `${err}` }), { status: 500 });
  }
};
