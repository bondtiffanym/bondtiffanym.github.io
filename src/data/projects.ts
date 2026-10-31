export type Project = {
  title: string;
  subtitle: string;
  lead: string;
  contributions: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
}
export const projects: Project[] = [
  {
    title: "People Inc — Core CMS",
    subtitle: "Content Management · Publishing · Internal Tooling",
    lead: "People Inc's in-house content management system is evolving into a modular, plugin-based publishing platform designed to support customizable editorial workflows and more flexible content creation.",
    contributions: ["Owned key architectural decisions and feature development for the redesigned content management platform.", "Helped shape a modular, extensible architecture that supports customization and evolving stakeholder needs.", "Developed data-driven, AI-powered inline tools that help authors streamline content creation and publishing workflows.", "Became a technical resource for TipTap and ProseMirror, guiding complex implementation and architectural decisions involving rich text editing."],
    technologies: ["Vue", "TypeScript", "NestJS", "ProseMirror", "TipTap"],
    image: "people.jpeg",
    imageAlt: "People brand logo"
  },
  {
    title: "Exec Online - Learning Platform",
    subtitle: "EdTech · Accessibility · Mobile & Web · Internal Tooling",
    lead: "Exec Online's learning platform delivers professional and leadership development through web and mobile learning experiences, supported by internal tools and operational workflows.",
    contributions: ["Spearheaded accessibility improvements across the web platform and mobile app, working toward WCAG 2.0 AA compliance.", "Integrated cookie management to support consent and privacy requirements.", "Improved feature parity between web and mobile experiences.", "Developed internal tooling to support platform operations and workflows."],
    technologies: ["React", "React Native", "TypeScript", "Ruby on Rails"],
    image: "execonline.png",
    imageAlt: "Exec Online web and mobile learning platform"
  },
  {
    title: "FRAYT Mobile App & Platform",
    subtitle: "On-demand delivery platform",
    lead: "FRAYT is an on-demand delivery platform connecting businesses with drivers through customer-facing and driver-facing applications.",
    contributions: [
      "Developed the driver-facing experience for coordinating multiple deliveries, improving visibility into delivery progress and supporting more efficient route management.",
      "Built backend services supporting in-app tipping in the customer-facing application, integrating payment-related functionality into the delivery experience.",
      "Contributed to the development of customer-facing and driver-facing mobile experiences, working across frontend applications and backend services to support core platform functionality."
    ],
    technologies: ["React", "React Native", "TypeScript", "Elixir"],
    image: "frayt-app.jpg",
    imageAlt: "Frayt driver app",
  },
  {
    title: "AIRIA Smart Scent",
    subtitle: "AIRIA Smart Scent device and mobile app",
    lead: "Airia's smart home companion app connects users to their air-freshening devices, combining connected-device controls with an integrated shopping experience.",
    contributions: [
      "Implemented in-app purchasing functionality, including product data fetching, cart state management, and payment processing to support the app's integrated shopping experience.",
      "Developed scheduling and automation features for paired smart scent devices, allowing users to customize device behavior and manage their environments through the mobile app.",
      "Integrated device scheduling capabilities with the Alexa Connectivity Kit, connecting mobile app functionality with the broader smart home ecosystem.",
    ],
    technologies: ["React", "React Native", "TypeScript", "Elixir"],
    image: "airia-smart-scent.jpg",
    imageAlt: "AIRIA Smart Scent device and mobile app",
  },
];