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
        className="grid gap-px sm:gap-0 md:grid-cols-2 lg:grid-cols-3 bg-[#E3DFD6] border border-[#E3DFD6] rounded-3xl overflow-hidden"
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
              className="group relative bg-[#F6F2E9] p-7 sm:p-9 flex flex-col justify-between transition-colors duration-300 hover:bg-white"
            >
              {/* Purposeful hover: tangerine rail grows in from the top */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 h-0.5 w-0 bg-[#F26A3D] transition-all duration-500 group-hover:w-full"
              />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-white border border-[#E3DFD6] p-3 text-[#172C46] shadow-xs transition-all duration-300 group-hover:bg-[#F26A3D] group-hover:text-white group-hover:border-[#F26A3D] group-hover:-translate-y-0.5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <Badge variant="ivory" className="text-[11px]">
                    Tailored Solution
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#172C46] transition-colors group-hover:text-[#F26A3D]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#F26A3D]">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#626A73] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="pt-2 border-t border-[#E3DFD6]/70">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#858A91] block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-2 text-xs text-[#172C46]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[#F26A3D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer: ideal-for + WhatsApp action */}
              <div className="pt-5 mt-6 border-t border-[#E3DFD6] space-y-3">
                <p className="text-[11px] text-[#626A73]">
                  <strong className="text-[#172C46]">Ideal for:</strong>{" "}
                  {service.idealFor}
                </p>
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4 text-[#F26A3D]" />
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