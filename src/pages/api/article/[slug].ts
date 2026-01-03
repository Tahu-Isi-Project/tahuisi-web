import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;

  // Sampel artikel untuk sementara. Akan diganti dengan fetch dari backend.
  const sampleArticle = {
    headline: {
      title: "Sebuah Artikel",
      slug: slug,
      excerpt:
        "An excerpt is similar to subtitle.",
      thumbnailSrc: "/img/sample_poster/thumbnail1.png",
      thumbnailAlt: "An article alt",
    },
    author: "Ryhun",
    publishDate: "2026-01-01",
    editDate: "2026-01-03",
    "content": "# Lorem ipsum dolor sit amet\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rutrum dui nec fermentum rutrum. Quisque dolor ante, ultrices id risus ut, vehicula fringilla ante. Vestibulum in iaculis ex. Curabitur placerat, libero ac blandit condimentum, nisi ex hendrerit lorem, nec laoreet urna orci id magna. Integer non quam vehicula, sollicitudin lorem eu, imperdiet magna. Nullam diam justo, scelerisque sit amet accumsan ac, aliquet eu elit. Morbi dapibus ligula vel tellus molestie venenatis. Phasellus a tincidunt libero.\n\n## Curabitur sit amet lorem quis diam euismod efficitur\n\nAenean **ultrices** convallis magna vel eleifend. Vestibulum sit amet gravida arcu. Praesent fermentum, sapien quis ultrices tincidunt, elit velit venenatis diam, quis malesuada risus enim vitae augue.:\n\n* **Ambatukam:** Yes yes thank you so much, thank you.\n* **Ambasing:** Amgananitubas (bas, tubas bass).\n* **ABC:** Wow gila keren banget gweh, anjayyyyyyyyyyyyyyyy.\n\n### Lorem ipsum dolor\n\nMauris malesuada felis enim, orbi venenatis sed tortor sed aliquam:\n\n```javascript\n// Ambasing script\nconst name = \"Fathan Kebab\";\nconsole.log(`Hello ${name}, welcome to the future.`);\n```\n\n> \Next.js framework jelek, berat banget anj, hoeeeekkkkkkkkkkkkkkkk.\" — *Modern Web Manifesto*\n\n### Media and Tables\n\nHIDUP JOKO-----:\n\n![A sample image](https://res.cloudinary.com/djow2j0qk/image/upload/w_640,f_webp,q_auto:low/v1749647239/baum_nareko_z4ocpr.jpg)\n\n| Feature | Support | Stability |\n| :--- | :---: | ---: |\n| SSR | Full | Production |\n| Static | Full | Rock Solid |\n| Middleware | Full | Beta |\n\n---\n" 
  };

  return new Response(JSON.stringify(sampleArticle));
};
