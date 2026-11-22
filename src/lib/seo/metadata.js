/**
 * meelTe — wait, no. This is the Vapi freelance portfolio (Samir Shaikh).
 * Global SEO Metadata & Viewport Configurations
 * Aligned with Next.js 16 App Router metadata standards and docs/SEO.MD.
 *
 * Truthful information only. No invented addresses, phone numbers, ratings,
 * reviews, or geographic coordinates (docs/SEO.MD §8, §15).
 */

import {
  APP_NAME,
  SITE_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  APP_URL,
  SUPPORT_EMAIL,
  TWITTER_HANDLE,
  GOOGLE_SITE_VERIFICATION,
  BING_SITE_VERIFICATION,
} from "../../config/site";

/**
 * Canonical social share card.
 * Placeholder — replace `public/og-image.png` with a real 1200×630 image.
 */
export const OG_IMAGE_PATH = "/og-image.png";
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/**
 * Normalize a path to a canonical absolute URL
 * @param {string} path
 */
function toAbsoluteUrl(path = "") {
  if (!path) return APP_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${APP_URL}${normalized}`;
}

/**
 * Normalize an image to an absolute URL
 * @param {string} image
 */
function toAbsoluteImage(image = OG_IMAGE_PATH) {
  if (!image) return `${APP_URL}${OG_IMAGE_PATH}`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  const normalized = image.startsWith("/") ? image : `/${image}`;
  return `${APP_URL}${normalized}`;
}

/**
 * Primary + secondary local keywords for Vapi, Gujarat (docs/SEO.MD §3).
 * Deduped at render time in buildPageMetadata.
 */
export const PRIMARY_KEYWORDS = [
  "website designer in Vapi",
  "website development in Vapi",
  "freelance web developer in Vapi",
  "website design in Vapi Gujarat",
  "web development services in Vapi",
];

export const SECONDARY_KEYWORDS = [
  "business website design in Vapi",
  "industrial website development in Vapi",
  "website redesign in Vapi",
  "e-commerce website development in Vapi",
  "custom web application development in Vapi",
  "AI chatbot development in Vapi",
  "website developer near Vapi GIDC",
  "manufacturing website design in Vapi",
  "industrial company website development",
  "clinic website design in Vapi",
  "school website development in Vapi",
  "workshop website design in Vapi",
  "business website development in Gujarat",
];

/**
 * Root site metadata configuration for Next.js App Router (src/app/layout.js)
 * @type {import('next').Metadata}
 */
export const metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Website Designer & Freelance Web Developer in Vapi, Gujarat | Samir",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Looking for a website developer in Vapi? I build modern business websites, industrial websites, web applications and AI-powered experiences for growing businesses.",
  keywords: [...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS],
  authors: [{ name: SITE_NAME, url: APP_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Website Design & Web Development",
  applicationName: APP_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...((GOOGLE_SITE_VERIFICATION || BING_SITE_VERIFICATION) && {
    verification: {
      ...(GOOGLE_SITE_VERIFICATION && { google: GOOGLE_SITE_VERIFICATION }),
      ...(BING_SITE_VERIFICATION && { other: { "msvalidate.01": BING_SITE_VERIFICATION } }),
    },
  }),
  openGraph: {
    title: `${SITE_NAME} — ${APP_TAGLINE}`,
    description:
      "Looking for a website developer in Vapi? I build modern business websites, industrial websites, web applications and AI-powered experiences for growing businesses.",
    url: APP_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: toAbsoluteImage(OG_IMAGE_PATH),
        ...OG_IMAGE_SIZE,
        alt: `${SITE_NAME} — ${APP_TAGLINE}`,
      },
    ],
    type: "website",
    locale: "en_IN",
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${APP_TAGLINE}`,
    description:
      "Looking for a website developer in Vapi? I build modern business websites, industrial websites, web applications and AI-powered experiences for growing businesses.",
    images: [toAbsoluteImage(OG_IMAGE_PATH)],
    creator: TWITTER_HANDLE || undefined,
    site: TWITTER_HANDLE || undefined,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
  manifest: "/manifest.webmanifest",
};

