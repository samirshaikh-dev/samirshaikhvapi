import { metadata } from "@/lib/seo/metadata";
import { getRootJsonLd, getFaqPageJsonLd, mergeJsonLd } from "@/lib/seo/structured-data";
import { faqsData } from "@/data/faqs";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import "./globals.css";

const rootJsonLd = getRootJsonLd();
const faqJsonLd = getFaqPageJsonLd(faqsData);
export const pageJsonLd = mergeJsonLd(rootJsonLd, faqJsonLd);

// Serialize to a JSON string safe for embedding in a <script> tag.
// Escapes "<" to prevent breaking out of the script element (XSS-safe for JSON-LD).
const pageJsonLdString = JSON.stringify(pageJsonLd).replace(/</g, "\\u003c");

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: pageJsonLdString }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F6F2E9] text-[#172C46] font-sans selection:bg-[#F26A3D] selection:text-white">
        {/* Accessible Skip Link (Accessibility requirement from accessibility-engineer & AI_RULE.md) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#F26A3D] text-[#172C46] px-4 py-2 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-[#172C46]"
        >
          Skip to main content
        </a>
        <Header />
        <ScrollProgress />
        <main id="main-content" tabIndex={-1} className="flex-1 flex flex-col outline-none">
          <SmoothScroll>{children}</SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}
