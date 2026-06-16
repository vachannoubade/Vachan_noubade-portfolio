import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="px-6 md:px-12 py-10 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-foreground/50">
      <div>{footer.copyright}</div>
      <div>{footer.craftedBy}</div>
    </footer>
  );
}
