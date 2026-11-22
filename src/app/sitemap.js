import { siteConfig } from "@/config/site";

export default function sitemap() {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
