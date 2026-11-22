import { metadata } from "@/lib/seo/metadata";
import { getRootJsonLd, getJsonLdScript } from "@/lib/seo/structured-data";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const rootJsonLd = getRootJsonLd();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {getJsonLdScript(rootJsonLd)}
      </head>
      <body className="min-h-full flex flex-col bg-white text-zinc-900 dark:bg-black dark:text-zinc-50 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
