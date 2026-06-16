import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 border-t border-border flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/50">
      <div>{footer.copyright}</div>
      <div>{footer.craftedBy}</div>
    </footer>
  );
}
