import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <Card key={project.id} className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