/**
 * Root site viewport configuration for Next.js App Router
 * @type {import('next').Viewport}
 */
export const viewport = {
  themeColor: "#172C46",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

/**
 * Reusable helper to build contextual, canonical page-level metadata.
 *
 * @param {Object} options
 * @param {string} options.title - Page title (suffixed with " | Samir Shaikh" by Next.js template)
 * @param {string} [options.description] - Page meta description
 * @param {string} [options.path] - Route path (e.g. "/about", "/contact")
 * @param {string[]} [options.keywords] - Additional contextual keywords
 * @param {string} [options.image] - Custom OpenGraph image URL
 * @param {string} [options.markdown] - Path of this page's markdown representation
 * @param {boolean} [options.noIndex] - Whether to disallow search indexing
 * @param {"website"|"article"} [options.type="website"] - OpenGraph type
 * @param {string[]} [options.authors] - Author names for article pages
 * @param {string} [options.publishedTime] - ISO 8601 publish time for articles
 * @param {string} [options.modifiedTime] - ISO 8601 modify time for articles
 * @param {import('next').Metadata["robots"]} [options.robots] - Override robots directive
 * @returns {import('next').Metadata}
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = OG_IMAGE_PATH,
  markdown,
  noIndex = false,
  type = "website",
  authors = [],
  publishedTime,
  modifiedTime,
  robots,
} = {}) {
  const pageUrl = toAbsoluteUrl(path);
  const pageTitle = title || `${SITE_NAME} — ${APP_TAGLINE}`;
  const ogImage = toAbsoluteImage(image);

  const mergedKeywords = Array.from(
    new Set([...PRIMARY_KEYWORDS, ...SECONDARY_KEYWORDS, ...(keywords || [])].filter(Boolean))
  );

  const baseRobots = noIndex
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true };

  return {
    title: pageTitle,
    description: description || APP_DESCRIPTION,
    ...(mergedKeywords.length > 0 && { keywords: mergedKeywords }),
    alternates: {
      canonical: pageUrl,
      ...(markdown && {
        types: { "text/markdown": toAbsoluteUrl(markdown) },
      }),
    },
    openGraph: {
      title: pageTitle,
      description: description || APP_DESCRIPTION,
      url: pageUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          ...OG_IMAGE_SIZE,
          alt: pageTitle,
        },
      ],
      type,
      locale: "en_IN",
      countryName: "India",
      ...(type === "article" && {
        ...(publishedTime && { publishedTime }),
        ...(modifiedTime && { modifiedTime }),
        ...(authors.length > 0 && { authors }),
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: description || APP_DESCRIPTION,
      images: [ogImage],
      creator: TWITTER_HANDLE || undefined,
      site: TWITTER_HANDLE || undefined,
    },
    ...(authors.length > 0 && { authors: authors.map((name) => ({ name })) }),
    robots: robots || baseRobots,
  };
}

/**
 * Build metadata for blog/article pages with proper article schema signals
 */
export function buildArticleMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = OG_IMAGE_PATH,
  markdown,
  authors = [SITE_NAME],
  publishedTime,
  modifiedTime,
  noIndex = false,
} = {}) {
  return buildPageMetadata({
    title,
    description,
    path,
    keywords,
    image,
    markdown,
    noIndex,
    type: "article",
    authors,
    publishedTime,
    modifiedTime,
  });
}

/**
 * Build metadata for collection/listing pages (services, projects, areas)
 */
export function buildCollectionMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = OG_IMAGE_PATH,
  markdown,
  noIndex = false,
} = {}) {
  return buildPageMetadata({
    title,
    description,
    path,
    keywords,
    image,
    markdown,
    noIndex,
    type: "website",
  });
}

export default metadata;
