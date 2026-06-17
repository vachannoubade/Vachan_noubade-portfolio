import { useState, useEffect, useCallback } from "react";
import { SECTION_IDS_ARRAY } from "@/constants";

export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS_ARRAY.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return activeSection;
}

export function useScrollAnimation(containerRef: React.RefObject<HTMLDivElement | null>) {
  const initAnimations = useCallback(async () => {
    if (!containerRef.current) return;

    // Skip all GSAP animations on mobile/tablet — they cause scroll jank
    const w = window.innerWidth;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (w < 1024 || prefersReduced) return;

    const gsapMod = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    const gsap = gsapMod.gsap;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 1 })
        .from(
          ".hero-title .word",
          { y: 80, opacity: 0, duration: 1.2, stagger: 0.08 },
          "-=0.7"
        )
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.9 }, "-=0.8")
        .from(
          ".hero-pill",
          { y: 16, opacity: 0, duration: 0.7, stagger: 0.08 },
          "-=0.6"
        )
        .from(
          ".hero-image",
          { x: 80, opacity: 0, duration: 1.4, ease: "expo.out" },
          "-=1.2"
        )
        .from(
          ".hero-meta",
          { opacity: 0, y: 10, duration: 0.6, stagger: 0.06 },
          "-=0.6"
        );

      // About reveal — line by line
      gsap.from(".about-line", {
        scrollTrigger: { trigger: ".about-section", start: "top 70%" },
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "expo.out",
      });

      // Section labels
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        });
      });

      // Project cards
      gsap.from(".project-card", {
        scrollTrigger: { trigger: ".projects-section", start: "top 65%" },
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.15,
        ease: "expo.out",
      });

      // CTA
      gsap.from(".cta-word", {
        scrollTrigger: { trigger: ".cta-section", start: "top 70%" },
        scale: 0.92,
        opacity: 0,
        duration: 1.4,
        stagger: 0.06,
        ease: "expo.out",
      });
    }, containerRef);

    return ctx;
  }, [containerRef]);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    (async () => {
      ctx = await initAnimations();
    })();

    return () => {
      ctx?.revert();
    };
  }, [initAnimations]);
}
