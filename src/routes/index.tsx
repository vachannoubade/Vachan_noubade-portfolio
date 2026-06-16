import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { GallerySection } from "@/sections/GallerySection";
import { ContactSection } from "@/sections/ContactSection";
import { CTASection } from "@/sections/CTASection";
import { Footer } from "@/sections/Footer";
import { useActiveSection, useScrollAnimation } from "@/hooks/useScrollAnimations";
import { portfolioData } from "@/data/portfolioData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: portfolioData.meta.title },
      { name: "description", content: portfolioData.meta.description },
      { property: "og:title", content: portfolioData.meta.ogTitle },
      { property: "og:description", content: portfolioData.meta.ogDescription },
    ],
  }),
  component: Index,
});

function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection();

  useScrollAnimation(containerRef);

  return (
    <div
      ref={containerRef}
      className="relative overflow-x-hidden"
      style={{ willChange: "transform" }}
    >
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
