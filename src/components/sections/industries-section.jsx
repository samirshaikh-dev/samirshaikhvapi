import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RevealGroup } from "@/components/motion/reveal";
import { industriesData } from "@/data/industries";
import {
  IconFactory,
  IconStethoscope,
  IconGraduationCap,
  IconWrench,
  IconShoppingBag,
  IconRocket,
  IconCheck,
  IconMapPin,
} from "@/components/ui/icons";

const industryIconMap = {
  factory: IconFactory,
  stethoscope: IconStethoscope,
  "graduation-cap": IconGraduationCap,
  wrench: IconWrench,
  "shopping-bag": IconShoppingBag,
  rocket: IconRocket,
};

export function IndustriesSection() {
  return (
    <Section
      id="industries"
      index="02"
      total="07"
      badge="Local Market Relevance"
      title="Digital Experiences for Different Industries"
      description="Different businesses require different digital approaches. Here is how modern web development solves specific challenges across local sectors in Vapi and South Gujarat."
    >
      <RevealGroup
        selector=":scope > article"
        stagger={0.08}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {industriesData.map((item) => {
          const IconComp = industryIconMap[item.icon] || IconFactory;

          return (
            <Card
              key={item.id}
              as="article"
              variant="raised"
              className="flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-[#E8EEF5] p-3 text-[#4F46E5] shadow-neu-inset-sm border border-[#CBD5E1]/40">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#64748B]">
                    <IconMapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
                    <span>{item.locationScope}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                  {item.name}
                </h3>

                {/* Common Problem: Inset Sunken Well */}
                <div className="rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                    The Challenge
                  </span>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] block">
                    What We Build
                  </span>
                  <p className="text-sm text-[#0F172A] leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Feature */}
              <div className="mt-5 pt-4 border-t border-[#CBD5E1]/40 flex items-center gap-2 text-xs font-semibold text-[#0F172A]">
                <IconCheck className="w-4 h-4 text-[#4F46E5] shrink-0" />
                <span>{item.keyFeature}</span>
              </div>
            </Card>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
