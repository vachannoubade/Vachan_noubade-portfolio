import React from "react";

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const GlassEffect: React.FC<GlassButtonProps> = ({
  children,
  className = "",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-full transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] cursor-pointer ${className}`;

  const glassOverlay = (
    <>
      <div className="absolute inset-0 z-0 rounded-inherit bg-white/[0.08] backdrop-blur-md" />
      <div className="absolute inset-0 z-10 rounded-inherit shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.15),inset_-1px_-1px_1px_0_rgba(255,255,255,0.1)]" />
      <div className="relative z-20">{children}</div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} hover:scale-105 active:scale-95`}
      >
        {glassOverlay}
      </a>
    );
  }

  return (
    <button
      className={`${baseClasses} hover:scale-105 active:scale-95`}
    >
      {glassOverlay}
    </button>
  );
};

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  className = "",
  href,
  target = "_blank",
  rel = "noopener noreferrer",
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 relative overflow-hidden rounded-3xl px-10 py-6 transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] cursor-pointer hover:px-11 hover:py-7 hover:rounded-[2rem] ${className}`;

  const glassOverlay = (
    <>
      <div className="absolute inset-0 z-0 rounded-inherit bg-white/[0.08] backdrop-blur-md" />
      <div className="absolute inset-0 z-10 rounded-inherit shadow-[inset_2px_2px_1px_0_rgba(255,255,255,0.15),inset_-1px_-1px_1px_0_rgba(255,255,255,0.1)]" />
      <div className="relative z-20 transition-all duration-700 hover:scale-95" style={{ transitionTimingFunction: "cubic-bezier(0.175,0.885,0.32,2.2)" }}>
        {children}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={baseClasses}
        style={{ boxShadow: "0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)" }}
      >
        {glassOverlay}
      </a>
    );
  }

  return (
    <button
      className={baseClasses}
      style={{ boxShadow: "0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)" }}
    >
      {glassOverlay}
    </button>
  );
};

export { GlassEffect, GlassButton };
