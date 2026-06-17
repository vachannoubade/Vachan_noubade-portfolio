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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6 flex items-center justify-between"
        style={{ color: COLORS.TEXT }}
      >
        <a href="#top" className="font-display text-lg sm:text-xl tracking-tight">
          Sea&nbsp;Fronk<span style={{ opacity: 0.4 }}>.</span>
        </a>

        {/* Desktop nav - shown on desktop only (768px+) */}
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
          <GlassEffect href="#contact" target="_self" rel="" className="rounded-full px-4 py-2">
            <span className="text-sm" style={{ color: COLORS.TEXT }}>Let's talk</span>
          </GlassEffect>
        </div>

        {/* Mobile hamburger - visible below md (768px) */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ zIndex: 110 }}
        >
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ease-in-out ${
              mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
            }`}
            style={{ backgroundColor: COLORS.TEXT }}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ease-in-out ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
            style={{ backgroundColor: COLORS.TEXT }}
          />
          <span
            className={`absolute block w-5 h-[1.5px] transition-all duration-300 ease-in-out ${
              mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
            }`}
            style={{ backgroundColor: COLORS.TEXT }}
          />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          zIndex: 99,
          backgroundColor: "rgba(2, 2, 2, 0.98)",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMobileOpen(false);
        }}
      >
        <nav className="flex flex-col items-center gap-5">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="font-display tracking-tight transition-all duration-300"
              style={{
                fontSize: "1.5rem",
                color: COLORS.TEXT,
                opacity: mobileOpen ? 1 : 0,
                fontWeight: activeSection === item.id ? 600 : 400,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transitionDelay: mobileOpen ? `${80 + i * 40}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}
          <div
            className="mt-4"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              transition: "all 0.3s ease",
              transitionDelay: mobileOpen ? `${80 + nav.length * 40}ms` : "0ms",
            }}
          >
            <GlassEffect href="#contact" target="_self" rel="" className="rounded-full px-6 py-3">
              <span className="text-base" style={{ color: COLORS.TEXT }} onClick={() => setMobileOpen(false)}>
                Let's talk
              </span>
            </GlassEffect>
          </div>
        </nav>
      </div>
    </>
  );
}
