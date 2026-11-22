"use client";

import { useState } from "react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { submitContactMessage } from "@/actions/contact";
import {
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconMapPin,
  IconCheck,
  IconSparkles,
} from "@/components/ui/icons";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ state: "idle", message: "" });

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append(
        "message",
        `[Business/Project Type: ${formState.businessType || "Not Specified"}]\n\n${formState.message}`
      );

      const result = await submitContactMessage(null, formData);

      if (result?.success) {
        setStatus({
          state: "success",
          message: "Thank you for reaching out! I will review your project details and get back to you promptly.",
        });
        setFormState({ name: "", email: "", businessType: "", message: "" });
      } else {
        setStatus({
          state: "error",
          message: result?.error || "There was an issue sending your message. Please reach out via WhatsApp.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "An unexpected error occurred. Please contact me directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      index="07"
      total="07"
      badge="Start a Conversation"
      title="Let's Build Something Together"
      description="Have a website project, industrial catalogue, or digital idea in mind? Reach out directly via WhatsApp for the fastest reply, or submit the project inquiry form below."
    >
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Direct WhatsApp & Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Primary WhatsApp Card */}
          <div className="rounded-3xl border border-[#F26A3D]/40 bg-white p-7 sm:p-8 shadow-soft space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F26A3D]">
                Recommended Channel
              </span>
              <Badge variant="tangerine">Fastest Reply</Badge>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#172C46]">
                Chat on WhatsApp
              </h3>
              <p className="text-sm text-[#626A73] leading-relaxed">
                Connect directly with Samir for a quick conversation regarding requirements, feasibility, and pricing.
              </p>
            </div>

            <div className="rounded-xl bg-[#F6F2E9] p-4 border border-[#E3DFD6] space-y-1 text-xs">
              <span className="text-[#858A91] block">Direct Number</span>
              <span className="text-base font-bold text-[#172C46]">
                {siteConfig.phoneFormatted}
              </span>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="primary" size="lg" className="w-full gap-2.5 font-bold shadow-md">
                <IconWhatsApp className="w-5 h-5 text-[#172C46]" />
                <span>Open WhatsApp Chat</span>
              </Button>
            </a>
          </div>

          {/* Secondary Direct Channels */}
          <Card className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#172C46]">
              Other Direct Channels
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[#172C46] hover:text-[#F26A3D] transition-colors p-2 rounded-lg hover:bg-[#F6F2E9]"
              >
                <div className="rounded-lg bg-[#E9E5F5] p-2 text-[#172C46]">
                  <IconMail className="w-4 h-4 text-[#F26A3D]" />
                </div>
                <div>
                  <span className="block text-xs text-[#858A91]">Email Inquiries</span>
                  <span className="font-semibold">{siteConfig.email}</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-[#172C46] hover:text-[#F26A3D] transition-colors p-2 rounded-lg hover:bg-[#F6F2E9]"
              >
                <div className="rounded-lg bg-[#E9E5F5] p-2 text-[#172C46]">
                  <IconPhone className="w-4 h-4 text-[#F26A3D]" />
                </div>
                <div>
                  <span className="block text-xs text-[#858A91]">Direct Phone Call</span>
                  <span className="font-semibold">{siteConfig.phoneFormatted}</span>
                </div>
              </a>
            </div>

            {/* Geographic Coverage */}
            <div className="pt-3 border-t border-[#E3DFD6] space-y-1.5 text-xs text-[#626A73]">
              <span className="font-bold text-[#172C46] flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-[#F26A3D]" />
                Service Areas:
              </span>
              <p>
                Available for meetings across Vapi, Vapi GIDC, Dungra, Pardi, Sarigam, Umbergaon, Silvassa, and Daman.
              </p>
            </div>
          </Card>
        </div>

        {/* Right Column: Project Inquiry Form */}
        <div className="lg:col-span-7">
          <Card className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#172C46]">
                Send a Project Inquiry
              </h3>
              <p className="mt-1 text-sm text-[#626A73]">
                Fill out the details below and I will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172C46]"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="e.g. Rajesh Patel"
                    className="w-full rounded-xl border border-[#E3DFD6] bg-[#F6F2E9]/60 px-4 py-2.5 text-sm text-[#172C46] placeholder-[#858A91] focus:bg-white focus:border-[#F26A3D] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#172C46]"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="rajesh@company.com"
                    className="w-full rounded-xl border border-[#E3DFD6] bg-[#F6F2E9]/60 px-4 py-2.5 text-sm text-[#172C46] placeholder-[#858A91] focus:bg-white focus:border-[#F26A3D] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-business-type"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172C46]"
                >
                  Business / Project Type
                </label>
                <select
                  id="contact-business-type"
                  value={formState.businessType}
                  onChange={(e) =>
                    setFormState({ ...formState, businessType: e.target.value })
                  }
                  className="w-full rounded-xl border border-[#E3DFD6] bg-[#F6F2E9]/60 px-4 py-2.5 text-sm text-[#172C46] focus:bg-white focus:border-[#F26A3D] focus:outline-none transition-colors"
                >
                  <option value="">Select your industry / project requirement</option>
                  <option value="Manufacturing / Industrial Website">
                    Manufacturing / Industrial Website (Vapi GIDC)
                  </option>
                  <option value="Healthcare / Clinic Website">
                    Healthcare / Clinic Website
                  </option>
                  <option value="Local Business Website">Local Business Website</option>
                  <option value="Website Redesign / Modernization">
                    Website Redesign / Modernization
                  </option>
                  <option value="E-Commerce / Product Catalogue">
                    E-Commerce / Product Catalogue
                  </option>
                  <option value="Custom Web Application">Custom Web Application</option>
                  <option value="AI Assistant / Automation">
                    AI Assistant / Automation
                  </option>
                  <option value="Other">Other Project</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172C46]"
                >
                  How Can I Help Your Business? *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Tell me a bit about your business, current website (if any), and what you would like to achieve..."
                  className="w-full rounded-xl border border-[#E3DFD6] bg-[#F6F2E9]/60 px-4 py-2.5 text-sm text-[#172C46] placeholder-[#858A91] focus:bg-white focus:border-[#F26A3D] focus:outline-none transition-colors"
                />
              </div>

              {/* Status Notice */}
              {status.state !== "idle" && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-4 rounded-xl text-xs font-medium ${
                    status.state === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-rose-50 text-rose-800 border border-rose-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full font-bold"
              >
                {isSubmitting ? "Sending Inquiry..." : "Submit Project Inquiry"}
              </Button>

              <p className="text-[11px] text-[#858A91] text-center">
                Your details are kept private and never shared.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
