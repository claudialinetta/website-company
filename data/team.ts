export type Member = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
};

export const team: Member[] = [
  {
    slug: "aurelia-chloe",
    name: "Aurelia Chloe",
    role: "Creative Director",
    photo: "/team/aurelia.png",
    bio: "Aurel leads the creative direction of every project. She makes sure the ideas, visuals, and brand message all point the same way from start to finish.",
  },
  {
    slug: "julian-liam",
    name: "Julian Liam",
    role: "Lead Developer",
    photo: "/team/julian.png",
    bio: "Julian is in charge of all website work. He likes clean code and pages that open fast.",
  },
  {
    slug: "celeste-ivy",
    name: "Celeste Ivy",
    role: "UI/UX Designer",
    photo: "/team/celeste.png",
    bio: "Celeste designs how our websites look and flow. She starts from what users need, then moves on to colors and shapes.",
  },
  {
    slug: "freya-evelyn",
    name: "Freya Evelyn",
    role: "Content Strategist",
    photo: "/team/freya.png",
    bio: "Freya plans and writes content for our clients' social media. She helps each brand speak in a voice that fits its audience.",
  },
];
