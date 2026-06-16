import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="px-4 py-5 sm:px-6 sm:py-6 md:px-12 md:py-10 border-t border-border flex flex-col sm:flex-row flex-wrap items-center justify-between gap-2 sm:gap-3 md:gap-4 text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/50">
      <div>{footer.copyright}</div>
      <div>{footer.craftedBy}</div>
    </footer>
  );
}
