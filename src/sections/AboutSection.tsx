import { PixelPerfectAbout } from "@/components/ui/pixel-perfect-about";
import { SECTION_IDS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="about-section relative overflow-hidden"
    >
      <PixelPerfectAbout
        word1={about.word1}
        word2={about.word2}
        description={about.description}
      />
    </section>
  );
}
