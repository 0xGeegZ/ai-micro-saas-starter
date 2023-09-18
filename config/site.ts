export type SiteConfig = {
  name: string
  nameShort: string
  description: string
  url: string
  email: string
  version: string
  ogImage: string
  links: {
    twitter: string
    twitterHandle: string
    github: string
    discord: string
    linkedin: string
    youtube: string
  }
  author: {
    twitter: string
    github: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Ai Micro Saas Starter",
  nameShort: "AIMSS",
  description:
    "An open source AI Micro Saas Starter built to be used with GeneratedBy API.",
  url: "https://generatedby.com",
  email: "human@generatedby.com",
  ogImage: "/web-shot.png",
  version: "0.1.0",
  links: {
    twitter: "https://twitter.com/Generated_by",
    github: "https://github.com/0xGeegZ",
    twitterHandle: "Generated_by",
    discord: "https://discord.gg/s9VJR2wXhd",
    linkedin: "https://www.linkedin.com/company/generatedby",
    youtube: "https://www.youtube.com/@Generated_By",
  },
  author: {
    twitter: "https://twitter.com/0xGeegZ",
    github: "https://github.com/0xGeegZ",
    linkedin: "https://www.linkedin.com/in/guillaumedieudonne/",
  },
}
