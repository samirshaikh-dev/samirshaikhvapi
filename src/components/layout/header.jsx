"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { IconWhatsApp, IconMenu, IconX } from "@/components/ui/icons";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("");
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const links = siteConfig.navItems;
    const visible = new Set();
    const targets = links
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });

        const active = links.find((item) => visible.has(item.href.slice(1)));
        if (active) setActiveHref(active.href);
      },
      { rootMargin: "-20% 0px -68% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const closeMenu = useCallback(({ focusToggle = false } = {}) => {
    setMobileMenuOpen(false);
    if (focusToggle) {
      requestAnimationFrame(() => toggleRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu({ focusToggle: true });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const handleChange = (event) => {
      if (!event.matches || !mobileMenuOpen) return;
      const focusWasInPanel = panelRef.current?.contains(document.activeElement);
      closeMenu({ focusToggle: focusWasInPanel });
    };

    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, [mobileMenuOpen, closeMenu]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-white/80 bg-[#EEF2F6]/92 backdrop-blur-md ${
        isScrolled ? "shadow-neu-sm py-2.5" : "py-3.5"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="inline-flex flex-col justify-center rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
          aria-label={`${siteConfig.name} - Homepage`}
        >
          <span className="text-lg font-extrabold tracking-tight text-[#0F172A]">
            {siteConfig.name}<span className="text-[#4F46E5]">.</span>
          </span>
          <span className="text-[10px] font-semibold tracking-wider text-[#64748B] uppercase">
            Vapi, Gujarat · Web & Software
          </span>
        </Link>

        {/* Desktop Navigation — 4 Reduced Clean Links */}
        <nav
          className="hidden items-center gap-1.5 sm:flex bg-[#E8EEF5] p-1.5 rounded-2xl shadow-neu-inset-sm border border-[#CBD5E1]/40"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] ${
                  isActive
                    ? "bg-[#EEF2F6] text-[#4F46E5] shadow-neu-sm"
                    : "text-[#334155] hover:text-[#4F46E5] hover:bg-[#EEF2F6]/60"
                }`}
                aria-current={isActive ? "location" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Primary WhatsApp Action */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat directly on WhatsApp"
          >
            <Button
              variant="whatsapp"
              size="sm"
              className="gap-2 text-xs font-bold px-4"
            >
              <IconWhatsApp className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu toggle & quick chat */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-white bg-gradient-to-br from-[#10B981] to-[#059669] shadow-neu-whatsapp rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
            aria-label="Open WhatsApp conversation"
          >
            <IconWhatsApp className="w-4 h-4 text-white" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#0F172A] bg-[#EEF2F6] shadow-neu-sm border border-white/80 active:shadow-neu-pressed rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <IconX className="w-5 h-5" /> : <IconMenu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          ref={panelRef}
          id="mobile-navigation"
          className="sm:hidden border-b border-white/80 bg-[#EEF2F6] px-5 pt-3 pb-6 shadow-neu-lg"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => closeMenu()}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#0F172A] bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:text-[#4F46E5] active:shadow-neu-pressed transition-all"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 pt-3 border-t border-[#CBD5E1]/50 flex flex-col gap-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => closeMenu()}
                className="w-full"
              >
                <Button variant="whatsapp" className="w-full gap-2 font-bold">
                  <IconWhatsApp className="w-4 h-4 text-white" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
