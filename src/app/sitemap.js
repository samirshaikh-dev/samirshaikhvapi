import { siteConfig } from "@/config/site";

export default function sitemap() {
  const routes = ["", "#about", "#experience", "#projects", "#skills", "#contact"].map(
    (route) => ({
      url: `${siteConfig.url}/${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
