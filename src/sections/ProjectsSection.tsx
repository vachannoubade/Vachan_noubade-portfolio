import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { SECTION_IDS, SECTION_LABELS } from "@/constants";
import { portfolioData } from "@/data/portfolioData";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id={SECTION_IDS.WORK}
      className="projects-section min-h-auto sm:min-h-screen flex items-center px-4 py-12 sm:px-6 sm:py-20 md:px-12 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="reveal flex items-end justify-between flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-10 md:mb-16">
          <div>
            <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-foreground/50 mb-2 sm:mb-3 md:mb-4">
              {SECTION_LABELS.SELECTED_WORK}
            </div>
            <h2 className="font-display text-xl sm:text-3xl md:text-5xl lg:text-7xl tracking-[-0.02em]">
              {projects.heading}
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
          {projects.items.map((project) => (
            <div key={project.id} className={`project-card ${project.className ?? ""}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
