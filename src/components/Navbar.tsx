import { useState, useEffect } from "react";
import { GlassEffect } from "@/components/liquid-glass";
import { COLORS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { nav } = portfolioData;
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-3 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6 flex items-center justify-between"
      style={{ color: COLORS.TEXT }}
    >
      <a href="#top" className="font-display text-base sm:text-xl tracking-tight">
        Sea&nbsp;Fronk
        <span style={{ color: COLORS.TEXT, opacity: 0.4 }}>.</span>
      </a>

      {/* Desktop nav */}
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

      <div className="hidden md:block">
        <GlassEffect href="#contact" className="rounded-full px-4 py-2">
          <span className="text-sm" style={{ color: COLORS.TEXT }}>
            Let's talk
          </span>
        </GlassEffect>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 gap-1 z-[60]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-[1.5px] sm:w-6 sm:h-0.5 transition-all duration-300 ease-in-out origin-center ${
            mobileOpen ? "rotate-45 translate-y-[5px] sm:translate-y-2" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
        <span
          className={`block w-5 h-[1.5px] sm:w-6 sm:h-0.5 transition-all duration-300 ease-in-out ${
            mobileOpen ? "opacity-0 scale-x-0" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
        <span
          className={`block w-5 h-[1.5px] sm:w-6 sm:h-0.5 transition-all duration-300 ease-in-out origin-center ${
            mobileOpen ? "-rotate-45 -translate-y-[5px] sm:-translate-y-2" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 sm:gap-8 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(2, 2, 2, 0.97)", backdropFilter: "blur(24px)" }}
      >
        {nav.map((item, i) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMobileOpen(false)}
            className="text-xl sm:text-2xl font-display tracking-tight transition-all duration-300"
            style={{
              color: COLORS.TEXT,
              opacity: activeSection === item.id ? 1 : 0.45,
              fontWeight: activeSection === item.id ? 600 : 400,
              transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-2 sm:mt-4" style={{ transitionDelay: mobileOpen ? `${nav.length * 50}ms` : "0ms" }}>
          <GlassEffect href="#contact" className="rounded-full px-5 py-2.5 sm:px-6 sm:py-3">
            <span className="text-sm sm:text-base" style={{ color: COLORS.TEXT }} onClick={() => setMobileOpen(false)}>
              Let's talk
            </span>
          </GlassEffect>
        </div>
      </div>
    </header>
  );
}
