import Hero from "@/components/Hero";
import Features from "@/components/Features";
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Hero />
      <Features />
      <StatsCounter />
      <Testimonials />
      <MapSection />
      <ContactFooter />
      <WhatsAppButton />
    </main>
  );
}
