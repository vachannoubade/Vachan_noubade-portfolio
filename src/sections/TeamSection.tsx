import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";
import { User } from "lucide-react";

export function TeamSection() {
  const { team } = portfolioData;

  return (
    <section
      id={SECTION_IDS.TEAM}
      className="team-section min-h-auto sm:min-h-[80vh] flex items-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="reveal flex items-end justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-16">
          <div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 mb-2 sm:mb-3 md:mb-4">
              {SECTION_LABELS.TEAM}
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-7xl tracking-[-0.02em]">
              {team.heading}
            </h2>
          </div>
        </div>

        <div className="overflow-hidden sm:overflow-visible w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max animate-[auto-scroll_12s_linear_infinite] sm:animate-none sm:w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 pb-8 sm:pb-0 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...team.members, ...team.members].map((member, index) => (
              <div 
                key={`${member.id}-${index}`} 
                className={`${index < team.members.length ? 'reveal ' : ''}flex-none w-[75vw] max-w-[300px] sm:max-w-none sm:w-auto flex flex-col items-center text-center group ${index >= team.members.length ? 'sm:hidden' : ''}`}
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 bg-foreground/5 flex items-center justify-center border border-border shadow-xl transition-transform duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl">
                  {member.photoSrc ? (
                    <img
                      src={member.photoSrc}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-foreground/30">
                      <User size={48} strokeWidth={1.5} className="mb-2" />
                      <span className="text-xs tracking-widest uppercase">TBD</span>
                    </div>
                  )}
                </div>
                <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-1">
                  {member.name}
                </h3>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-foreground/60 mb-4">
                  {member.role}
                </div>
                <p className="text-sm sm:text-base text-foreground/70 max-w-[280px] leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
