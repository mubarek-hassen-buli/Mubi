import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4 group"
          >
            <ChevronLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Link>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                All Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Project Archive
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A complete list of my projects, experiments, and open source contributions.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
