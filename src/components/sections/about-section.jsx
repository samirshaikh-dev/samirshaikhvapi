"use client";

import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { useReducedMotion } from "@/lib/motion/use-reduced-motion";
import { motion } from "framer-motion";
import {
  IconCheck,
  IconShieldCheck,
  IconMapPin,
  IconPhone,
  IconArrowRight,
  IconWhatsApp,
  IconClock,
} from "@/components/ui/icons";

const clientGuarantees = [
  {
    title: "100% Code & Asset Ownership",
    description: "You own all source code, domain access, and design assets completely. Zero platform lock-in or recurring hostage fees.",
  },
  {
    title: "Fixed Scope & Upfront Pricing",
    description: "Clear deliverables and agreed milestones before we start. No surprise bills, hidden hourly fees, or unexpected costs.",
  },
  {
    title: "Direct WhatsApp & Phone Access",
    description: "You speak directly with the developer building your software. No support ticket queues or communication delays.",
  },
  {
    title: "Fast Mobile Performance Guaranteed",
    description: "Built to open in under a second on local mobile networks, so you never lose a customer to a slow connection.",
  },
  {
    title: "Dedicated Post-Launch Support",
    description: "Direct assistance after launch for content updates, new features, and technical advice as your business grows.",
  },
];

export function AboutSection() {
  const reduced = useReducedMotion();
  const prefilledWhatsappUrl = `https://wa.me/918320927182?text=${encodeURIComponent(
    "Hi Samir! I came across your portfolio and would like to discuss a project for my business."
  )}`;

  return (
    <Section
      id="about"
      badge="Why Work With Me"
      title="A Direct Technology Partner for Your Business"
      description="Building reliable software shouldn't require navigating agency bureaucracy, junior account managers, or inflated retainers. Working directly with an independent developer gives your business speed, clarity, and focused attention."
    >
      <div id="why-me" className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Direct Collaboration */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-base text-[#475569] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[#0F172A]">Samir Shaikh</strong>, an independent developer and digital solutions partner based in <strong className="text-[#0F172A]">Vapi, Gujarat</strong>. I work with business owners across South Gujarat to turn daily operational challenges into clean, fast digital tools that attract more clients.
            </p>
            <p>
              When you hire a traditional agency, your project is often handed off between junior staff while you pay for senior overhead. When you work with me, you communicate directly with the engineer who architects, designs, and builds your application — resulting in faster delivery, cleaner work, and direct personal accountability.
            </p>
          </div>

          {/* Key Advantages */}
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 space-y-5 shadow-neu-card">
            <h3 className="text-base font-bold text-[#0F172A]">
              How Working With Me Protects Your Business:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#0F172A]">
              <div className="space-y-1.5 rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-2 text-[#0F172A] text-sm">
                  <div className="w-6 h-6 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                    <IconPhone className="w-3.5 h-3.5 text-[#4F46E5]" />
                  </div>
                  Direct Communication
                </span>
                <p className="text-[#475569] leading-relaxed pl-8">
                  You talk directly to the developer building your software. Zero miscommunication, fast decisions, and direct phone/WhatsApp access.
                </p>
              </div>

              <div className="space-y-1.5 rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-2 text-[#0F172A] text-sm">
                  <div className="w-6 h-6 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                    <IconMapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
                  </div>
                  Local Vapi Availability
                </span>
                <p className="text-[#475569] leading-relaxed pl-8">
                  Available for in-person meetings at your office or factory across Vapi GIDC, Dungra, Pardi, Sarigam, Silvassa, and Daman.
                </p>
              </div>

              <div className="space-y-1.5 rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-2 text-[#0F172A] text-sm">
                  <div className="w-6 h-6 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                    <IconShieldCheck className="w-3.5 h-3.5 text-[#4F46E5]" />
                  </div>
                  No Agency Bloat
                </span>
                <p className="text-[#475569] leading-relaxed pl-8">
                  Transparent, fixed-price project quotes without high enterprise retainers, account manager markups, or hidden hourly overages.
                </p>
              </div>

              <div className="space-y-1.5 rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm">
                <span className="font-bold flex items-center gap-2 text-[#0F172A] text-sm">
                  <div className="w-6 h-6 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center shrink-0">
                    <IconClock className="w-3.5 h-3.5 text-[#4F46E5]" />
                  </div>
                  Fast Turnaround
                </span>
                <p className="text-[#475569] leading-relaxed pl-8">
                  Fast milestone completions with direct status updates, so your website or tool is delivered and live on schedule.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Client Guarantees (Warm Green Payoff Surfaces) */}
        <div className="lg:col-span-5 space-y-6">
          <Card variant="raised" hover={false} className="space-y-5 rounded-3xl border-[#CBD5E1]/50 shadow-neu-card p-6 sm:p-7">
            <div className="flex items-center justify-between pb-3.5 border-b border-[#CBD5E1]/40">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                  Client Guarantees & Work Standards
                </h3>
                <span className="text-xs text-[#64748B]">
                  What you can expect on every project
                </span>
              </div>
              <Badge variant="whatsapp" className="px-3 py-1 text-xs">
                Guaranteed
              </Badge>
            </div>

            <div className="space-y-3">
              {clientGuarantees.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#ECFDF5] p-4 border border-[#10B981]/30 shadow-sm space-y-1"
                >
                  <span className="font-bold text-xs sm:text-[13px] text-[#065F46] flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 flex items-center justify-center shrink-0">
                      <IconCheck className="w-3 h-3 text-[#059669]" />
                    </div>
                    {item.title}
                  </span>
                  <p className="text-xs text-[#334155] leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Contact Real Solid WhatsApp Button */}
            <div className="pt-4 border-t border-[#CBD5E1]/40">
              <motion.a
                href={prefilledWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2.5 font-bold text-sm px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-neu-whatsapp hover:from-[#34D399] hover:to-[#10B981] transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                aria-label="Discuss your project with Samir on WhatsApp"
              >
                <IconWhatsApp className="w-4 h-4 text-white shrink-0" />
                <span>Discuss Your Project on WhatsApp</span>
                <IconArrowRight className="w-4 h-4 text-white/90 shrink-0 ml-auto group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
