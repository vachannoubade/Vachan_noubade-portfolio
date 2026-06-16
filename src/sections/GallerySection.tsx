import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function GallerySection() {
  const { gallery } = portfolioData;

  return (
    <section
      id={SECTION_IDS.GALLERY}
      className="gallery-section min-h-screen px-4 sm:px-6 md:px-12 py-20 sm:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="reveal flex items-end justify-between flex-wrap gap-4 mb-10 sm:mb-16">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-foreground/50 mb-3 sm:mb-4">
              {SECTION_LABELS.STUDIO_FEED}
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-7xl tracking-[-0.02em]">
              {gallery.heading}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
            <a
              href={gallery.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-xs sm:text-sm"
            >
              Follow on Instagram →
            </a>
            <a
              href={gallery.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-xs sm:text-sm"
            >
              Subscribe on YT →
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
