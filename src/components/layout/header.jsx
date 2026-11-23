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

  // One observer drives the active state for all seven in-page links.
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

  const handleDrawerLinkClick = (href) => {
    setMobileMenuOpen(false);
    requestAnimationFrame(() => {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else {
        toggleRef.current?.focus();
      }
    });
  };

  const navLinkProps = (item) => ({
    "aria-current": activeHref === item.href ? "location" : undefined,
  });

  return (
    <header
      className={`site-header sticky top-0 z-50 w-full border-b border-[var(--border-soft)] bg-[var(--surface-canvas)] ${
        isScrolled ? "surface-raised-sm" : ""
      }`}
    >
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex min-h-11 flex-col justify-center rounded-[var(--radius-control)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--midnight)]"
          aria-label={`${siteConfig.name} - Homepage`}
        >
          <span className="text-base font-bold tracking-tight text-[var(--text-primary)] sm:text-lg">
            {siteConfig.name}
          </span>
          <span className="hidden text-[11px] font-medium tracking-wider text-[var(--text-secondary)] uppercase lg:block">
            Vapi, Gujarat · Independent Developer
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 sm:flex lg:gap-2"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-2 text-[11px] font-semibold lg:px-3 lg:text-sm"
              {...navLinkProps(item)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Button
            as="a"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="lavender"
            size="sm"
            className="ui-icon-button lg:hidden"
            aria-label="WhatsApp Us — chat directly with Samir"
          >
            <IconWhatsApp className="h-5 w-5 text-[var(--midnight)]" />
          </Button>
          <Button
            as="a"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="lavender"
            size="sm"
            className="hidden gap-2 lg:inline-flex"
            aria-label="WhatsApp Us — chat directly with Samir"
          >
            <IconWhatsApp className="h-4 w-4 text-[var(--midnight)]" />
            <span>WhatsApp Us</span>
          </Button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <Button
            as="a"
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="lavender"
            size="sm"
            className="ui-icon-button"
            aria-label="WhatsApp Us — chat directly with Samir"
          >
            <IconWhatsApp className="h-5 w-5 text-[var(--midnight)]" />
          </Button>
          <Button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            variant="ghost"
            size="sm"
            className="ui-icon-button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <IconX className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </Container>

      <div
        id="mobile-navigation"
        ref={panelRef}
        hidden={!mobileMenuOpen}
        className="mobile-panel sm:hidden"
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col px-4 py-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleDrawerLinkClick(item.href)}
              className="nav-link w-full justify-start text-base"
              {...navLinkProps(item)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border-soft)] pt-4">
            <Button
              as="a"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => closeMenu({ focusToggle: true })}
              variant="primary"
              className="w-full gap-2"
            >
              <IconWhatsApp className="h-5 w-5 text-[var(--midnight)]" />
              <span>Start WhatsApp Conversation</span>
            </Button>
            <Button
              as="a"
              href={`tel:${siteConfig.phone}`}
              onClick={() => closeMenu({ focusToggle: true })}
              variant="secondary"
              className="w-full"
            >
              Call {siteConfig.phoneFormatted}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
