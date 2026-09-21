import { useState, useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleAutoScroll = () => {
      if (window.innerWidth >= 640 || !scrollRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // If we've reached the end, scroll back to the start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll by one card width (85vw)
        scrollRef.current.scrollBy({ left: clientWidth * 0.85, behavior: 'smooth' });
      }
    };

    const interval = setInterval(handleAutoScroll, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id={SECTION_IDS.WORK}
      className="projects-section min-h-auto sm:min-h-screen flex items-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-32 relative"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="reveal flex items-end justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-16">
          <div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 mb-2 sm:mb-3 md:mb-4">
              {SECTION_LABELS.WORK}
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-7xl tracking-[-0.02em]">
              {projects.heading}
            </h2>
          </div>
        </div>

        <div className="overflow-hidden sm:overflow-visible w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar sm:overflow-visible sm:grid sm:grid-cols-2 gap-3 sm:gap-5 md:gap-8 pb-8 sm:pb-0"
          >
            {projects.items.map((project) => (
              project.type === "link" ? (
                <div key={project.id} className={`flex flex-col justify-between p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-foreground/5 gap-6 w-[85vw] max-w-[320px] snap-center sm:max-w-none sm:w-auto flex-none ${project.className ?? ""}`}>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/50 mb-3">
                      {project.category} · {project.year}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-foreground/70 leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide"
                    >
                      VISIT SITE
                      <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-foreground text-background flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              ) : (
              <div key={project.id} className={`project-card w-[85vw] max-w-[320px] snap-center sm:max-w-none sm:w-auto flex-none ${project.className ?? ""}`}>
                <CardContainer className="inter-var w-full">
                  <CardBody className="relative group/card bg-foreground/5 rounded-xl sm:rounded-2xl p-0 border-transparent w-full h-auto">
                    <CardItem translateZ="100" className="w-full">
                      <div 
                        className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-foreground/10 group cursor-pointer"
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}
                      >
                        {/* Always show thumbnail by default */}
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.hoverImage ? 'hidden sm:block' : ''}`}
                        />
                        
                        {/* On mobile, always show hoverImage instead if it exists, since there's no hover */}
                        {project.hoverImage && (
                          <img
                            src={project.hoverImage}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-700 sm:hidden block"
                          />
                        )}

                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Hover Popup for Desktop */}
                        {project.hoverImage && (
                          <div 
                            className={`absolute hidden sm:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] aspect-[16/9] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 pointer-events-none z-50 ${
                              hoveredProjectId === project.id 
                                ? 'opacity-100 scale-100 rotate-2' 
                                : 'opacity-0 scale-95 rotate-0'
                            }`}
                          >
                            <img
                              src={project.hoverImage}
                              alt={`${project.title} preview`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 border border-white/20 rounded-lg pointer-events-none" />
                          </div>
                        )}

                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                          <span className="bg-background/90 text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm border border-border/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            {project.actionLabel || 'View Project'}
                          </span>
                        </div>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
