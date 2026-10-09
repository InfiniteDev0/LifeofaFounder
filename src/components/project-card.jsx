import { cn } from "@/lib/utils";

function ProjectLogo({ project }) {
  if (project.logo) {
    return (
      <img
        src={project.logo}
        alt=""
        className="size-11 sm:size-12 rounded-xl object-cover bg-white ring-1 ring-border flex-shrink-0"
      />
    );
  }

  return (
    <span
      className="size-11 sm:size-12 rounded-xl flex items-center justify-center text-white text-xl font-bold flex-shrink-0"
      style={{ backgroundColor: project.color }}
    >
      {project.name.charAt(0)}
    </span>
  );
}

export default function ProjectCard({ project }) {
  const contain = project.imageFit === "contain";

  return (
    <a href={project.href} className="group block">
      {/* Preview panel */}
      <div className="relative rounded-2xl bg-muted overflow-hidden flex items-center justify-center p-8 sm:p-10 xl:p-6">
        <div
          className={cn(
            "w-full aspect-[16/10] overflow-hidden rounded-lg shadow-lg ring-1 ring-border",
            "transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.02]",
            contain ? "bg-white" : "bg-zinc-900",
          )}
        >
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className={cn(
              "w-full h-full",
              contain ? "object-contain p-4" : "object-cover object-top",
            )}
          />
        </div>
      </div>

      {/* Title row */}
      <div className="mt-4 flex items-center gap-3">
        <ProjectLogo project={project} />
        <div className="min-w-0">
          <p className="text-xl zain flex items-start gap-2 sm:text-2xl text-foreground leading-tight">
            {project.name}
            {project.isNew && (
              <span className="rounded-sm bg-muted/50 px-2.5 py-1 text-sm font-semibold text-foreground">
                New
              </span>
            )}
          </p>
          <span className="text-sm text-muted-foreground truncate">
            {project.description}
          </span>
        </div>
      </div>
    </a>
  );
}
