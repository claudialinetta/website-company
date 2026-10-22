export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "branding",
    title: "Branding",
    short: "Logos and visual identities people remember.",
    description:
      "We help businesses build a consistent identity, from the logo all the way to a brand guideline.",
    items: ["Logo & logotype", "Brand guideline", "Packaging design"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Company profile websites and landing pages.",
    description:
      "Our websites are responsive and lightweight, so your business looks good on every device.",
    items: ["Company profile", "Landing page", "Website maintenance"],
  },
  {
    slug: "social-media",
    title: "Social Media",
    short: "Regular content for your social media accounts.",
    description:
      "From content planning to monthly reports, we take care of your business's social media.",
    items: ["Content plan", "Feed & story design", "Monthly report"],
  },
  {
    slug: "video-production",
    title: "Video Production",
    short: "Promo videos and short-form content.",
    description:
      "Our team handles the idea, shooting, and editing for all kinds of video needs.",
    items: ["Company profile video", "Short ads", "Reels & TikTok"],
  },
];
