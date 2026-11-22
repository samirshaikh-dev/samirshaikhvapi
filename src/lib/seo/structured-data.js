/**
 * Vapi freelance portfolio — Schema.org JSON-LD Structured Data Generators
 * Aligned with docs/SEO.MD §8 (Structured Data).
 *
 * Truthful information only. No invented street address, telephone number,
 * office hours, aggregate ratings, reviews, geographic coordinates, or client
 * count. Avoids misleading organization markup for an individual freelancer.
 */

import {
  APP_NAME,
  SITE_NAME,
  APP_TAGLINE,
  APP_DESCRIPTION,
  APP_URL,
  SUPPORT_EMAIL,
  SAME_AS_LINKS,
  OG_IMAGE_PATH,
} from "../../config/site";

export const SAME_AS = SAME_AS_LINKS;

export const BRAND_LOGO_PATH = "/icon.png";

function toAbsUrl(path = "") {
  if (!path) return APP_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${APP_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function toAbsImage(image = OG_IMAGE_PATH) {
  if (!image) return `${APP_URL}${OG_IMAGE_PATH}`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${APP_URL}${image.startsWith("/") ? image : `/${image}`}`;
}

/**
 * Long-tail, intent-rich search phrases for Vapi web development.
 * Strengthens GEO entity relationships and AI answer engine citations.
 */
export const LONGTAIL_KEYWORDS = [
  "website designer in Vapi",
  "freelance web developer in Vapi Gujarat",
  "website development services in Vapi",
  "industrial website development Vapi GIDC",
  "custom web application development Vapi",
  "business website design Vapi Gujarat",
  "AI chatbot development Vapi",
  "e-commerce website development Vapi",
  "website developer near Vapi GIDC",
  "clinic website design in Vapi",
  "school website development in Vapi",
  "workshop website design in Vapi",
];

/**
 * Voice-search and conversational questions (AEO), framed around problems
 * prospective Vapi business clients ask.
 */
export const VOICE_QUERIES = [
  "what is the best website designer in Vapi Gujarat",
  "how can I find a freelance web developer near Vapi GIDC",
  "where can I get industrial website development in Vapi",
  "how much does a business website cost in Vapi Gujarat",
  "who builds custom web applications in Vapi",
  "which developer makes e-commerce websites in Vapi",
  "is a freelance web developer in Vapi affordable for small business",
];

/**
 * Industries and business types served in Vapi and nearby areas
 * (docs/TARGET-CUSTOMER.md §3).
 */
export const INDUSTRIES_SERVED = [
  "Manufacturing & Industrial",
  "Healthcare & Clinics",
  "Educational Institutions",
  "Workshops & Service Businesses",
  "Retail & Commerce",
  "Startups & Growing Businesses",
];

/**
 * Core services offered by the freelance developer (docs/TARGET-CUSTOMER.md §3).
 */
export const SERVICES = [
  {
    id: "business-website",
    name: "Business Website Design",
    category: "Web Design",
    description:
      "Modern, professional websites for local businesses in Vapi and nearby areas — mobile-friendly, fast, and built to convert visitors into inquiries.",
    url: toAbsUrl("/services#business-website"),
  },
  {
    id: "industrial-website",
    name: "Industrial Website Development",
    category: "Web Development",
    description:
      "Product catalog websites and digital catalogs for Vapi GIDC manufacturers, engineering companies, and industrial suppliers.",
    url: toAbsUrl("/services#industrial-website"),
  },
  {
    id: "web-application",
    name: "Custom Web Application Development",
    category: "Web Applications",
    description:
      "Custom web applications, backend systems, and workflow automation for growing businesses and startups in Gujarat.",
    url: toAbsUrl("/services#web-application"),
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot Development",
    category: "AI & Automation",
    description:
      "Intelligent customer assistants that understand your business, for clinics, retailers, and service businesses in Vapi.",
    url: toAbsUrl("/services#ai-chatbot"),
  },
  {
    id: "ecommerce-website",
    name: "E-commerce Website Development",
    category: "E-commerce",
    description:
      "Online storefronts and product catalogs with convenient online inquiries for local retailers and distributors.",
    url: toAbsUrl("/services#ecommerce-website"),
  },
];

/**
 * Returns Root Graph JSON-LD array for layout / homepage.
 * Emits Person, WebSite, and ProfessionalService schemas with @id cross-references.
 *
 * Docs/SEO.MD §8: Person, WebSite, ProfessionalService or LocalService where eligible.
 * Avoids misleading organization markup for an individual freelancer — no
 * Organization node with invented address/phone/ratings.
 */
export function getRootJsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${APP_URL}#person`,
      name: SITE_NAME,
      jobTitle: "Freelance Website Developer & AI Developer",
      description: APP_DESCRIPTION,
      url: APP_URL,
      image: toAbsImage(BRAND_LOGO_PATH),
      email: SUPPORT_EMAIL,
      sameAs: SAME_AS,
      knowsAbout: INDUSTRIES_SERVED,
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vapi",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Vapi",
          addressRegion: "Gujarat",
          addressCountry: "IN",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${APP_URL}#website`,
      name: SITE_NAME,
      alternateName: APP_NAME,
      url: APP_URL,
      description: APP_DESCRIPTION,
      inLanguage: "en-IN",
      keywords: LONGTAIL_KEYWORDS.join(", "),
      publisher: {
        "@id": `${APP_URL}#person`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${APP_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${APP_URL}#service`,
      name: `${SITE_NAME} — Freelance Web Development`,
      alternateName: APP_NAME,
      description: APP_DESCRIPTION,
      url: APP_URL,
      image: toAbsImage(OG_IMAGE_PATH),
      serviceType: "Freelance Website Development & Digital Solutions",
      areaServed: [
        {
          "@type": "City",
          name: "Vapi",
        },
        {
          "@type": "City",
          name: "Dungra",
        },
        {
          "@type": "City",
          name: "Pardi",
        },
        {
          "@type": "City",
          name: "Sarigam",
        },
        {
          "@type": "City",
          name: "Umbergaon",
        },
        {
          "@type": "City",
          name: "Silvassa",
        },
        {
          "@type": "City",
          name: "Daman",
        },
      ],
      inLanguage: "en-IN",
      provider: {
        "@id": `${APP_URL}#person`,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Freelance Web Development Services",
        itemListElement: SERVICES.map((service) => ({
          "@type": "Service",
          name: service.name,
          serviceType: service.name,
          category: service.category,
          description: service.description,
          url: service.url,
          provider: {
            "@id": `${APP_URL}#person`,
          },
          areaServed: {
            "@type": "City",
            name: "Vapi",
          },
          inLanguage: "en-IN",
        })),
      },
    },
  ];
}

/**
 * BreadcrumbList Schema generator.
 * Keeps breadcrumb navigation visually and structurally synchronized.
 *
 * @param {Array<{ name: string; path: string }>} items - List of breadcrumb items
 */
export function getBreadcrumbsJsonLd(items = []) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsUrl(item.path),
    })),
  };
}

