import { AuroraBackground } from "@/components/ui/aurora-background";
import { SECTION_IDS, SECTION_LABELS, COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id={SECTION_IDS.CONTACT}>
      <AuroraBackground className="px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-32 border-t border-border">
        <div
          className="max-w-3xl mx-auto text-center relative z-10"
          style={{ color: COLORS.TEXT }}
        >
          <div
            className="reveal text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] mb-5 sm:mb-6 md:mb-8"
            style={{ color: COLORS.TEXT, opacity: 0.5 }}
          >
            {SECTION_LABELS.CONTACT}
          </div>
          <h3
            className="reveal font-display text-xl sm:text-2xl md:text-4xl lg:text-6xl tracking-[-0.02em] mb-6 sm:mb-8 md:mb-12"
            style={{ color: COLORS.TEXT }}
          >
            {contact.heading}
            <em>{contact.headingItalic}</em>.
          </h3>
          <a
            href={`mailto:${contact.email}`}
            className="reveal link-underline font-display text-sm sm:text-lg md:text-2xl lg:text-4xl inline-block break-all"
            style={{ color: COLORS.TEXT }}
          >
            {contact.email}
          </a>
          <div
            className="reveal mt-8 sm:mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-10 text-[11px] sm:text-xs md:text-sm"
            style={{ color: COLORS.TEXT }}
          >
            {contact.socials.map((social, i) => (
              <span key={social.href} className="flex items-center gap-3 sm:gap-4 md:gap-10">
                {i > 0 && (
                  <span className="hidden sm:inline" style={{ color: COLORS.TEXT_DIM_30 }}>·</span>
                )}
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                  style={{ color: COLORS.TEXT }}
                >
                  {social.label}
                </a>
              </span>
            ))}
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
