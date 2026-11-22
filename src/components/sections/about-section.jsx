import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { experienceData, educationData } from "@/data/experience";
import {
  IconCheck,
  IconMapPin,
  IconShieldCheck,
  IconLaptop,
  IconArrowUpRight,
} from "@/components/ui/icons";

export function AboutSection() {
  return (
    <Section
      id="about"
      badge="About Samir"
      title="A Better Digital Presence for Your Business"
      description="Working directly with an independent digital developer gives your business focused attention, direct communication, and solutions built specifically for your needs."
    >
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Personal Narrative & Approach */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-base text-[#626A73] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[#172C46]">Samir Shaikh</strong>, an independent developer based in <strong className="text-[#172C46]">Vapi, Gujarat</strong>. I work with business owners across South Gujarat to turn everyday operations into clean, professional digital experiences that attract more clients.
            </p>
            <p>
              Many local businesses in Vapi GIDC, clinics, and service providers have either never had a website or are stuck with an outdated, broken template that does not reflect their true quality. My focus is combining modern design aesthetics with practical business utility — ensuring your website loads instantly, presents your products clearly, and makes contacting you as simple as a single WhatsApp tap.
            </p>
          </div>

          {/* Key Advantages of Working Together */}
          <div className="rounded-2xl border border-[#E3DFD6] bg-white p-6 space-y-4 shadow-card">
            <h3 className="text-base font-bold text-[#172C46]">
              Why Work With An Independent Developer?
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#172C46]">
              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#172C46]">
                  <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                  Direct Communication
                </span>
                <p className="text-[#626A73] pl-5.5">
                  You speak directly with the developer building your site. No account managers or miscommunications.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#172C46]">
                  <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                  Local Vapi Availability
                </span>
                <p className="text-[#626A73] pl-5.5">
                  Available for in-person discussions across Vapi, Dungra, Pardi, Sarigam, Silvassa, and Daman.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#172C46]">
                  <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                  No Agency Bloat
                </span>
                <p className="text-[#626A73] pl-5.5">
                  High-end engineering without unnecessary overhead fees or sluggish enterprise timelines.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-[#172C46]">
                  <IconCheck className="w-4 h-4 text-[#F26A3D]" />
                  Modern Tech Standards
                </span>
                <p className="text-[#626A73] pl-5.5">
                  Built on modern Next.js 16 and React 19 for industry-grade reliability, speed, and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Credibility & Background */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#E3DFD6]">
              <h3 className="text-base font-bold text-[#172C46]">
                Professional Background
              </h3>
              <Badge variant="ivory">Verified</Badge>
            </div>

            {/* Verified Experience from PROJECT-CONTEXT.md §4 */}
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex items-start justify-between text-xs">
                    <span className="font-bold text-[#172C46]">{exp.company}</span>
                    <span className="text-[#858A91]">{exp.period}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#F26A3D] block">
                    {exp.role} · {exp.location}
                  </span>
                  <p className="text-xs text-[#626A73] leading-relaxed">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="pt-4 border-t border-[#E3DFD6] space-y-1 text-xs">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#858A91] block">
                Education
              </span>
              <p className="font-bold text-[#172C46]">
                {educationData.degree} — {educationData.specialization}
              </p>
              <p className="text-[#626A73]">
                {educationData.institution} ({educationData.period})
              </p>
            </div>

            {/* Link to technical details */}
            <div className="pt-2">
              <a
                href={siteConfig.links.technicalPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] hover:text-[#F26A3D] transition-colors"
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
