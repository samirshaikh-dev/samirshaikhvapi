import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { IconWhatsApp, IconMail, IconMapPin, IconArrowUpRight } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/80 bg-[#EEF2F6] pt-16 pb-12 text-[#0F172A] shadow-neu-inset-sm">
      <Container className="space-y-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identity & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-tight text-[#0F172A] hover:text-[#4F46E5] transition-colors"
            >
              {siteConfig.name}<span className="text-[#4F46E5]">.</span>
            </Link>
            <p className="text-sm text-[#475569] max-w-sm leading-relaxed">
              Independent digital solutions developer in Vapi, Gujarat. Building modern, high-performance websites, industrial product catalogues, and intelligent customer experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <IconMapPin className="w-4 h-4 text-[#4F46E5] shrink-0" />
              <span>Based in Vapi · Serving Vapi GIDC, Dungra, Pardi, Sarigam, Silvassa & Daman</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#475569]">
              <li>
                <Link href="#problems" className="hover:text-[#4F46E5] transition-colors">
                  Problems We Solve
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#4F46E5] transition-colors">
                  Solutions & Services
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-[#4F46E5] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#4F46E5] transition-colors">
                  Selected Case Studies
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#4F46E5] transition-colors">
                  Why Work With Me
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#4F46E5] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#4F46E5] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Profiles */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Connect & Inquiries
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#0F172A] hover:text-[#10B981] font-semibold transition-colors"
              >
                <div className="p-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm text-[#10B981] border border-white/80">
                  <IconWhatsApp className="w-4 h-4" />
                </div>
                <span>WhatsApp: {siteConfig.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-[#475569] hover:text-[#4F46E5] transition-colors"
              >
                <div className="p-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm text-[#4F46E5] border border-white/80">
                  <IconMail className="w-4 h-4" />
                </div>
                <span>{siteConfig.email}</span>
              </a>
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#475569]">
                <a
                  href={siteConfig.links.technicalPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:text-[#4F46E5] hover:shadow-neu transition-all"
                >
                  <span>Technical Portfolio</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:text-[#4F46E5] hover:shadow-neu transition-all"
                >
                  <span>GitHub</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:text-[#4F46E5] hover:shadow-neu transition-all"
                >
                  <span>LinkedIn</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:text-[#4F46E5] hover:shadow-neu transition-all"
                >
                  <span>Instagram</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CBD5E1]/50 pt-6 text-xs text-[#64748B]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>
            Designed & Developed in Vapi, Gujarat with Next.js 16 & React 19.
          </p>
        </div>
      </Container>
    </footer>
  );
}
