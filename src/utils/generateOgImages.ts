import type { CollectionEntry } from "astro:content";

// Stub implementations kept only to satisfy imports if any remain.
// These should not be called in the Cloudflare deployment.
export async function generateOgImageForPost(_post: CollectionEntry<"blog">) {
  throw new Error("Dynamic OG image generation is disabled in this deployment.");
}

export async function generateOgImageForSite() {
  throw new Error("Dynamic OG image generation is disabled in this deployment.");
}
