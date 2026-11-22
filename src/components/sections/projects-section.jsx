import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/config/site";
import {
  IconCheck,
  IconArrowUpRight,
  IconWhatsApp,
  IconSparkles,
  IconMapPin,
} from "@/components/ui/icons";

export function ProjectsSection() {
  const featuredProject = projectsData.find((p) => p.id === "sahara-tyre") || projectsData[0];
  const otherProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  return (
    <Section
      id="projects"
      badge="Selected Work"
      title="Selected Projects"
      description="Real digital experiences delivered with a focus on business utility, clean architecture, and verifiable results."
    >
      <div className="space-y-10 sm:space-y-12">
        {/* HERO SHOWCASE: Sahara Tyre (Prominently featured per PROJECT-CONTEXT.md §5) */}
        <div className="rounded-3xl border border-[#E3DFD6] bg-white p-7 sm:p-10 shadow-soft relative overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="tangerine">Local Vapi Business Showcase</Badge>
                <Badge variant="ivory">
                  <IconMapPin className="w-3 h-3 text-[#F26A3D]" />
                  <span>Vapi, Gujarat</span>
                </Badge>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#172C46]">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#F26A3D] mt-0.5">
                  {featuredProject.tagline}
                </p>
              </div>

              <p className="text-base text-[#626A73] leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {featuredProject.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#172C46]">
                    <IconCheck className="w-4 h-4 text-[#F26A3D] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tags & Action */}
              <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-[#E3DFD6]">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="primary" size="md" className="gap-2">
                    <span>Visit Live Website</span>
                    <IconArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>

                <a
                  href={`https://wa.me/918320927182?text=${encodeURIComponent(
                    "Hi Samir! I saw the Sahara Tyre website you built and would like a similar digital platform for my business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="secondary" size="md" className="gap-2">
                    <IconWhatsApp className="w-4 h-4 text-[#F26A3D]" />
                    <span>Inquire About Similar Project</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Preview Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#E3DFD6] bg-[#F6F2E9] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E3DFD6]">
                  <span className="text-xs font-bold text-[#172C46]">
                    Digital Catalogue Interface
                  </span>
                  <span className="text-xs text-[#858A91]">Live Demo</span>
                </div>

                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border border-[#E3DFD6] shadow-2xs">
                    <span className="text-[11px] text-[#858A91] block">Category Exploration</span>
                    <span className="text-sm font-bold text-[#172C46]">Passenger, SUV & Heavy Commercial Tyres</span>
                    <div className="mt-2 flex gap-1.5 flex-wrap">
                      <span className="text-[10px] bg-[#E9E5F5] text-[#172C46] px-2 py-0.5 rounded-full font-medium">175/65 R14</span>
                      <span className="text-[10px] bg-[#E9E5F5] text-[#172C46] px-2 py-0.5 rounded-full font-medium">185/65 R15</span>
                      <span className="text-[10px] bg-[#E9E5F5] text-[#172C46] px-2 py-0.5 rounded-full font-medium">215/60 R16</span>
                      <span className="text-[10px] bg-[#F6F2E9] text-[#626A73] px-2 py-0.5 rounded-full">+54 more</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-[#E3DFD6] shadow-2xs flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#858A91] block">Customer Action</span>
                      <span className="text-xs font-bold text-[#172C46]">Direct WhatsApp Quote Dispatch</span>
                    </div>
                    <span className="h-8 w-8 rounded-full bg-[#F26A3D] text-[#172C46] flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-center text-[#858A91] pt-1">
                  Built specifically to eliminate messy PDF sharing and manual price inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING PROJECTS GRID */}
        <div>
          <h3 className="text-lg font-bold text-[#172C46] mb-6">
            More Engineering & Business Platforms
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="flex flex-col justify-between group hover:border-[#172C46]/30 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F26A3D]">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors mt-0.5">
                        {project.title}
                      </h4>
                    </div>
                    {project.liveUrl && (
                      <Badge variant="ivory" className="text-[11px]">
                        Live Demo
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-[#626A73] leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#172C46] pt-1">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <IconCheck className="w-3.5 h-3.5 text-[#F26A3D] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[#EEEAE1] px-2 py-0.5 text-[11px] font-medium text-[#172C46]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer link */}
                <div className="pt-5 mt-5 border-t border-[#E3DFD6] flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors"
                    >
                      <span>Explore Live Application</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172C46] group-hover:text-[#F26A3D] transition-colors"
                    >
                      <span>View Architecture on GitHub</span>
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-[#858A91]">Proprietary Business System</span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Portfolio Callout (Docs/PROJECT-CONTEXT.md §9) */}
        <div className="rounded-2xl border border-[#E3DFD6] bg-[#EEEAE1]/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-[#172C46]">
              Looking for deep technical case studies & engineering architecture?
            </h4>
            <p className="text-xs sm:text-sm text-[#626A73]">
              Visit my comprehensive developer portfolio for microservice details, GraphQL DataLoader metrics, and open-source contributions.
            </p>
          </div>
          <a
            href={siteConfig.links.technicalPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
          >
            <Button variant="secondary" size="md" className="gap-2 font-medium">
              <span>View Technical Portfolio</span>
              <IconArrowUpRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}
