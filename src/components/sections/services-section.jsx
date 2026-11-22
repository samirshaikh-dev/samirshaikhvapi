import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      badge="Capabilities & Solutions"
      title="What I Can Build for Your Business"
      description="Practical digital solutions focused on commercial outcomes: attracting qualified inquiries, showcasing your products, and simplifying daily customer interactions."
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.id] || IconLaptop;
          const prefilledMessage = encodeURIComponent(
            `Hi Samir! I'm interested in your ${service.title} service for my business in Vapi.`
          );
          const whatsappServiceUrl = `https://wa.me/918320927182?text=${prefilledMessage}`;

          return (
            <Card
              key={service.id}
              className="flex flex-col justify-between group hover:border-[#172C46]/30 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Icon & Service Title */}
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#E9E5F5] p-3 text-[#172C46] group-hover:bg-[#F26A3D] group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <Badge variant="ivory" className="text-[11px]">
                    Tailored Solution
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#F26A3D]">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-[#626A73] leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-2 border-t border-[#E3DFD6]/60">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#858A91] block mb-2">
                    Key Deliverables:
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

              {/* Card Footer: Ideal For & Direct WhatsApp Action */}
              <div className="pt-5 mt-5 border-t border-[#E3DFD6] space-y-3">
                <p className="text-[11px] text-[#626A73]">
                  <strong className="text-[#172C46]">Ideal for:</strong> {service.idealFor}
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
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
