import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { IconWhatsApp, IconMail, IconMapPin, IconArrowUpRight } from "@/components/ui/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E3DFD6] bg-[#EEEAE1]/60 pt-16 pb-12 text-[#172C46]">
      <Container className="space-y-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Identity & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-[#172C46] hover:text-[#F26A3D] transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="text-sm text-[#626A73] max-w-sm leading-relaxed">
              Independent digital solutions developer in Vapi, Gujarat. Building modern, high-performance websites, industrial product catalogues, and intelligent customer experiences.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#858A91]">
              <IconMapPin className="w-4 h-4 text-[#F26A3D]" />
              <span>Based in Vapi · Serving Vapi GIDC, Dungra, Pardi, Sarigam, Silvassa & Daman</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#172C46]">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#626A73]">
              <li>
                <Link href="#services" className="hover:text-[#F26A3D] transition-colors">
                  Services Offered
                </Link>
              </li>
              <li>
                <Link href="#industries" className="hover:text-[#F26A3D] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-[#F26A3D] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#F26A3D] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#F26A3D] transition-colors">
                  About Samir
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#F26A3D] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Profiles */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-[#172C46]">
              Connect & Inquiries
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#172C46] hover:text-[#F26A3D] font-medium transition-colors"
              >
                <IconWhatsApp className="w-4 h-4 text-[#F26A3D]" />
                <span>WhatsApp: {siteConfig.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-[#626A73] hover:text-[#F26A3D] transition-colors"
              >
                <IconMail className="w-4 h-4 text-[#F26A3D]" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#626A73]">
                <a
                  href={siteConfig.links.technicalPortfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F26A3D] transition-colors"
                >
                  <span>Technical Portfolio</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F26A3D] transition-colors"
                >
                  <span>GitHub</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F26A3D] transition-colors"
                >
                  <span>LinkedIn</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#F26A3D] transition-colors"
                >
                  <span>Instagram</span>
                  <IconArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E3DFD6] pt-6 text-xs text-[#858A91]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>
            Designed & Developed in Vapi, Gujarat with Next.js 16 & React 19.
          </p>
        </div>
      </Container>
    </footer>
  );
}
