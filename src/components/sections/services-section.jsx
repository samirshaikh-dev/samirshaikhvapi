import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealGroup } from "@/components/motion/reveal";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";
import {
  IconCheck,
  IconArrowRight,
  IconWhatsApp,
  IconLaptop,
  IconFactory,
  IconRefreshCw,
  IconShoppingBag,
  IconLayers,
  IconBot,
  IconCpu,
} from "@/components/ui/icons";

const iconMap = {
  "business-website": IconLaptop,
  "industrial-website": IconFactory,
  "website-redesign": IconRefreshCw,
  "custom-web-apps": IconLayers,
  "ai-solutions": IconBot,
  "ai-knowledge-rag": IconBot,
  "backend-automation": IconCpu,
};

export function ServicesSection() {
  return (
    <Section
      id="services"
      badge="Solutions & Services"
      title="What I Can Build for Your Business"
      description="Practical digital solutions focused on commercial outcomes: turning website visitors into inquiries, digitizing internal workflows, and automating customer support."
    >
      <RevealGroup
        selector=":scope > article"
        stagger={0.08}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.id] || IconLaptop;
          const prefilledMessage = encodeURIComponent(
            `Hi Samir! I'm interested in "${service.title}" for my business in Vapi. I'd like to discuss the requirements.`
          );
          const whatsappServiceUrl = `https://wa.me/918320927182?text=${prefilledMessage}`;

          return (
            <article
              key={service.id}
              className="group relative neu-plate-interactive rounded-3xl p-7 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-[#EEF2F6] border border-white/90 p-3 text-[#4F46E5] shadow-neu-sm transition-all duration-300 group-hover:shadow-neu-inset-sm group-hover:text-[#4338CA]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <Badge variant="inset" className="text-[11px]">
                    Solution
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] transition-colors group-hover:text-[#4F46E5]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#4F46E5]">
                    {service.subtitle}
                  </p>
                </div>

                {/* The Problem It Solves */}
                <div className="rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                    Problem It Solves
                  </span>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {service.problemSolved}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2">
                    What I Deliver
                  </span>
                  <ul className="space-y-2 text-xs text-[#0F172A]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Business Gain */}
                <div className="rounded-2xl bg-[#EEF2F6] p-3 border border-white/80 shadow-neu-sm flex items-start gap-2 text-xs text-[#0F172A] font-semibold">
                  <IconCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#10B981]">Business Gain:</strong>{" "}
                    {service.businessBenefit}
                  </span>
                </div>
              </div>

              {/* Footer: Ideal For + Contextual CTA */}
              <div className="pt-5 mt-6 border-t border-[#CBD5E1]/40 space-y-3">
                <p className="text-[11px] text-[#64748B]">
                  <strong className="text-[#0F172A]">Ideal for:</strong>{" "}
                  {service.idealFor}
                </p>
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    variant="secondary"
                    size="sm"
                    className="w-full gap-2 text-xs font-bold justify-between hover:text-[#4F46E5]"
                  >
                    <span className="flex items-center gap-1.5">
                      <IconWhatsApp className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{service.ctaText}</span>
                    </span>
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </a>
              </div>
            </article>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
