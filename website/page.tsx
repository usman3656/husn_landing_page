import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { How } from "./components/how";
import { Clients } from "./components/clients";
import { Engagement } from "./components/engagement";
import { Faq } from "./components/faq";
import { Book } from "./components/book";
import { Footer } from "./components/footer";

/* The whole husn.io site is this one page. Sections are anchored so the
   header links scroll within the page; copy lives in ./content.ts and art in
   ./assets. The blog keeps its own routes under /blog but is not linked here. */
export function Website() {
  return (
    <div className="relative bg-greige font-sans text-ink antialiased">
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <How />
        <Clients />
        <Engagement />
        <Faq />
        <Book />
      </main>
      <Footer />
    </div>
  );
}
