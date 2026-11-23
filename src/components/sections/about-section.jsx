import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { experienceData, educationData } from "@/data/experience";
import {
  IconCheck,
  IconArrowUpRight,
} from "@/components/ui/icons";

export function AboutSection() {
  return (
    <Section
      id="about"
      index="05"
      total="07"
      badge="About Samir"
      title="A Better Digital Presence for Your Business"
      description="Working directly with an independent digital developer gives your business focused attention, direct communication, and solutions built specifically for your needs."
    >
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Personal Narrative & Approach */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[#0F172A]">Samir Shaikh</strong>, an independent developer based in <strong className="text-[#0F172A]">Vapi, Gujarat</strong>. I work with business owners across South Gujarat to turn everyday operations into clean, professional digital experiences that attract more clients.
            </p>
            <p>
              Many local businesses in Vapi GIDC, clinics, and service providers have either never had a website or are stuck with an outdated, broken template that does not reflect their true quality. My focus is combining modern design aesthetics with practical business utility — ensuring your website loads instantly, presents your products clearly, and makes contacting you as simple as a single WhatsApp tap.
            </p>
          </div>

          {/* Key Advantages of Working Together */}
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 space-y-4 shadow-neu-card">
            <h3 className="text-base font-bold text-[#0F172A]">
              Why Work With An Independent Developer?
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0F172A]">
              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#4F46E5]" />
                  Direct Communication
                </span>
                <p className="text-[#475569] pl-5.5">
                  You speak directly with the developer building your site. No account managers or miscommunications.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#4F46E5]" />
                  Local Vapi Availability
                </span>
                <p className="text-[#475569] pl-5.5">
                  Available for in-person discussions across Vapi, Dungra, Pardi, Sarigam, Silvassa, and Daman.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#4F46E5]" />
                  No Agency Bloat
                </span>
                <p className="text-[#475569] pl-5.5">
                  High-end engineering without unnecessary overhead fees or sluggish enterprise timelines.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#0F172A]">
                  <IconCheck className="w-4 h-4 text-[#4F46E5]" />
                  Modern Tech Standards
                </span>
                <p className="text-[#475569] pl-5.5">
                  Built on modern Next.js 16 and React 19 for industry-grade reliability, speed, and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Credibility & Background */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="raised" className="space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#CBD5E1]/40">
              <h3 className="text-base font-bold text-[#0F172A]">
                Professional Background
              </h3>
              <Badge variant="inset">Verified</Badge>
            </div>

            {/* Verified Experience from PROJECT-CONTEXT.md §4 */}
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
                Education
              </span>
              <p className="font-bold text-[#0F172A]">
                {educationData.degree} — {educationData.specialization}
              </p>
              <p className="text-[#475569]">
                {educationData.institution} ({educationData.period})
              </p>
            </div>

            {/* Link to technical details */}
            <div className="pt-2">
              <a
                href={siteConfig.links.technicalPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#4F46E5] transition-colors"
              >
                <span>Read in-depth engineering write-ups</span>
                <IconArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
