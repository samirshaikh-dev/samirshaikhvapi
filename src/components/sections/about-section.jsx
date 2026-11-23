import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { experienceData, educationData } from "@/data/experience";
import {
  IconCheck,
  IconArrowUpRight,
  IconMapPin,
  IconShieldCheck,
} from "@/components/ui/icons";

export function AboutSection() {
  return (
    <Section
      id="about"
      badge="Why Work With Me"
      title="A Direct Technology Partner for Your Business"
      description="Building high-performance software shouldn't require navigating agency bureaucracy, junior account managers, or inflated retainers. Working directly with an independent developer gives your business speed, clarity, and focused attention."
    >
      <div id="why-me" className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Client Trust Pillars */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[#0F172A]">Samir Shaikh</strong>, an independent developer and digital solutions partner based in <strong className="text-[#0F172A]">Vapi, Gujarat</strong>. I work with business owners across South Gujarat to turn daily operational challenges into clean, high-performance digital tools that attract more clients.
            </p>
            <p>
              When you hire an agency, your project is often handed off to junior contractors while you pay for senior overhead. When you work with me, you communicate directly with the engineer who architects, designs, and codes your application — resulting in faster delivery, cleaner code, and direct accountability.
            </p>
          </div>

          {/* Key Trust Pillars */}
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 space-y-5 shadow-neu-card">
            <h3 className="text-base font-bold text-[#0F172A]">
              How Working With Me Protects Your Project:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0F172A]">
              <div className="space-y-1 rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#10B981]" />
                  Direct Communication
                </span>
                <p className="text-[#475569] pl-5.5">
                  You talk directly to the developer building your software. Zero miscommunication, fast decisions, and direct phone/WhatsApp access.
                </p>
              </div>

              <div className="space-y-1 rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#10B981]" />
                  Local Vapi Availability
                </span>
                <p className="text-[#475569] pl-5.5">
                  Available for in-person meetings at your office or factory across Vapi GIDC, Dungra, Pardi, Sarigam, Silvassa, and Daman.
                </p>
              </div>

              <div className="space-y-1 rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-1.5 text-[#10B981]" />
                <span className="font-bold">No Agency Bloat</span>
                <p className="text-[#475569] pl-5.5">
                  Transparent, fixed-price project quotes without high enterprise retainers, account executive markups, or hidden hourly overages.
                </p>
              </div>

              <div className="space-y-1 rounded-2xl bg-[#E8EEF5] p-3.5 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-1.5 text-[#10B981]" />
                <span className="font-bold">Proven Architecture</span>
                <p className="text-[#475569] pl-5.5">
                  Built on modern Next.js 16 and React 19 standards for sub-second mobile loading, high security, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Credibility as Proof */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="raised" className="space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#CBD5E1]/40">
              <div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  Verified Engineering Track Record
                </h3>
                <span className="text-[11px] text-[#64748B]">
                  Supporting proof of software delivery
                </span>
              </div>
              <Badge variant="inset">Verified</Badge>
            </div>

            {/* Experience as proof of technical reliability */}
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex items-start justify-between text-xs">
                    <span className="font-bold text-[#0F172A]">{exp.company}</span>
                    <span className="text-[#64748B] font-semibold">{exp.period}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#4F46E5] block">
                    {exp.role} · {exp.location}
                  </span>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="pt-4 border-t border-[#CBD5E1]/40 space-y-1 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] block">
                Educational Foundation
              </span>
              <p className="font-bold text-[#0F172A]">
                {educationData.degree} — {educationData.specialization}
              </p>
              <p className="text-[#475569]">
                {educationData.institution} ({educationData.period})
              </p>
            </div>

            {/* Technical case studies link */}
            <div className="pt-2">
              <a
                href={siteConfig.links.technicalPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
              >
                <span>Read detailed engineering metrics & case studies</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
