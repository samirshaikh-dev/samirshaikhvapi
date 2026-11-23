import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { RevealGroup } from "@/components/motion/reveal";
import { IconCheck } from "@/components/ui/icons";

const steps = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding your business goals",
    description:
      "We begin with a direct conversation about your business, target customers, and operational bottlenecks. We identify exactly what digital solution will move the needle — whether that is a lead-generating storefront, factory catalogue, or internal workflow app.",
    keyPoints: [
      "Zero technical jargon — pure business focus",
      "Analysis of local competitor presence in Vapi",
      "Clear definition of your primary conversion goal",
    ],
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Wireframes, clear scope & fixed quote",
    description:
      "Before writing code, we structure the user journey, design the tactile layout, and define exact milestones. You see how your website will look and function, with a transparent, fixed price quote and timeline.",
    keyPoints: [
      "Mobile-first wireframes tailored to your industry",
      "Transparent cost & timeline with no surprise fees",
      "Review and approval before implementation begins",
    ],
  },
  {
    step: "03",
    title: "Build",
    subtitle: "Fast, modern & accessible engineering",
    description:
      "Built on Next.js 16 and React 19 for sub-second mobile loading, zero visual shift (zero CLS), and seamless WhatsApp lead routing. Product catalogues, quotation systems, and dashboards are tested rigorously.",
    keyPoints: [
      "Blazing fast performance on 4G/5G mobile networks",
      "WhatsApp RFQ and phone call click-to-connect integration",
      "Foundational on-page local SEO & structured data markup",
    ],
  },
  {
    step: "04",
    title: "Launch",
    subtitle: "Domain, SSL & Google indexing",
    description:
      "We deploy to your production custom domain, configure SSL security certificates, connect Google Search Console, submit your sitemap for indexing, and verify that every contact form and WhatsApp button works perfectly.",
    keyPoints: [
      "Custom domain connection & HTTPS security",
      "Google Search Console & sitemap submission",
      "End-to-end inquiry dispatch and mobile testing",
    ],
  },
  {
    step: "05",
    title: "Support",
    subtitle: "Direct ongoing collaboration",
    description:
      "Your website doesn't end at launch. You have direct access to the developer who built your software for ongoing updates, new feature additions, performance monitoring, and technical advice as your business grows.",
    keyPoints: [
      "Direct phone and WhatsApp support — no ticket queues",
      "Fast response times for content updates & fixes",
      "Continuous reliability and performance peace of mind",
    ],
  },
];

export function ProcessSection() {
  return (
    <Section
      id="process"
      badge="Simple Working Process"
      title="How We Work Together"
      description="A structured, 5-stage collaboration designed to respect your time, keep you informed, and deliver a reliable digital solution without delays."
    >
      <RevealGroup
        selector=":scope > article"
        stagger={0.08}
        className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-5"
      >
        {steps.map((item) => (
          <Card
            key={item.step}
            as="article"
            variant="raised"
            className="flex flex-col justify-between group p-6 sm:p-7"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-extrabold text-[#4F46E5] tabular-nums">
                  {item.step}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-neu-sm" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#4F46E5] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#4F46E5] mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#475569] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#CBD5E1]/40 space-y-1.5 text-[11px] text-[#0F172A]">
              {item.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-1.5 font-medium">
                  <IconCheck className="w-3.5 h-3.5 text-[#4F46E5] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </RevealGroup>
    </Section>
  );
}
