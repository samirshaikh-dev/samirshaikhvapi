"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { IconWhatsApp, IconMenu, IconX } from "@/components/ui/icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#E3DFD6]/90 bg-[#F6F2E9]/90 backdrop-blur-md shadow-xs py-3.5"
          : "border-b border-[#E3DFD6]/40 bg-[#F6F2E9]/75 backdrop-blur-sm py-4.5"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand wordmark */}
        <Link
          href="/"
          className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D] rounded-lg"
          aria-label={`${siteConfig.name} - Homepage`}
        >
          <span className="text-xl font-bold tracking-tight text-[#172C46] group-hover:text-[#F26A3D] transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-[11px] font-medium tracking-wider text-[#626A73] uppercase">
            Vapi, Gujarat · Independent Developer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-underline text-sm font-medium text-[#172C46]/85 transition-colors hover:text-[#F26A3D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D] rounded-md px-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat directly with Samir on WhatsApp"
          >
            <Button
              variant="primary"
              size="sm"
              className="gap-2 text-xs font-semibold px-4.5"
            >
              <IconWhatsApp className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#172C46] bg-[#F26A3D] rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D]"
            aria-label="Open WhatsApp conversation"
          >
            <IconWhatsApp className="w-4 h-4 text-[#172C46]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#172C46] hover:bg-[#EEEAE1] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-b border-[#E3DFD6] bg-[#F6F2E9] px-4 pt-4 pb-6 shadow-soft"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#172C46] hover:bg-white hover:text-[#F26A3D] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[#E3DFD6] flex flex-col gap-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full"
              >
                <Button variant="primary" className="w-full gap-2 font-semibold">
                  <IconWhatsApp className="w-5 h-5" />
                  <span>Start WhatsApp Conversation</span>
                </Button>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="secondary" className="w-full">
                  Call {siteConfig.phoneFormatted}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
