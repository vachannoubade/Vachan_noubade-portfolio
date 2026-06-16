import { AuroraBackground } from "@/components/ui/aurora-background";
import { SECTION_IDS, SECTION_LABELS, COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id={SECTION_IDS.CONTACT}>
      <AuroraBackground className="px-4 sm:px-6 md:px-12 py-20 sm:py-32 border-t border-border">
        <div
          className="max-w-3xl mx-auto text-center relative z-10"
          style={{ color: COLORS.TEXT }}
        >
          <div
            className="reveal text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-8"
            style={{ color: COLORS.TEXT, opacity: 0.5 }}
          >
            {SECTION_LABELS.CONTACT}
          </div>
          <h3
            className="reveal font-display text-2xl sm:text-4xl md:text-6xl tracking-[-0.02em] mb-8 sm:mb-12"
            style={{ color: COLORS.TEXT }}
          >
            {contact.heading}
            <em>{contact.headingItalic}</em>.
          </h3>
          <a
            href={`mailto:${contact.email}`}
            className="reveal link-underline font-display text-lg sm:text-2xl md:text-4xl inline-block break-all"
            style={{ color: COLORS.TEXT }}
          >
            {contact.email}
          </a>
          <div
            className="reveal mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm"
            style={{ color: COLORS.TEXT }}
          >
            {contact.socials.map((social, i) => (
              <span key={social.href} className="flex items-center gap-4 sm:gap-6 md:gap-10">
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
