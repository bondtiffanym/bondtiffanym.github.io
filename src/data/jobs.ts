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
      "Senior Software Engineer on the Core Platform team, developing an internal content management and publishing platform for one of the largest digital publishing organizations in the United States. Focused on platform architecture, extensible application design, rich text editing, and AI-powered editorial tooling.",
    contributions: [
      "Owned key architectural decisions and feature development for the next generation of the company's content management and publishing platform.",
      "Helped establish a modular, extensible architecture designed to support evolving editorial workflows, configurable functionality, and diverse stakeholder requirements.",
      "Architected a configuration-driven frontend system integrated with brand and template configuration management, allowing individual brands to customize AI prompts, enable custom refinement instructions, and configure available suggestion fields across document types.",
      "Partnered with product to shape AI-assisted editorial experiences while independently owning substantial frontend implementation and coordinating with backend, configuration, and prompt-management systems.",
      "Served as a technical resource for TipTap and ProseMirror, guiding complex rich text editor implementations, customization, and architectural decisions.",
    ],
    technologies: [
      "Vue",
      "TypeScript",
      "NextJS",
      "MongoDB",
      "TipTap",
      "ProseMirror",
      "Langfuse",
    ],
    companyLogo: "people-inc.jpeg",
  },
  {
    company: "ExecOnline Inc",
    position: "Full Stack Software Engineer",
    duration: "March 2021 - January 2024",
    description:
      "Collaborated with engineers, designers, and QA teams to develop and maintain a suite of web and mobile applications supporting enterprise learning platforms, internal content and user management systems, and SaaS client portals.",
    contributions: [
      "Led accessibility initiatives across web and mobile applications, partnering with business stakeholders and auditors to identify and resolve accessibility issues and advance WCAG compliance.",
      "Implemented cookie consent and management functionality to support user privacy requirements and regulatory compliance.",
      "Improved feature parity between web and mobile applications, delivering more consistent functionality across platforms.",
      "Developed internal tools and application features supporting platform administration, content management, and operational workflows.",
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
    description:
      "Developed and maintained a suite of courier and logistics applications, including cross-platform mobile experiences, customer-facing shipping applications, internal administrative tools, backend APIs, and custom SQL database infrastructure.",
    contributions: [
      "Redesigned and developed the driver-facing mobile experience to support multi-stop deliveries, improving delivery visibility and enabling drivers to coordinate more complex routes.",
      "Developed backend services supporting in-app tipping, integrating payment-related functionality into the customer-facing delivery experience.",
      "Contributed to customer-facing and driver-facing mobile applications, working across frontend interfaces and backend services to deliver core logistics functionality.",
    ],
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Elixir",
      "Phoenix",
      "Erlang/OPT",
      "SQL",
    ],
    companyLogo: "frayt-technologies-inc.jpeg",
  },
  {
    company: "Procter & Gamble",
    position: "Software Engineering Apprentice",
    duration: "January 2020 - June 2020",
    description:
      "Collaborated with developers, designers, and project managers in agile environments to build applications spanning cross-platform IoT device experiences, connected home technologies, and server-side rendered internal support tools.",
    contributions: [
      "Implemented in-app purchasing functionality, including product data retrieval, shopping cart state management, and checkout workflows integrated with the BigCommerce API.",
      "Developed scheduling and automation functionality for connected smart fragrance devices, allowing users to customize device behavior and manage automated operating schedules.",
      "Integrated device scheduling capabilities with the Alexa Connectivity Kit, connecting mobile application functionality with the broader Alexa smart home ecosystem.",
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
