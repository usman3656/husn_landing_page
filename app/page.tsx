import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { Problem } from "@/components/problem";
import { HowItWorks } from "@/components/how-it-works";
import { Audience } from "@/components/audience";
import { Faq } from "@/components/faq";
import { Demo } from "@/components/demo";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Integrations />
        <Problem />
        <HowItWorks />
        <Audience />
        <Faq />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
