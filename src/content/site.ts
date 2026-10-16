// All marketing copy and data for the landing page lives here.

export const site = {
  name: "Strave",
  title: "Strave — Your Community’s Future, All in One Platform",
  description:
    "Launch courses, host events, and grow your audience with Strave — your complete hub for creators and brands, powered by AI-driven community tools.",
};

export const navLinks = [
  { label: "Products", href: "#", dropdown: true },
  { label: "Branded App", href: "#" },
  { label: "Resources", href: "#", dropdown: true },
  { label: "Discover", href: "#" },
  { label: "Pricing", href: "#" },
];

export const hero = {
  reviews: "70k+ reviews",
  subtitle: [
    "Launch courses, host events, and grow your audience with CommunityNest—your complete",
    "hub for creators and brands, powered by AI-driven community tools.",
  ],
  cta: "Start Your Free Trial",
  note: "No credit card required.",
};

export const stats = {
  millionaires: { value: "1000+", label: `Millionaires\nminted by ${site.name}` },
  served: { value: "75M+", label: "Served with love\nby our creators" },
};

export const post = {
  handle: "@maria_theodore",
  sub: "@image",
  caption: "Check out my outfit today with beautiful views",
};

export const gridTiles = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/images/g${n}.jpg`);

export const stories = [
  { handle: "@olivia", avatar: "/images/av1.jpg" },
  { handle: "@amelia", avatar: "/images/av4.jpg" },
  { handle: "@lenyoro", avatar: "/images/av2.jpg", featured: true },
  { handle: "@dkchk", avatar: "/images/av5.jpg" },
  { handle: "@claym", avatar: "/images/av6.jpg" },
];

export const notifications = [
  { users: ["magdalene"], action: "started following you", time: "2h", avatar: "/images/av4.jpg" },
  {
    users: ["fahrulizaldi", "renansanchez"],
    action: "liked your post",
    time: "1d",
    avatar: "/images/av1.jpg",
    thumb: "/images/g1.jpg",
  },
  { users: ["ohyskimiku"], action: "started following you", time: "2d", avatar: "/images/av6.jpg" },
];

export const trusted = {
  count: "88,500+",
  text: "teams to build better, faster, together.",
  logos: [
    { name: "Square", icon: "/logos/square.svg" },
    { name: "asana", icon: "/logos/asana.svg", className: "font-semibold tracking-[0.3px]" },
    { name: "Airtable", icon: "/logos/airtable.svg" },
    { name: "DOORDASH", icon: "/logos/doordash.svg", className: "text-[17px] font-extrabold tracking-[1.5px]" },
    { name: "shopify", icon: "/logos/shopify.svg", className: "font-extrabold italic" },
    { name: "Dropbox", icon: "/logos/dropbox.svg" },
    { name: "slack", icon: "/logos/slack.svg" },
    { name: "segment", icon: "segment" },
  ],
};
