/**
 * Target Industries & Customer Segments in Vapi and South Gujarat.
 * Source of truth: docs/TARGET-CUSTOMER.md §3 & §4.
 * Structure: Sound familiar? -> What we build -> What changes (Payoff).
 * Spelling: "enquiries" (Gujarat / British English local convention).
 */

export const industriesData = [
  {
    id: "manufacturing",
    name: "Manufacturing & Industrial",
    tag: "Factories & GIDC",
    locationScope: "Vapi GIDC, Sarigam, Umbergaon, Silvassa",
    icon: "factory",
    painHeadline: "Manual product sharing slows down your factory sales:",
    painCauses: [
      "Technical details trapped in heavy PDF brochures",
      "Buyers can't search grades, dimensions, or machinery capacity",
      "Staff waste hours answering basic specification calls",
    ],
    problem:
      "Valuable product information and capacity details trapped in static PDFs or shared manually over WhatsApp. Outdated websites make factories look smaller than they are to global buyers.",
    solution:
      "Modern industrial websites with **searchable product catalogues**, machine capacity showcases, and **one-tap quotation requests**.",
    keyFeature: "Direct RFQ forms & technical specification sheets",
    outcome: "Capture high-value corporate inquiries and RFQs from industrial buyers.",
    whatsappMessage: "Hi Samir, I want to discuss a website and product catalogue for my manufacturing business in Vapi",
  },
  {
    id: "healthcare",
    name: "Healthcare & Medical Clinics",
    tag: "Clinics & Doctors",
    locationScope: "Vapi, Dungra, Pardi, Daman",
    icon: "stethoscope",
    painHeadline: "Patients struggle to get quick answers during busy clinic hours:",
    painCauses: [
      "No clear consultation hours or doctor schedule online",
      "Phone lines constantly busy with appointment queries",
      "Patients looking for treatments move to other clinics",
    ],
    problem:
      "Patients struggle to find doctor consultation timings, available diagnostic facilities, or book appointments without calling multiple times during busy hours.",
    solution:
      "Clean, reassuring clinic websites with **doctor timings**, treatment lists, and **direct WhatsApp appointment booking**.",
    keyFeature: "Direct WhatsApp appointment booking & doctor profiles",
    outcome: "Fewer repetitive phone calls and easier appointment booking for patients.",
    whatsappMessage: "Hi Samir, I want to discuss a website and WhatsApp booking for my clinic in Vapi",
  },
  {
    id: "education",
    name: "Schools & Educational Institutes",
    tag: "Institutes & Academies",
    locationScope: "Vapi and surrounding Gujarat districts",
    icon: "graduation-cap",
    painHeadline: "Parents struggle to find course details and admission steps:",
    painCauses: [
      "Scattered course information and unorganized fee structures",
      "No easy way for parents to submit admission enquiries",
      "Outdated websites fail to showcase campus standards",
    ],
    problem:
      "Parents and prospective students cannot easily review course curriculum, fee structures, faculty credentials, or submit admission enquiry forms online.",
    solution:
      "Engaging institutional websites with **clear academic programs**, campus showcases, and **one-tap admission enquiry workflows**.",
    keyFeature: "Online admission enquiries & course prospectus access",
    outcome: "Boost admission enquiries and showcase your academic standards with pride.",
    whatsappMessage: "Hi Samir, I want to discuss a website for our school / educational institute in Vapi",
  },
  {
    id: "workshops",
    name: "Workshops & Service Businesses",
    tag: "Repairs & Services",
    locationScope: "Vapi GIDC, Dungra, Pardi",
    icon: "wrench",
    painHeadline: "Relying purely on word of mouth limits your customer reach:",
    painCauses: [
      "Local clients can't find your location or rates when searching on mobile",
      "No emergency contact button when repairs are needed urgently",
      "No showcase of past work to prove expertise",
    ],
    problem:
      "Heavy reliance on word of mouth; potential local clients cannot find service rates, workshop location, or emergency contact options when searching on mobile.",
    solution:
      "Fast, high-converting service websites highlighting **proven repair expertise**, customer reviews, and **instant click-to-call or WhatsApp directions**.",
    keyFeature: "One-tap emergency call & WhatsApp location pin",
    outcome: "Attract nearby customers needing urgent repairs and regular service contracts.",
    whatsappMessage: "Hi Samir, I want to build a website for my workshop / service business in Vapi",
  },
  {
    id: "retail",
    name: "Retail, Showrooms & Wholesale",
    tag: "Retail & Wholesale",
    locationScope: "Vapi, Silvassa, Daman",
    icon: "shopping-bag",
    painHeadline: "Customers only see what you sell when they physically visit:",
    painCauses: [
      "No online catalogue for new arrivals or seasonal inventory",
      "Clients constantly ask for photos and prices individually on WhatsApp",
      "Wholesale buyers unable to browse bulk pricing easily",
    ],
    problem:
      "Local shop owners and distributors miss out on orders because customers cannot browse current inventory, new arrivals, or enquire about bulk pricing digitally.",
    solution:
      "Visual digital catalogues with **clear product photos**, price enquiry buttons, and **instant WhatsApp order creation**.",
    keyFeature: "Product catalogue with instant WhatsApp order generation",
    outcome: "Let customers browse your inventory anytime and send orders straight to your WhatsApp.",
    whatsappMessage: "Hi Samir, I want to create a digital product catalogue for my shop / showroom in Vapi",
  },
  {
    id: "startups",
    name: "Founders & Growing Businesses",
    tag: "Founders & Startups",
    locationScope: "Gujarat & Remote Collaborations",
    icon: "rocket",
    painHeadline: "Big agencies move slow, charge retainers, and add bureaucracy:",
    painCauses: [
      "Weeks spent waiting for minor design tweaks and feedback",
      "Junior contractors doing the actual implementation work",
      "Bloated estimates for simple, necessary features",
    ],
    problem:
      "Need a modern digital launch, custom SaaS architecture, or workflow automation without the massive overhead and slow delivery of big agencies.",
    solution:
      "Direct engineering collaboration to build **custom web apps, client portals, and automation tools** with zero agency fluff.",
    keyFeature: "Modern Next.js 16 architecture, custom databases & APIs",
    outcome: "Launch your application faster, keep full code ownership, and work directly with the builder.",
    whatsappMessage: "Hi Samir, I'm a founder and want to discuss building a custom web application",
  },
];
