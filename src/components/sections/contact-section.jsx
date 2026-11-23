"use client";

import { useState } from "react";
import { Section } from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl, formatInquiryMessage } from "@/lib/whatsapp";
import {
  IconWhatsApp,
  IconPhone,
  IconMail,
  IconMapPin,
} from "@/components/ui/icons";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });
  const [preparedUrl, setPreparedUrl] = useState("");

  const handleChange = (field) => (e) => {
    setFormState((prev) => ({ ...prev, [field]: e.target.value }));
    setPreparedUrl("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = formatInquiryMessage(formState);
    const url = buildWhatsAppUrl(siteConfig.whatsappNumber, message);

    window.open(url, "_blank", "noopener,noreferrer");

    setPreparedUrl(url);
    setFormState({ name: "", email: "", businessType: "", message: "" });
  };

  return (
    <Section
      id="contact"
      index="07"
      total="07"
      badge="Start a Conversation"
      title="Let's Build Something Together"
      description="Have a website project, industrial catalogue, or digital idea in mind? Fill in the form below and it will open WhatsApp with your inquiry ready to send."
    >
      <div className="grid gap-10 lg:grid-cols-12 items-start">
        {/* Left Column: Direct WhatsApp & Contact Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Primary WhatsApp Card */}
          <div className="rounded-3xl border border-white/85 bg-[#EEF2F6] p-7 sm:p-8 shadow-neu-floating space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                Recommended Channel
              </span>
              <Badge variant="whatsapp">Fastest Reply</Badge>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Chat on WhatsApp
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Connect directly with Samir for a quick conversation regarding requirements, feasibility, and pricing.
              </p>
            </div>

            <div className="rounded-2xl bg-[#E8EEF5] p-4 border border-[#CBD5E1]/40 shadow-neu-inset-sm space-y-1 text-xs">
              <span className="text-[#64748B] block font-semibold">Direct Number</span>
              <span className="text-base font-bold text-[#0F172A]">
                {siteConfig.phoneFormatted}
              </span>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="whatsapp" size="lg" className="w-full gap-2.5 font-bold">
                <IconWhatsApp className="w-5 h-5 text-white" />
                <span>Open WhatsApp Chat</span>
              </Button>
            </a>
          </div>

          {/* Secondary Direct Channels */}
          <Card variant="raised" className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#0F172A]">
              Other Direct Channels
            </h4>

            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[#0F172A] hover:text-[#4F46E5] transition-all p-3 rounded-2xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:shadow-neu active:shadow-neu-pressed"
              >
                <div className="rounded-xl bg-[#E8EEF5] p-2 text-[#4F46E5] shadow-neu-inset-sm border border-[#CBD5E1]/40">
                  <IconMail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#64748B] font-medium">Email Inquiries</span>
                  <span className="font-semibold">{siteConfig.email}</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 text-[#0F172A] hover:text-[#4F46E5] transition-all p-3 rounded-2xl bg-[#EEF2F6] shadow-neu-sm border border-white/80 hover:shadow-neu active:shadow-neu-pressed"
              >
                <div className="rounded-xl bg-[#E8EEF5] p-2 text-[#4F46E5] shadow-neu-inset-sm border border-[#CBD5E1]/40">
                  <IconPhone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-[#64748B] font-medium">Direct Phone Call</span>
                  <span className="font-semibold">{siteConfig.phoneFormatted}</span>
                </div>
              </a>
            </div>

            {/* Geographic Coverage */}
            <div className="pt-3 border-t border-[#CBD5E1]/40 space-y-1.5 text-xs text-[#475569]">
              <span className="font-bold text-[#0F172A] flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-[#4F46E5]" />
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
          <Card variant="raised" className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">
                Send a Project Inquiry
              </h3>
              <p className="mt-1 text-sm text-[#475569]">
                Fill in your details and I will get back to you on WhatsApp, usually within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={handleChange("name")}
                    placeholder="e.g. Rajesh Patel"
                    className="w-full rounded-2xl border border-[#CBD5E1]/50 bg-[#E8EEF5] px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-neu-inset focus:bg-[#EEF2F6] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                  >
                    Your Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={handleChange("email")}
                    placeholder="rajesh@company.com"
                    className="w-full rounded-2xl border border-[#CBD5E1]/50 bg-[#E8EEF5] px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-neu-inset focus:bg-[#EEF2F6] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-business-type"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                >
                  Business / Project Type
                </label>
                <select
                  id="contact-business-type"
                  value={formState.businessType}
                  onChange={handleChange("businessType")}
                  className="w-full rounded-2xl border border-[#CBD5E1]/50 bg-[#E8EEF5] px-4 py-3 text-sm text-[#0F172A] shadow-neu-inset focus:bg-[#EEF2F6] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
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
                  className="block text-xs font-bold uppercase tracking-wider text-[#0F172A]"
                >
                  How Can I Help Your Business? *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange("message")}
                  placeholder="Tell me a bit about your business, current website (if any), and what you would like to achieve..."
                  className="w-full rounded-2xl border border-[#CBD5E1]/50 bg-[#E8EEF5] px-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] shadow-neu-inset focus:bg-[#EEF2F6] focus:border-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 transition-all"
                />
              </div>

              {/* Live region stays in the DOM so the result is announced. */}
              <div
                role="status"
                aria-live="polite"
                className={
                  preparedUrl
                    ? "p-4 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-neu-sm space-y-2 text-xs font-semibold"
                    : ""
                }
              >
                {preparedUrl && (
                  <>
                    <p>Your inquiry is ready in WhatsApp. Please tap Send there to complete your request.</p>
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline underline-offset-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700"
                    >
                      <IconWhatsApp className="w-3.5 h-3.5" />
                      Open WhatsApp with my inquiry
                    </a>
                  </>
                )}
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full font-bold gap-2.5"
              >
                <IconWhatsApp className="w-5 h-5 text-white" />
                Send Inquiry on WhatsApp
              </Button>

              <p className="text-[11px] text-[#64748B] text-center font-medium">
                Your details are used only to prepare your WhatsApp message.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
}
