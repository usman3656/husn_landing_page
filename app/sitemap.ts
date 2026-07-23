import type { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/seo-pages";
import { getAllPosts } from "@/lib/blog";

// Static export friendly: this generates /sitemap.xml at build time.
export const dynamic = "force-static";

const BASE = "https://husn.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/solutions/", "/blog/", "/privacy/", "/terms/"];
  const solutionRoutes = getAllSeoSlugs().map(
    (slug) => `/solutions/${slug}/`,
  );
  const blogRoutes = getAllPosts().map((post) => `/blog/${post.slug}/`);

  return [...staticRoutes, ...solutionRoutes, ...blogRoutes].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority:
      path === "/" ? 1 : path === "/solutions/" || path === "/blog/" ? 0.8 : 0.7,
  }));
}
