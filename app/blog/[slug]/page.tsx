import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { posts, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Husn Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main id="main" className="bg-paper">
        <article className="mx-auto max-w-prose px-6 py-16 md:py-24">
          <Link href="/blog" className="text-sm font-semibold text-accent">
            &larr; Back to all posts
          </Link>

          <span className="eyebrow mt-6 w-fit">{post.tag}</span>
          <h1 className="text-display mt-4 text-3xl tracking-tightish text-ink md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-ink-muted">
            <span>{post.date}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <div className="divider my-8" />

          <div className="flex flex-col gap-5">
            {post.body.map((paragraph, i) =>
              paragraph.startsWith("### ") ? (
                <h2 key={i} className="text-display mt-4 text-xl text-ink">
                  {paragraph.replace("### ", "")}
                </h2>
              ) : (
                <p key={i} className="text-ink-muted">
                  {paragraph}
                </p>
              ),
            )}
          </div>

          <div className="card-dark mt-14 flex flex-col items-center gap-4 p-8 text-center">
            <p className="text-white/80">
              Curious what Husn actually looks like on your team?
            </p>
            
              href="/#demo"
              className="btn-primary rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Book a demo
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
