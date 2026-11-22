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
              className="flex flex-col justify-between hover:border-[#c9c4b7] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#E9E5F5] p-3 text-[#172C46]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#858A91]">
                    <IconMapPin className="w-3.5 h-3.5 text-[#F26A3D]" />
                    <span>{item.locationScope}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#172C46]">
                  {item.name}
                </h3>

                {/* Common Problem */}
                <div className="rounded-xl bg-[#F6F2E9] p-3.5 border border-[#E3DFD6] space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#858A91] block">
                    The Challenge
                  </span>
                  <p className="text-xs text-[#626A73] leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F26A3D] block">
                    What We Build
                  </span>
                  <p className="text-sm text-[#172C46] leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Bottom Feature */}
              <div className="mt-5 pt-4 border-t border-[#E3DFD6] flex items-center gap-2 text-xs font-semibold text-[#172C46]">
                <IconCheck className="w-4 h-4 text-[#F26A3D] shrink-0" />
                <span>{item.keyFeature}</span>
              </div>
            </Card>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
