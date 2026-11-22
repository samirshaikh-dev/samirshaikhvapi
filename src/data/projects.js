/**
 * Selected Projects for Samir Shaikh's Vapi Freelance Portfolio.
 * Source of truth: docs/PROJECT-CONTEXT.md §5.
 * Strictly truthful: real links, accurate capabilities, no fabricated metrics.
 */

export const projectsData = [
  {
    id: "sahara-tyre",
    title: "Sahara Tyre",
    tagline: "Local Business & Automotive Digital Platform",
    category: "Local Commerce & Business Showcase",
    location: "Vapi, Gujarat",
    description:
      "A complete digital platform built for a prominent tyre and automotive service business in Vapi. Streamlines customer inquiries with an accessible digital catalogue of tyre specifications, brands, and vehicle applications, backed by direct WhatsApp conversion.",
    highlights: [
      "57+ tyre sizes catalogued with specifications",
      "Vehicle category and brand navigation",
      "One-click WhatsApp inquiry integration",
      "Fast, mobile-first responsive performance",
    ],
    liveUrl: "https://sahara-tyre.vercel.app/",
    caseStudyUrl: "https://samir-portfolio-dev.vercel.app/",
    tags: ["Next.js", "React", "Local Business", "WhatsApp Workflow", "Automotive"],
    featured: true,
    isLocalVapi: true,
  },
  {
    id: "eventify",
    title: "Eventify",
    tagline: "Full-Stack Event Management Platform",
    category: "Custom Web Application",
    location: "Full Stack Architecture",
    description:
      "An end-to-end event platform designed to simplify coordination between organizers and attendees. Implements structured access, multi-role dashboard management, and transaction-safe booking flows.",
    highlights: [
      "User authentication and role-based access",
      "Event scheduling and attendee coordination",
      "Transaction-safe booking workflows",
      "Real-time event status and notifications",
    ],
    liveUrl: "https://samirshaikh-dev.github.io/",
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["Full Stack", "React", "Node.js", "Booking System", "RBAC"],
    featured: true,
    isLocalVapi: false,
  },
  {
    id: "whatsapp-campaign",
    title: "WhatsApp Campaign Platform",
    tagline: "Automated Communication Platform",
    category: "Business Automation & Messaging",
    location: "Workflow Automation",
    description:
      "A business communication platform engineered to manage outbound WhatsApp message workflows, automate scheduled updates, and synchronize customer outreach with Google Sheets spreadsheets.",
    highlights: [
      "Queue-based automated message dispatch",
      "Two-way Google Sheets synchronization",
      "Campaign delivery monitoring and logging",
      "Batch workflow automation",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["Automation", "Node.js", "Queue System", "Google Sheets Sync"],
    featured: false,
    isLocalVapi: false,
  },
  {
    id: "ai-ticket-triage",
    title: "AI Customer Ticket Triage",
    tagline: "Intelligent Support Workflow Automation",
    category: "AI & Business Automation",
    location: "AI Integration",
    description:
      "An intelligent workflow system that automatically analyzes incoming customer requests, categorizes urgency and topic, and routes them to the right resolution path without manual intervention.",
    highlights: [
      "Automated request classification and priority scoring",
      "Intelligent routing by business category",
      "Background queue execution",
      "Reduced response turnaround time",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["AI Integration", "LLM Workflows", "Automation", "Ticket Routing"],
    featured: false,
    isLocalVapi: false,
  },
  {
    id: "autonomous-rag-assistant",
    title: "Autonomous RAG Knowledge Assistant",
    tagline: "Context-Aware Business Assistant",
    category: "AI Knowledge Systems",
    location: "AI & Vector Search",
    description:
      "A retrieval-based AI knowledge assistant that ingests company documents, policies, or product documentation to provide accurate, citation-backed answers to customer and internal team queries.",
    highlights: [
      "Semantic vector search over company documents",
      "Direct citation-grounded answers (anti-hallucination)",
      "Context-aware interactive dialogue",
      "Secure retrieval without external data leaks",
    ],
    githubUrl: "https://github.com/samirshaikh-dev",
    tags: ["RAG", "Vector Search", "AI Assistant", "Document Ingestion"],
    featured: false,
    isLocalVapi: false,
  },
];
