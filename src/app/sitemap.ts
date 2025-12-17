import { MetadataRoute } from "next";

export const revalidate = 3600; // 1 hour cache

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const domain =
    process.env.NEXTAUTH_URL || "";

  const now = new Date().toISOString(); 

  return [
    {
      url: domain + "/",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: domain + "/plalist",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: domain + "/about",
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: domain + "/contact",
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    },
   
   
  ];
 }
