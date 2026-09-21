import { useState } from "react";
import { GlassEffect } from "@/components/liquid-glass";
import { portfolioData } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";

export function CTASection() {
  const { cta } = portfolioData;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="cta-section relative min-h-[30vh] sm:min-h-[50vh] md:min-h-[80vh] flex items-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-32 overflow-hidden">
      <div className="absolute inset-0 shimmer-gradient -z-10" />
      <div className="noise-overlay -z-10" />
      <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-[#B2D5E5] rounded-full blur-[80px] sm:blur-[120px] md:blur-[180px] opacity-15 pulse-glow" />
      <div
        className="absolute bottom-1/3 right-1/4 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-[#B2D5E5] rounded-full blur-[60px] sm:blur-[100px] md:blur-[150px] opacity-10 pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div className="max-w-6xl mx-auto text-center relative z-20">
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

        <div 
          className="inline-block relative mt-4 sm:mt-6 md:mt-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <GlassEffect href="#contact" target="_self" rel="" className="rounded-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
            <span className="text-[11px] sm:text-xs md:text-sm">Start a project →</span>
          </GlassEffect>

          <AnimatePresence>
            {isHovering && cta.hoverImage && (
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 sm:mb-8 pointer-events-none flex flex-col items-center"
              >
                <div className="w-56 sm:w-72 md:w-96 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-md relative">
                  <img src={cta.hoverImage} alt="Client Partnership" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl sm:rounded-2xl" />
                </div>
                {cta.hoverCaption && (
                  <div className="mt-3 px-4 py-1.5 rounded-full bg-foreground text-background text-[10px] sm:text-xs font-medium shadow-xl whitespace-nowrap">
                    {cta.hoverCaption}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
