import { GlassEffect } from "@/components/liquid-glass";
import { portfolioData } from "@/data/portfolioData";

export function CTASection() {
  const { cta } = portfolioData;

  return (
    <section className="cta-section relative min-h-[80vh] flex items-center px-6 md:px-12 py-32 overflow-hidden">
      <div className="absolute inset-0 shimmer-gradient -z-10" />
      <div className="noise-overlay -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#B2D5E5] rounded-full blur-[180px] opacity-15 pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#B2D5E5] rounded-full blur-[150px] opacity-10 pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display tracking-[-0.03em] leading-[0.95] text-[clamp(2.5rem,8vw,7rem)]">
          {cta.words.map((word, i) => (
            <span key={i}>
              {i > 0 && " "}
              <span className={`cta-word inline-block${word.italic ? " italic" : ""}`}>
                {word.text}
              </span>
            </span>
          ))}
        </h2>
        <GlassEffect href="#contact" className="rounded-full px-6 py-3 mt-6">
          <span className="text-sm">Start a project →</span>
        </GlassEffect>
      </div>
    </section>
  );
}
