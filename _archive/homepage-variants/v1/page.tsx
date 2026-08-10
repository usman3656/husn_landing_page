import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { Bento } from "@/components/bento";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { Founder } from "@/components/founder";
import { Demo } from "@/components/demo";
import { Footer } from "@/components/footer";

export default function V1Page() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Integrations />
        <Bento />
        <Pricing />
        <Faq />
        <Founder />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
