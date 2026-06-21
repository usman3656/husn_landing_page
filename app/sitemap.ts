import type { MetadataRoute } from "next";
import { getAllSeoSlugs } from "@/lib/seo-pages";

// Static export friendly: this generates /sitemap.xml at build time.
export const dynamic = "force-static";

const BASE = "https://husn.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/solutions/", "/privacy/", "/terms/"];
  const solutionRoutes = getAllSeoSlugs().map(
    (slug) => `/solutions/${slug}/`,
  );

  return [...staticRoutes, ...solutionRoutes].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path === "/solutions/" ? 0.8 : 0.7,
  }));
}
