import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";
import { AnimatePresence, motion } from "framer-motion";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  return (
    <section
      id={SECTION_IDS.WORK}
      className="projects-section min-h-auto sm:min-h-screen flex items-center px-4 py-10 sm:px-6 sm:py-16 md:px-12 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="reveal flex items-end justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-16">
          <div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 mb-2 sm:mb-3 md:mb-4">
              {SECTION_LABELS.SELECTED_WORK}
            </div>
            <h2 className="font-display text-xl sm:text-2xl md:text-5xl lg:text-7xl tracking-[-0.02em]">
              {projects.heading}
            </h2>
          </div>
        </div>

        <div className="overflow-hidden sm:overflow-visible w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max animate-[auto-scroll_15s_linear_infinite] sm:animate-none sm:w-full sm:grid sm:grid-cols-2 gap-3 sm:gap-5 md:gap-8 pb-8 sm:pb-0 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
            {[...projects.items, ...projects.items].map((project, index) => (
              project.type === "link" ? (
                <div key={`${project.id}-${index}`} className={`flex flex-col justify-between p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-foreground/5 gap-6 w-[80vw] max-w-[350px] sm:w-auto flex-none ${project.className ?? ""} ${index >= projects.items.length ? 'sm:hidden' : ''}`}>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-foreground/50 mb-3">
                      {project.category} · {project.year}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl tracking-tight mb-4">{project.title}</h3>
                    
                    {project.hoverImage && (
                      <div className="sm:hidden w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10 mb-4 bg-background/50 backdrop-blur-sm">
                        <img src={project.hoverImage} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className="relative inline-block w-fit z-10 mt-auto"
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-background text-sm font-medium hover:scale-105 transition-transform"
                    >
                      Visit Website
                    </a>
                    <AnimatePresence>
                      {hoveredProjectId === project.id && project.hoverImage && (
                        <motion.div
                          initial={{ opacity: 0, y: 30, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="hidden sm:flex absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none flex-col items-center z-50"
                        >
                          <div className="w-48 sm:w-64 md:w-80 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-md relative">
                            <img src={project.hoverImage} alt="Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-xl sm:rounded-2xl" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
              <div key={`${project.id}-${index}`} className={`${index < projects.items.length ? 'project-card ' : ''}w-[80vw] max-w-[350px] sm:w-auto flex-none ${project.className ?? ""} ${index >= projects.items.length ? 'sm:hidden' : ''}`}>
                <CardContainer className="inter-var w-full">
                  <CardBody className="relative group/card bg-foreground/5 rounded-xl sm:rounded-2xl p-0 border-transparent w-full h-auto">
                    <CardItem translateZ="100" className="w-full">
                      <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden">
                        {project.type === "video" ? (
                          <video
                            src={project.mediaSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.04]"
                          />
                        ) : (
                          <img
                            src={project.mediaSrc}
                            alt={project.alt}
                            loading="lazy"
                            width={1280}
                            height={896}
                            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover/card:scale-[1.04]"
                          />
                        )}
                      </div>
                    </CardItem>
                    <div className="mt-2 sm:mt-3 md:mt-4 flex items-start justify-between gap-2 sm:gap-3 md:gap-4 px-1">
                      <CardItem translateZ="50">
                        <div className="text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/50 mb-0.5 sm:mb-1">
                          {project.category}
                        </div>
                        <h3 className="font-display text-sm sm:text-base md:text-lg lg:text-xl tracking-tight">
                          {project.title}
                          {project.subtitle && (
                            <span className="block italic text-foreground/70 text-xs sm:text-sm md:text-base">
                              {project.subtitle}
                            </span>
                          )}
                        </h3>
                      </CardItem>
                      <CardItem
                        translateZ="40"
                        as="span"
                        className="text-[7px] sm:text-[8px] md:text-[10px] text-foreground/50 shrink-0 pt-0.5 sm:pt-1"
                      >
                        {project.year}
                      </CardItem>
                    </div>
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
