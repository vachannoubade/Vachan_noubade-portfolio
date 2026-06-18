import { GlassEffect } from "@/components/liquid-glass";
import { COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";
import { Home, User, Briefcase, Image, Mail } from "lucide-react";

const navIcons: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  top: Home,
  about: User,
  work: Briefcase,
  gallery: Image,
  contact: Mail,
};

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { nav } = portfolioData;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6 flex items-center justify-between"
      style={{ color: COLORS.TEXT }}
    >
      <a href="#top" className="font-display text-lg sm:text-xl tracking-tight">
        Sea&nbsp;Fronk<span style={{ opacity: 0.4 }}>.</span>
      </a>

      {/* Mobile/Tablet nav - icons only below lg */}
      <nav className="flex lg:hidden items-center gap-6">
        {nav.map((item) => {
          const Icon = navIcons[item.id];
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition-all duration-300"
              style={{
                color: COLORS.TEXT,
                opacity: activeSection === item.id ? 1 : 0.45,
              }}
            >
              {Icon && <Icon size={20} strokeWidth={activeSection === item.id ? 2.5 : 1.5} />}
            </a>
          );
        })}
      </nav>

      {/* Desktop nav - text labels shown on lg+ */}
      <nav className="hidden lg:flex items-center gap-8 text-sm">
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

      <div className="hidden lg:block">
        <GlassEffect href="#contact" target="_self" rel="" className="rounded-full px-4 py-2">
          <span className="text-sm" style={{ color: COLORS.TEXT }}>Let's talk</span>
        </GlassEffect>
      </div>
    </header>
  );
}