/**
 * FAQPage Schema generator for rich answer-engine optimization (AEO/GEO).
 * Only use when FAQs are actually rendered on the page.
 *
 * @param {Array<{ question: string; answer: string }>} faqs
 */
export function getFaqPageJsonLd(faqs = []) {
  if (!Array.isArray(faqs) || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-IN",
    mainEntity: faqs
      .filter((faq) => faq?.question && faq?.answer)
      .map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
  };
}

/**
 * WebPage schema with optional speakable
 */
export function getWebPageJsonLd({
  name,
  description,
  path,
  speakableSelectors = ["h1", "h2", "p"],
} = {}) {
  if (!name || !path) return null;
  const url = toAbsUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${APP_URL}#website` },
    about: { "@id": `${APP_URL}#person` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
}

/**
 * ContactPage Schema for /contact.
 *
 * `description` is passed in from the page's meta description so the structured
 * data and the meta description are one string. Truthful contact info only —
 * no invented phone number or street address (docs/SEO.MD §8).
 */
export function getContactPageJsonLd({ description } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${APP_URL}/contact#webpage`,
    name: `Contact ${SITE_NAME}`,
    url: toAbsUrl("/contact"),
    description:
      description ||
      `Contact ${SITE_NAME}, freelance website developer in Vapi, Gujarat, for business websites, web applications, and AI solutions.`,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${APP_URL}#website` },
    about: { "@id": `${APP_URL}#person` },
    mainEntity: {
      "@id": `${APP_URL}#person`,
      name: SITE_NAME,
      email: SUPPORT_EMAIL,
      url: APP_URL,
    },
  };
}

/**
 * AboutPage Schema for /about.
 *
 * `name` matches the visible `<h1>` and `description` is the same string as the
 * page's meta description, so the structured data cannot claim more than the
 * page says (docs/SEO.MD §15).
 */
export function getAboutPageJsonLd({ description } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${APP_URL}/about#webpage`,
    name: `About ${SITE_NAME}`,
    url: toAbsUrl("/about"),
    description:
      description ||
      `${SITE_NAME} is a freelance website developer based in Vapi, Gujarat, building modern business websites, industrial websites, web applications, and AI-powered experiences for growing businesses.`,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${APP_URL}#website` },
    about: { "@id": `${APP_URL}#person` },
    mainEntity: {
      "@id": `${APP_URL}#person`,
    },
  };
}

/**
 * CollectionPage + ItemList Schema for listings (services, projects, areas).
 */
export function getCollectionPageJsonLd({ name, description, path, items = [] } = {}) {
  if (!name || !path) return null;
  const validItems = Array.isArray(items) ? items.filter((i) => i?.name && i?.path) : [];

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: toAbsUrl(path),
    inLanguage: "en-IN",
    isPartOf: {
      "@id": `${APP_URL}#website`,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: validItems.length,
      itemListElement: validItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: toAbsUrl(item.path),
      })),
    },
  };
}

/**
 * SpeakableSpecification Schema for AI/Voice-search citation.
 */
export function getSpeakableJsonLd(cssSelector = ["h1", "h2", "p"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector,
    },
  };
}

/**
 * Serialize JSON-LD to a script tag string (useful for non-React injection contexts)
 */
export function getJsonLdScript(jsonLd) {
  if (!jsonLd) return "";
  const data = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const filtered = data.filter(Boolean);
  if (filtered.length === 0) return "";
  return `<script type="application/ld+json">${JSON.stringify(filtered.length === 1 ? filtered[0] : filtered).replace(/</g, "\\u003c")}</script>`;
}

/**
 * Merge multiple JSON-LD objects/arrays safely
 */
export function mergeJsonLd(...items) {
  const result = [];
  for (const item of items) {
    if (!item) continue;
    if (Array.isArray(item)) {
      result.push(...item.filter(Boolean));
    } else {
      result.push(item);
    }
  }
  return result;
}

const structuredData = {
  getRootJsonLd,
  getBreadcrumbsJsonLd,
  getFaqPageJsonLd,
  getWebPageJsonLd,
  getContactPageJsonLd,
  getAboutPageJsonLd,
  getCollectionPageJsonLd,
  getSpeakableJsonLd,
  getJsonLdScript,
  mergeJsonLd,
};

export default structuredData;
