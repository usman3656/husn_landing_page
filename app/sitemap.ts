import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

// Static export friendly: this generates /sitemap.xml at build time.
export const dynamic = "force-static";

const BASE = "https://husn.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/blog/", "/privacy/", "/terms/"];
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}/`);

  return [...staticRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path === "/blog/" ? 0.8 : 0.7,
  }));
}
