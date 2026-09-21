import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { PinContainer } from "@/components/ui/3d-pin";
import { SECTION_IDS } from "@/constants";
import { portfolioData, heroImageSrc } from "@/data/portfolioData";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section
      id={SECTION_IDS.TOP}
      className="relative min-h-[100dvh] sm:min-h-screen flex flex-col overflow-hidden"
    >
      <AnimatedShaderBackground />

      <div className="relative flex-1 flex items-center px-4 pt-16 pb-6 sm:px-6 sm:pt-24 sm:pb-10 md:px-12 md:pt-28 md:pb-16 z-10">
        <div className="grain-bg absolute inset-0 -z-10" />
        <div className="noise-overlay -z-10" />
        <div className="w-full grid sm:grid-cols-12 gap-4 sm:gap-6 md:gap-12 items-center max-w-[1400px] mx-auto">
          <div className="sm:col-span-7 hero-float">
            <div className="hero-eyebrow inline-flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/60 mb-3 sm:mb-5 md:mb-8">
              <span className="w-5 sm:w-6 md:w-8 h-px bg-foreground/40" /> {hero.eyebrow}
            </div>
            <h1 className="hero-title font-display font-medium text-foreground leading-[0.88] sm:leading-[0.92] tracking-[-0.03em] text-[clamp(2rem,8vw,8rem)]">
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
              className="hero-sub mt-3 sm:mt-5 md:mt-8 max-w-md text-[12px] sm:text-sm md:text-lg text-foreground/70 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: hero.subtitle }}
            />
            <div className="mt-4 sm:mt-6 md:mt-10 flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
              {hero.pills.map((pill) => (
                <span key={pill} className="hero-pill pill text-[9px] sm:text-xs md:text-sm px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2">
                  {pill}
                </span>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 md:mt-16 flex items-center gap-6 sm:gap-8 md:gap-10 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/50">
              <div className="hero-meta">
                <div className="text-foreground/40">Based</div>
                <div className="mt-0.5 sm:mt-1 text-foreground">{hero.location}</div>
              </div>
            </div>
          </div>

          {/* Hero image with 3D Pin - visible on all screens */}
          <div className="sm:col-span-5">
            <PinContainer title="Portfolio · 2026" className="w-full max-w-[200px] sm:max-w-sm md:max-w-md mx-auto sm:ml-auto sm:mr-0">
              <div className="relative aspect-[4/5] w-full hero-float">
                <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-foreground/5 rounded-[1.5rem] sm:rounded-[2rem] blur-xl sm:blur-2xl" />
                <div className="absolute inset-0 rounded-[1.25rem] sm:rounded-[1.75rem] overflow-hidden bg-foreground/5 shadow-[var(--shadow-glow)]">
                  <img
                    src={heroImageSrc}
                    alt="Vachan Noubade portrait"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-[50%_20%]"
                  />
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 bg-foreground text-background rounded-full w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 flex items-center justify-center text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-widest font-medium">
                  Sea
                  <br />
                  Fronk
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 flex flex-col items-center gap-1.5 sm:gap-2">
          Scroll
          <span className="w-px h-5 sm:h-6 md:h-8 bg-foreground/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
