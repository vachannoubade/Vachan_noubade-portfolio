import { GlassEffect } from "@/components/liquid-glass";
import { COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { nav } = portfolioData;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between"
      style={{ color: COLORS.TEXT }}
    >
      <a href="#top" className="font-display text-xl tracking-tight">
        Sea&nbsp;Fronk
        <span style={{ color: COLORS.TEXT, opacity: 0.4 }}>.</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm">
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="link-underline transition-all duration-300"
            style={{
              color: COLORS.TEXT,
              opacity: activeSection === item.id ? 1 : 0.45,
              fontWeight: activeSection === item.id ? 600 : 400,
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <GlassEffect href="#contact" className="rounded-full px-4 py-2">
        <span className="text-sm" style={{ color: COLORS.TEXT }}>
          Let's talk
        </span>
      </GlassEffect>
    </header>
  );
}
