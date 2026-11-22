import { APP_CONFIG, NAV_LINKS } from "@/lib/constants";

export const APP_NAME = APP_CONFIG.name;
export const SITE_NAME = APP_CONFIG.name;
export const APP_TAGLINE = "Freelance Website Developer & Digital Solutions in Vapi, Gujarat";
export const APP_DESCRIPTION =
  "Looking for a website developer in Vapi? I build modern business websites, industrial websites, web applications and AI-powered experiences for growing businesses.";
export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://samirshaikh.dev";
export const SUPPORT_EMAIL = "shaikh.samir.work@gmail.com";
export const TWITTER_HANDLE = undefined;
export const GOOGLE_SITE_VERIFICATION = undefined;
export const BING_SITE_VERIFICATION = undefined;
export const OG_IMAGE_PATH = "/og.png";
export const SAME_AS_LINKS = [
  "https://github.com/samirshaikh-dev",
  "https://www.linkedin.com/in/samirshaikh-dev/",
  "https://www.instagram.com/samirshaikh_78/",
];

export const siteConfig = {
  name: APP_NAME,
  title: APP_CONFIG.title,
  description: APP_DESCRIPTION,
  email: SUPPORT_EMAIL,
  location: APP_CONFIG.location,
  url: APP_URL,
  ogImage: OG_IMAGE_PATH,
  links: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  navItems: NAV_LINKS,
};

export default siteConfig;
