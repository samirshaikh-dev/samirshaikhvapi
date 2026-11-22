import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch">
      <Card className="max-w-xl">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
          Let&apos;s collaborate on your next project
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Interested in working together or discussing system architecture? Reach out directly via email.
        </p>
        <div className="mt-6">
          <a href={`mailto:${siteConfig.email}`}>
            <Button variant="primary">Send an Email ({siteConfig.email})</Button>
          </a>
        </div>
      </Card>
    </Section>
  );
}
