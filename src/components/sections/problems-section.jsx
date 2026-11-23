import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RevealGroup } from "@/components/motion/reveal";
import { businessProblemsData } from "@/data/problems";
import { siteConfig } from "@/config/site";
import {
  IconAlertCircle,
  IconClock,
  IconMessageSquare,
  IconRefreshCw,
  IconCpu,
  IconCheck,
  IconArrowRight,
  IconWhatsApp,
} from "@/components/ui/icons";

const iconMap = {
  alert: IconAlertCircle,
  chat: IconMessageSquare,
  clock: IconClock,
  refresh: IconRefreshCw,
  cpu: IconCpu,
};

export function ProblemsSection() {
  return (
    <Section
      id="problems"
      badge="Problem Recognition"
      title="Is Your Business Facing These Digital Roadblocks?"
      description="Most local businesses in Vapi struggle with websites that don't generate leads, repetitive customer inquiries, or slow manual processes. Here is how we turn everyday operational frustrations into working software."
    >
      <RevealGroup
        selector=":scope > article"
        stagger={0.08}
        className="grid gap-6 sm:gap-8 lg:grid-cols-2"
      >
        {businessProblemsData.map((item) => {
          const IconComp = iconMap[item.icon] || IconAlertCircle;
          const whatsappProblemUrl = `https://wa.me/918320927182?text=${encodeURIComponent(
            `Hi Samir! My business is facing this issue: "${item.title}". I'd like to discuss a solution.`
          )}`;

          return (
            <article
              key={item.id}
              className="neu-plate-interactive rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-2xl bg-[#E8EEF5] p-3 text-[#4F46E5] shadow-neu-inset-sm border border-[#CBD5E1]/40">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <Badge variant="inset" className="text-[11px]">
                      {item.tag}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                {/* The Current Pain Point (Recessed / Inset Well) */}
                <div className="rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                    The Pain Point
                  </span>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.painPoint}
                  </p>
                </div>

                {/* The Practical Solution We Build */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] block">
                    The Practical Solution
                  </span>
                  <p className="text-sm text-[#0F172A] leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>

                {/* The Tangible Outcome */}
                <div className="rounded-2xl bg-[#EEF2F6] p-3.5 border border-white/80 shadow-neu-sm flex items-start gap-2.5 text-xs text-[#0F172A] font-semibold">
                  <IconCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#10B981]">Outcome:</strong>{" "}
                    {item.outcome}
                  </span>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-5 mt-6 border-t border-[#CBD5E1]/40 flex items-center justify-between">
                <a
                  href={whatsappProblemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
                >
                  <IconWhatsApp className="w-4 h-4 text-[#10B981]" />
                  <span>Solve this for my business</span>
                  <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          );
        })}
      </RevealGroup>

      {/* Problem Section Summary Banner */}
      <div className="mt-10 rounded-3xl border border-white/85 bg-[#EEF2F6] p-6 sm:p-8 shadow-neu flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-[#0F172A]">
            Have a different operational challenge or software requirement?
          </h4>
          <p className="text-xs sm:text-sm text-[#475569]">
            Tell me about your business workflow. We will analyze the challenge and outline a practical digital solution.
          </p>
        </div>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Button variant="whatsapp" size="md" className="gap-2 font-bold">
            <IconWhatsApp className="w-4 h-4 text-white" />
            <span>Discuss Your Challenge</span>
          </Button>
        </a>
      </div>
    </Section>
  );
}
