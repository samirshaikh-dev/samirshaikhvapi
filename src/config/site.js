import { APP_CONFIG, NAV_LINKS } from "@/lib/constants";

export const siteConfig = {
  ...APP_CONFIG,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://samirshaikh.dev",
  ogImage: "/og.png",
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  navItems: NAV_LINKS,
};
