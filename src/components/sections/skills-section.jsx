import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { skillsData } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical Capabilities">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((group) => (
          <Card key={group.category} variant="raised" className="p-6">
            <h3 className="text-sm font-bold text-[#0F172A] md:whitespace-nowrap">
              {group.category}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-[#475569]">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4F46E5]" />
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
