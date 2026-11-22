import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-black/80">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 sm:flex" aria-label="Main Navigation">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
