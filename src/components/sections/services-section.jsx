import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { RevealGroup } from "@/components/motion/reveal";
import { servicesData } from "@/data/services";
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
} from "@/components/ui/icons";

const iconMap = {
  "business-website": IconLaptop,
  "industrial-website": IconFactory,
  "website-redesign": IconRefreshCw,
  "ecommerce-development": IconShoppingBag,
  "custom-web-apps": IconLayers,
  "ai-solutions": IconBot,
};

export function ServicesSection() {
  return (
    <Section
      id="services"
      index="01"
      total="07"
      badge="Capabilities & Solutions"
      title="What I Can Build for Your Business"
      description="Practical digital solutions focused on commercial outcomes: attracting qualified inquiries, showcasing your products, and simplifying daily customer interactions."
    >
      <RevealGroup
        selector=":scope > article"
        stagger={0.08}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.id] || IconLaptop;
          const prefilledMessage = encodeURIComponent(
            `Hi Samir! I'm interested in your ${service.title} service for my business in Vapi.`
          );
          const whatsappServiceUrl = `https://wa.me/918320927182?text=${prefilledMessage}`;

          return (
            <article
              key={service.id}
              className="group relative neu-plate-interactive rounded-3xl p-7 sm:p-9 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-[#EEF2F6] border border-white/90 p-3 text-[#4F46E5] shadow-neu-sm transition-all duration-300 group-hover:shadow-neu-inset-sm group-hover:text-[#4338CA]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <Badge variant="inset" className="text-[11px]">
                    Tailored Solution
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

                <p className="text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="pt-3 border-t border-[#CBD5E1]/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block mb-2.5">
                    Key Deliverables
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
              </div>

              {/* Footer: ideal-for + WhatsApp action */}
              <div className="pt-5 mt-6 border-t border-[#CBD5E1]/40 space-y-3">
                <p className="text-[11px] text-[#64748B]">
                  <strong className="text-[#0F172A]">Ideal for:</strong>{" "}
                  {service.idealFor}
                </p>
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#10B981]/10 text-[#10B981] shadow-neu-inset-sm">
                    <IconWhatsApp className="w-3.5 h-3.5" />
                  </div>
                  <span>Inquire about this service</span>
                  <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
