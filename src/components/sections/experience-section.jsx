import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experienceData } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-4">
        {experienceData.map((item) => (
          <Card key={item.id} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
                {item.role} · {item.company}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <span className="text-xs font-medium text-zinc-500 whitespace-nowrap">
              {item.period}
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}
