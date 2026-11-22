/**
 * Target Industries & Customer Segments in Vapi and South Gujarat.
 * Source of truth: docs/TARGET-CUSTOMER.md §3 & §4.
 */

export const industriesData = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    locationScope: "Vapi GIDC, Sarigam, Umbergaon, Silvassa",
    icon: "factory",
    problem:
      "Valuable product information and capacity details trapped in static PDFs or shared manually over WhatsApp. Outdated websites make factories look smaller than they are to global buyers.",
    solution:
      "Modern industrial websites featuring organized product catalogues, machine capability showcases, and instant quotation request workflows.",
    keyFeature: "Direct RFQ forms & technical specification sheets",
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    locationScope: "Vapi, Dungra, Pardi, Daman",
    icon: "stethoscope",
    problem:
      "Patients struggle to find doctor consultation timings, available diagnostic facilities, or book appointments without calling multiple times during busy hours.",
    solution:
      "Clean, reassuring healthcare websites with clear doctor profiles, clinic facilities, service lists, and seamless WhatsApp appointment booking.",
    keyFeature: "Direct WhatsApp appointment booking & doctor profiles",
  },
  {
    id: "education",
    name: "Schools & Educational Institutes",
    locationScope: "Vapi and surrounding Gujarat districts",
    icon: "graduation-cap",
    problem:
      "Parents and prospective students cannot easily review course curriculum, fee structures, faculty credentials, or submit admission inquiry forms online.",
    solution:
      "Vibrant institutional websites with organized academic programs, campus photo showcases, and streamlined admission inquiry channels.",
    keyFeature: "Online admission inquiries & course prospectus access",
  },
  {
    id: "workshops",
    name: "Workshops & Service Businesses",
    locationScope: "Vapi GIDC, Dungra, Pardi",
    icon: "wrench",
    problem:
      "Heavy reliance on word of mouth; potential local clients cannot find service rates, workshop location, or emergency contact options when searching on mobile.",
    solution:
      "High-converting service websites highlighting expertise, past repair work, customer reviews, and direct click-to-call / WhatsApp dispatch.",
    keyFeature: "One-tap emergency call & WhatsApp location pin",
  },
  {
    id: "retail",
    name: "Retail, Showrooms & Wholesale",
    locationScope: "Vapi, Silvassa, Daman",
    icon: "shopping-bag",
    problem:
      "Local shop owners and distributors miss out on orders because customers cannot browse current inventory, new arrivals, or enquire about bulk pricing digitally.",
    solution:
      "Fast digital catalogues with rich product photos, price inquiry buttons, and automated WhatsApp order lists.",
    keyFeature: "Product catalogue with instant WhatsApp order generation",
  },
  {
    id: "startups",
    name: "Founders & Growing Businesses",
    locationScope: "Gujarat & Remote Collaborations",
    icon: "rocket",
    problem:
      "Need a modern digital launch, custom SaaS architecture, or workflow automation without the massive overhead and slow delivery of big agencies.",
    solution:
      "Rapidly deployed Next.js web applications, client portals, and AI-assisted workflows built cleanly from day one.",
    keyFeature: "Scalable Next.js 16 App Router architecture & APIs",
  },
];
