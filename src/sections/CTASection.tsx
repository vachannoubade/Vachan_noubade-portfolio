import { GlassEffect } from "@/components/liquid-glass";
import { portfolioData } from "@/data/portfolioData";

export function CTASection() {
  const { cta } = portfolioData;

  return (
    <section className="cta-section relative min-h-[30vh] sm:min-h-[50vh] md:min-h-[80vh] flex items-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-32 overflow-hidden">
      <div className="absolute inset-0 shimmer-gradient -z-10" />
      <div className="noise-overlay -z-10" />
      <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#B2D5E5] rounded-full blur-[80px] sm:blur-[120px] md:blur-[180px] opacity-15 pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-[#B2D5E5] rounded-full blur-[60px] sm:blur-[100px] md:blur-[150px] opacity-10 pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-display tracking-[-0.03em] leading-[0.92] sm:leading-[0.95] text-[clamp(1.5rem,8vw,7rem)]">
          {cta.words.map((word, i) => (
            <span key={i}>
              {i > 0 && " "}
              <span className={`cta-word inline-block${word.italic ? " italic" : ""}`}>
                {word.text}
              </span>
            </span>
          ))}
        </h2>
        <GlassEffect href="#contact" className="rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 mt-3 sm:mt-4 md:mt-6">
          <span className="text-[11px] sm:text-xs md:text-sm">Start a project →</span>
        </GlassEffect>
      </div>
    </section>
  );
}
