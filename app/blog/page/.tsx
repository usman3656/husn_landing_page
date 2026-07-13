import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Husn",
  description: "Notes on drift, alignment, and building without the noise.",
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main id="main" className="bg-paper">
        <section className="mx-auto max-w-page px-6 py-16 md:py-24">
          <span className="eyebrow w-fit">Blog</span>
          <h1 className="text-display mt-4 text-4xl tracking-tightish text-ink md:text-5xl">
            The Husn Blog
          </h1>
          <p className="mt-4 max-w-prose text-ink-muted">
            Notes on drift, alignment, and building without the noise. Written
            by the people building it.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card flex flex-col gap-3 p-6"
              >
                <span className="eyebrow w-fit">{post.tag}</span>
                <h2 className="text-display text-xl text-ink">{post.title}</h2>
                <p className="text-sm text-ink-muted">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-2 text-xs text-ink-muted">
                  <span>{post.date}</span>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readTime}</span>
                  <span className="ml-auto text-sm font-semibold text-accent">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
