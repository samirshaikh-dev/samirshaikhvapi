import { siteConfig } from "@/config/site";
import { Container } from "./container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200/80 bg-zinc-50/50 py-8 dark:border-zinc-800/80 dark:bg-zinc-950/50">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-zinc-500 dark:text-zinc-400">
        <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </Container>
    </footer>
  );
}
