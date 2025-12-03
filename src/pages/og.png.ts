import type { APIRoute } from "astro";

// Dynamic OG image generation is disabled in this deployment target
export const GET: APIRoute = async () => {
  return new Response(null, {
    status: 404,
    statusText: "OG image generation is disabled",
  });
};
