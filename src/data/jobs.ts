export interface Job {
  company: string;
  position: string;
  duration: string;
  current?: boolean;
  description: string;
  contributions: string[];
  technologies: string[];
  companyLogo: string;
}

export const jobs: Job[] = [
  {
    company: "People Inc",
    position: "Senior Software Engineer",
    duration: "March 2024 - Present",
    current: true,
    description:
      "Senior Software Engineer working on the Core Platform team, building the internal content management and publishing platform for the largest digital publishing company in America.",
    contributions: [
      "Owned key architectural decisions and feature development for the redesigned content management platform.",
      "Helped shape a modular, extensible architecture that supports customization and evolving stakeholder needs.",
      "Developed data-driven, AI-powered inline tools that help authors streamline content creation and publishing workflows.",
      "Became a technical resource for TipTap and ProseMirror, guiding complex implementation and architectural decisions involving rich text editing.",
    ],
    technologies: [
      "Vue",
      "TypeScript",
      "NextJS",
      "MongoDB",
      "TipTap",
      "ProseMirror",
    ],
    companyLogo: "people-inc.jpeg",
  },
  {
    company: "ExecOnline Inc",
    position: "Full Stack Software Engineer",
    duration: "March 2021 - January 2024",
    description: "TBD",
    contributions: [
      "Spearheaded accessibility improvements across the web platform and mobile app, working toward WCAG 2.0 AA compliance.",
      "Integrated cookie management to support consent and privacy requirements.",
      "Improved feature parity between web and mobile experiences.",
      "Developed internal tooling to support platform operations and workflows.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Ruby on Rails",
      "MySQL",
    ],
    companyLogo: "execonline-inc.jpg",
  },
  {
    company: "Frayt Technologies Inc",
    position: "Full Stack Software Engineer",
    duration: "July 2020 - January 2021",
    description: "TBD",
    contributions: [
      "Developed the driver-facing experience for coordinating multiple deliveries, improving visibility into delivery progress and supporting more efficient route management.",
      "Built backend services supporting in-app tipping in the customer-facing application, integrating payment-related functionality into the delivery experience.",
      "Contributed to the development of customer-facing and driver-facing mobile experiences, working across frontend applications and backend services to support core platform functionality.",
    ],
    technologies: ["React", "React Native", "TypeScript", "Elixir", "GraphQL"],
    companyLogo: "frayt-technologies-inc.jpeg",
  },
  {
    company: "Procter & Gamble",
    position: "Software Engineering Apprentice",
    duration: "January 2020 - June 2020",
    description: "TBD",
    contributions: [
      "Implemented in-app purchasing functionality, including product data fetching, cart state management, and payment processing to support the app's integrated shopping experience.",
      "Developed scheduling and automation features for paired smart scent devices, allowing users to customize device behavior and manage their environments through the mobile app.",
      "Integrated device scheduling capabilities with the Alexa Connectivity Kit, connecting mobile app functionality with the broader smart home ecosystem.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Elixir",
      "GatsbyJS",
      "GraphQL",
    ],
    companyLogo: "procter-gamble.webp",
  },
];
