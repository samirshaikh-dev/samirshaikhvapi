import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { IconCheck } from "@/components/ui/icons";

const steps = [
  {
    step: "01",
    title: "Discovery & Scope",
    subtitle: "Understanding your business in Vapi",
    description:
      "We begin with a direct conversation about your business, target customers, and product offerings. We determine exactly what functionality you need — whether that is an industrial catalog, quotation form, or clinic appointment flow.",
    keyPoints: [
      "No technical jargon — clear business focus",
      "Competitor and local market assessment",
      "Clear, transparent cost & timeline quote",
    ],
  },
  {
    step: "02",
    title: "Editorial Design & Prototype",
    subtitle: "Clean, Warm Luxury visual identity",
    description:
      "Before writing code, we establish the layout, color palette, and mobile presentation. You see how your website will look and feel, ensuring it looks distinct and premium rather than like a generic template.",
    keyPoints: [
      "Custom layout suited to your industry",
      "Mobile-first responsive wireframes",
      "Review and refinement before code",
    ],
  },
  {
    step: "03",
    title: "High-Performance Development",
    subtitle: "Built with Next.js 16 & React 19",
    description:
      "We build the website using modern web architecture for sub-second loading, zero visual shift (zero CLS), and seamless WhatsApp lead integration. All product details and catalogs are organized cleanly.",
    keyPoints: [
      "Blazing fast performance on 4G/5G mobile",
      "WhatsApp & click-to-call integrations",
      "On-page local SEO & structured data",
    ],
  },
  {
    step: "04",
    title: "Launch & Local Search Setup",
    subtitle: "Live deployment & ongoing guidance",
    description:
      "We launch on your custom domain, connect Google Search Console, submit your sitemap for indexing, and verify that all contact forms and WhatsApp buttons work flawlessly.",
    keyPoints: [
      "Custom domain & SSL certificate setup",
      "Google Search Console & sitemap submission",
      "Direct post-launch support and guidance",
    ],
  },
];

export function ProcessSection() {
  return (
    <Section
      id="process"
      badge="Collaboration"
      title="How We Work"
      description="A structured, transparent process designed to respect your time and deliver a reliable digital presence without delays."
    >
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item) => (
          <Card
            key={item.step}
            className="flex flex-col justify-between hover:border-[#F26A3D]/40 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold text-[#F26A3D]/80">
                  {item.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#172C46]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#172C46]">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#F26A3D] mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#626A73] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#E3DFD6] space-y-1.5 text-xs text-[#172C46]">
              {item.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-1.5">
                  <IconCheck className="w-3.5 h-3.5 text-[#F26A3D] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
