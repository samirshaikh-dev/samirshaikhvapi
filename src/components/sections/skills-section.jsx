import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical Capabilities">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group) => (
          <Card key={group.category} className="p-4">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
