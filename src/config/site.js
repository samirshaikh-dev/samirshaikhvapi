import { APP_CONFIG, NAV_LINKS } from "@/lib/constants";

export const APP_NAME = APP_CONFIG.name;
export const SITE_NAME = APP_CONFIG.name;
export const APP_TAGLINE = APP_CONFIG.tagline;
export const APP_DESCRIPTION = APP_CONFIG.description;
export const APP_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://samirshaikh.dev";
export const SUPPORT_EMAIL = APP_CONFIG.email;
export const PHONE_NUMBER = APP_CONFIG.phone;
export const WHATSAPP_URL = APP_CONFIG.whatsappUrl;
export const TWITTER_HANDLE = undefined;
export const GOOGLE_SITE_VERIFICATION = undefined;
export const BING_SITE_VERIFICATION = undefined;
export const OG_IMAGE_PATH = "/og-image.png";
export const SAME_AS_LINKS = [
  APP_CONFIG.githubUrl,
  APP_CONFIG.linkedinUrl,
  APP_CONFIG.instagramUrl,
  APP_CONFIG.technicalPortfolioUrl,
];

export const siteConfig = {
  name: APP_NAME,
  title: APP_CONFIG.title,
  tagline: APP_TAGLINE,
  description: APP_DESCRIPTION,
  email: SUPPORT_EMAIL,
  phone: PHONE_NUMBER,
  phoneFormatted: APP_CONFIG.phoneFormatted,
  whatsappNumber: APP_CONFIG.whatsappNumber,
  whatsappUrl: WHATSAPP_URL,
  location: APP_CONFIG.location,
  coverageAreas: APP_CONFIG.coverageAreas,
  url: APP_URL,
  ogImage: OG_IMAGE_PATH,
  links: {
    github: APP_CONFIG.githubUrl,
    linkedin: APP_CONFIG.linkedinUrl,
    instagram: APP_CONFIG.instagramUrl,
    technicalPortfolio: APP_CONFIG.technicalPortfolioUrl,
  },
  navItems: NAV_LINKS,
};

export default siteConfig;
