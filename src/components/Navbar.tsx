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
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between"
      style={{ color: COLORS.TEXT }}
    >
      <a href="#top" className="font-display text-lg sm:text-xl tracking-tight">
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
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
            mobileOpen ? "rotate-45 translate-y-2" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
            mobileOpen ? "opacity-0" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
        <span
          className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
            mobileOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
          style={{ backgroundColor: COLORS.TEXT }}
        />
      </button>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(2, 2, 2, 0.95)", backdropFilter: "blur(20px)" }}
      >
        {nav.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-display tracking-tight transition-all duration-300"
            style={{
              color: COLORS.TEXT,
              opacity: activeSection === item.id ? 1 : 0.45,
              fontWeight: activeSection === item.id ? 600 : 400,
            }}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-4">
          <GlassEffect href="#contact" className="rounded-full px-6 py-3">
            <span className="text-base" style={{ color: COLORS.TEXT }} onClick={() => setMobileOpen(false)}>
              Let's talk
            </span>
          </GlassEffect>
        </div>
      </div>
    </header>
  );
}
