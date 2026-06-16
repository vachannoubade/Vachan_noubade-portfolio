import { AuroraBackground } from "@/components/ui/aurora-background";
import { SECTION_IDS, SECTION_LABELS, COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id={SECTION_IDS.CONTACT}>
      <AuroraBackground className="px-6 md:px-12 py-32 border-t border-border">
        <div
          className="max-w-3xl mx-auto text-center relative z-10"
          style={{ color: COLORS.TEXT }}
        >
          <div
            className="reveal text-xs uppercase tracking-[0.3em] mb-8"
            style={{ color: COLORS.TEXT, opacity: 0.5 }}
          >
            {SECTION_LABELS.CONTACT}
          </div>
          <h3
            className="reveal font-display text-4xl md:text-6xl tracking-[-0.02em] mb-12"
            style={{ color: COLORS.TEXT }}
          >
            {contact.heading}
            <em>{contact.headingItalic}</em>.
          </h3>
          <a
            href={`mailto:${contact.email}`}
            className="reveal link-underline font-display text-2xl md:text-4xl inline-block"
            style={{ color: COLORS.TEXT }}
          >
            {contact.email}
          </a>
          <div
            className="reveal mt-14 flex items-center justify-center gap-6 md:gap-10 text-sm"
            style={{ color: COLORS.TEXT }}
          >
            {contact.socials.map((social, i) => (
              <span key={social.href} className="flex items-center gap-6 md:gap-10">
                {i > 0 && (
                  <span style={{ color: COLORS.TEXT_DIM_30 }}>·</span>
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
