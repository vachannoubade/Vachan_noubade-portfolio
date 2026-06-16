import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function GallerySection() {
  const { gallery } = portfolioData;

  return (
    <section
      id={SECTION_IDS.GALLERY}
      className="gallery-section min-h-auto sm:min-h-screen px-4 py-10 sm:px-6 sm:py-20 md:px-12 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal flex items-end justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10 md:mb-16">
          <div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 mb-2 sm:mb-3 md:mb-4">
              {SECTION_LABELS.STUDIO_FEED}
            </div>
            <h2 className="font-display text-xl sm:text-3xl md:text-5xl lg:text-7xl tracking-[-0.02em]">
              {gallery.heading}
            </h2>
          </div>
          <div className="flex flex-row sm:flex-row items-center gap-3 sm:gap-4 md:gap-6">
            <a
              href={gallery.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[11px] sm:text-xs md:text-sm"
            >
              Instagram →
            </a>
            <a
              href={gallery.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-[11px] sm:text-xs md:text-sm"
            >
              YT →
            </a>
          </div>
        </div>

        <CircularTestimonials
          testimonials={gallery.testimonials.map((t) => ({ ...t }))}
          autoplay
        />
      </div>
    </section>
  );
}
