/**
 * Real Solutions Built & Case Studies.
 * Source: convert.txt §4.5 ("Selected Work / Case Studies") & §3 ("Messaging Transformation").
 * Structure: Client's Problem -> Solution Implemented -> Verified Business Outcome -> Supporting Stack.
 */

export const projectsData = [
  {
    id: "sahara-tyre",
    title: "Sahara Tyre Platform",
    tagline: "Automotive Digital Storefront & WhatsApp Quotation System",
    category: "Commercial Digital Storefront",
    location: "Vapi, Gujarat",
    clientProblem:
      "A prominent Vapi automotive business was fielding dozens of repetitive daily calls asking for tyre sizes, brands, and price estimates. Sharing fragmented PDF price sheets over WhatsApp was slow and lost potential buyers.",
    solutionImplemented:
      "Designed and developed a fast, mobile-first web catalogue indexing 57+ passenger, SUV, and commercial tyre sizes with instant WhatsApp inquiry routing pre-filled with the exact tyre model.",
    businessOutcome:
      "Replaced cumbersome manual PDF lookups with a 24/7 self-service digital catalogue that delivers pre-qualified buyer inquiries straight to WhatsApp.",
    highlights: [
      "57+ tyre sizes catalogued across Passenger, SUV, and Commercial",
      "One-tap WhatsApp RFQ buttons pre-filled with tyre specifications",
      "Optimized for sub-second loading on local mobile networks",
      "Clean local SEO setup for Vapi tyre and automotive searches",
    ],
    liveUrl: "https://sahara-tyre.vercel.app/",
    caseStudyUrl: "https://samir-portfolio-dev.vercel.app/",
    tags: ["Next.js", "React", "Local Business", "WhatsApp Workflow", "Automotive"],
    featured: true,
    isLocalVapi: true,
    ctaText: "Inquire About a Similar Storefront",
  },
  {
    id: "eventify",
    title: "Eventify Booking Platform",
    tagline: "End-to-End Event Coordination & Registration System",
    category: "Custom Web Application",
    location: "Web Application",
    clientProblem:
      "Event organizers were relying on manual spreadsheets and disconnected chat channels to manage registrations, track capacity, and coordinate attendee communications, causing double-bookings and confusion.",
    solutionImplemented:
      "Engineered a centralized web platform featuring role-based dashboards, transaction-safe reservation flows, automated booking confirmations, and capacity tracking.",
    businessOutcome:
      "Eliminated booking conflicts and manual spreadsheet tracking through automated, self-service attendee registration.",
    highlights: [
      "Secure user authentication with role-based access control (RBAC)",
      "Transaction-safe booking pipelines preventing over-capacity issues",
      "Automated reservation status updates and attendee dashboard",
      "Real-time event coordination tools for administrators",
    ],
    liveUrl: "https://samirshaikh-dev.github.io/",
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["Custom Software", "React", "Node.js", "Booking System", "RBAC"],
    featured: true,
    isLocalVapi: false,
    ctaText: "Build a Custom Web Application",
  },
  {
    id: "whatsapp-campaign",
    title: "WhatsApp Campaign Platform",
    tagline: "Automated Customer Communication & Google Sheets Sync",
    category: "Workflow Automation",
    location: "Business Automation",
    clientProblem:
      "Businesses conducting customer outreach were manually typing and sending individual WhatsApp follow-ups one by one, consuming hours of daily labor and mismanaging customer reply data.",
    solutionImplemented:
      "Built a reliable queue-based communication tool that automates scheduled WhatsApp message dispatch and synchronizes campaign responses directly with Google Sheets spreadsheets.",
    businessOutcome:
      "Saved hours of daily manual typing while keeping outreach data synchronized in real time across the business's spreadsheets.",
    highlights: [
      "Queue-based automated dispatch preventing rate limit blocks",
      "Two-way live synchronization with existing Google Sheets spreadsheets",
      "Automated customer acknowledgment and follow-up alerts",
      "Delivery logging and activity monitoring dashboard",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["Automation", "Node.js", "Queue System", "Google Sheets Sync"],
    featured: false,
    isLocalVapi: false,
    ctaText: "Automate WhatsApp Workflows",
  },
  {
    id: "ai-ticket-triage",
    title: "AI Customer Ticket Triage",
    tagline: "Intelligent Support Classification & Routing",
    category: "AI & Business Automation",
    location: "AI Integration",
    clientProblem:
      "Customer support teams were inundated with incoming requests across various channels, spending hours manually categorizing urgent problems from general inquiries before responding.",
    solutionImplemented:
      "Developed an AI-driven workflow that automatically evaluates incoming customer messages, tags urgency and problem category, and routes high-priority issues to the appropriate specialist instantly.",
    businessOutcome:
      "Dramatically reduced customer response turnaround times and eliminated manual sorting of support tickets.",
    highlights: [
      "Automated request classification and priority urgency scoring",
      "Smart category routing directly to relevant team members",
      "Background worker queue execution for high-volume inquiries",
      "Clear monitoring and resolution tracking dashboard",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["AI Integration", "Automation", "Support Workflows", "Queue Processing"],
    featured: false,
    isLocalVapi: false,
    ctaText: "Automate Customer Inquiries",
  },
  {
    id: "autonomous-rag-assistant",
    title: "Autonomous AI Knowledge Assistant",
    tagline: "Context-Aware Business Assistant with Zero Hallucination",
    category: "AI Knowledge Systems",
    location: "AI & Vector Search",
    clientProblem:
      "Employees and customers spent excessive time searching through multi-page policy manuals, technical specification PDFs, and product guides to find specific procedural answers.",
    solutionImplemented:
      "Created a retrieval-augmented generation (RAG) assistant that indexes internal business documents, searches vectors semantically, and provides direct, citation-backed answers with zero external data leaks.",
    businessOutcome:
      "Provided instant, accurate answers from company documents without requiring staff to manually comb through hundreds of PDF pages.",
    highlights: [
      "Semantic vector search over private business documentation",
      "Strict citation-grounded responses (anti-hallucination guardrails)",
      "Secure retrieval without sharing confidential data with public models",
      "Instant query resolution for internal teams or customer self-service",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["RAG", "Vector Search", "AI Assistant", "Document Ingestion"],
    featured: false,
    isLocalVapi: false,
    ctaText: "Build an AI Knowledge Assistant",
  },
];
