import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container className="flex flex-col items-start gap-6">
        <Badge className="bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          Available for new opportunities
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-zinc-900 dark:text-zinc-50">
          Building resilient, scalable web architectures.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Hi, I&apos;m <span className="font-semibold text-zinc-900 dark:text-zinc-100">{siteConfig.name}</span>. {siteConfig.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link href="#projects">
            <Button variant="primary">View Work</Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Get in Touch</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
