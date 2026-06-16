import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { PinContainer } from "@/components/ui/3d-pin";
import { SECTION_IDS } from "@/constants";
import { portfolioData, heroImageSrc } from "@/data/portfolioData";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section
      id={SECTION_IDS.TOP}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <AnimatedShaderBackground />

      <div className="relative flex-1 flex items-center px-4 sm:px-6 md:px-12 pt-24 sm:pt-28 pb-16 z-10">
        <div className="grain-bg absolute inset-0 -z-10" />
        <div className="noise-overlay -z-10" />
        <div className="w-full grid md:grid-cols-12 gap-8 sm:gap-12 items-center max-w-[1400px] mx-auto">
          <div className="md:col-span-7 hero-float">
            <div className="hero-eyebrow inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/60 mb-6 sm:mb-8">
              <span className="w-6 sm:w-8 h-px bg-foreground/40" /> {hero.eyebrow}
            </div>
            <h1 className="hero-title font-display font-medium text-foreground leading-[0.92] tracking-[-0.03em] text-[clamp(2.5rem,9vw,8rem)]">
              <span className="block overflow-hidden">
                <span className="word inline-block">{hero.name}</span>
              </span>
              <span className="block overflow-hidden">
                <span className="word inline-block italic text-foreground/80">
                  {hero.nameItalic}
                </span>
              </span>
            </h1>
            <p
              className="hero-sub mt-6 sm:mt-8 max-w-md text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: hero.subtitle }}
            />
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
              {hero.pills.map((pill) => (
                <span key={pill} className="hero-pill pill text-xs sm:text-sm">
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-12 sm:mt-16 flex items-center gap-8 sm:gap-10 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/50">
              <div className="hero-meta">
                <div className="text-foreground/40">Based</div>
                <div className="mt-1 text-foreground">{hero.location}</div>
              </div>
            </div>
          </div>

          {/* Hero image with 3D Pin */}
          <div className="md:col-span-5">
            <PinContainer title="Portfolio · 2026" className="w-full max-w-xs sm:max-w-sm md:max-w-md ml-auto">
              <div className="relative aspect-[4/5] w-full hero-float">
                <div className="absolute -inset-4 sm:-inset-6 bg-foreground/5 rounded-[2rem] blur-2xl" />
                <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-foreground/5 shadow-[var(--shadow-glow)]">
                  <img
                    src={heroImageSrc}
                    alt="Vachan Noubade portrait"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-foreground text-background rounded-full w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center text-[8px] sm:text-[10px] uppercase tracking-widest font-medium">
                  Sea
                  <br />
                  Fronk
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-foreground/50 flex flex-col items-center gap-2">
          Scroll
          <span className="w-px h-6 sm:h-8 bg-foreground/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
