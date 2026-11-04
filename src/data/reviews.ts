export interface Review {
  review: string;
  author?: string;
  company?: string;
}

export const reviews: Review[] = [
  {
    review: `Tiffany consistently demonstrates that she is a product engineer rather than just a software engineer. She possesses a high degree of autonomy and sound product judgment, frequently making architectural decisions that align with user needs rather than just technical convenience. She looks beyond the immediate task to consider system-wide implications, ensuring we are building the right things the right way. \n\nHer standards for the final output are high; she doesn’t ship work that looks or feels unfinished. She consistently looks beyond basic functional requirements, raising smart questions early in the process. She is also effective at navigating ambiguity, knowing when to move forward independently and when to pull others in for clarity rather than waiting for every detail to be defined.`,
    author: "Product Director",
    company: "People Inc",
  },
  {
    review:
      "Tiffany’s key accomplishments in the first half of 2026 include her ability to smoothly transition between her work on the CoreCMS team and her contributions to the AI squad. When she was recruited to the AI “squad”, where she worked effectively with a new group of teammates to implement AI features in CoreCMS while operating under tighter-than-usual timelines than many of the features we implement regularly. I think the fact that she stayed on the squad longer than we expected (and they wouldn’t give her back!!) is a testament to how valuable she was on that project. \n\nDespite the additional demands of the AI squad work, Tiffany continued to make meaningful contributions to the CoreCMS platform itself. She was also instrumental in tracking down and resolving several difficult-to-diagnose bugs, demonstrating both her strong understanding of the platform and her ability to work through complex technical problems. Her ability to contribute effectively across teams while continuing to support the stability and development of CoreCMS has been a significant accomplishment.",
    author: "Engineering Manager",
    company: "People Inc",
  },
  {
    review:
      "Tiffany has an incredible depth of knowledge about Core CMS, ProseMirror, and Tiptap. She possesses a vast amount of both institutional and technical knowledge, and our team relies heavily on her expertise when troubleshooting bugs and tackling complex issues. I am frequently amazed by how much she can recall about our codebase and its history. \n\nWhat stands out even more though is her ability to communicate that knowledge effectively. She has a talent for breaking down complex technical concepts and explaining them clearly to others. During meetings, she consistently presents ideas in a way that is easy to understand even for people outside our team, while still providing the level of detail needed for technical discussions. \n\nI have learned a great deal from working with Tiffany. She is an essential member of our team!",
    author: "Principal Engineer",
    company: "People Inc",
  },
  {
    review:
      "Tiffany's technical knowledge and her problem-solving skills are elite. She diagnoses problems in real-time, as they are being described, at a level that is beyond her years of experience. She has tackled learning the ins and outs of TipTap and Prosemirror eagerly, and I frequently go to her with questions when I'm not sure the best approach.",
    author: "Senior Software Engineer",
    company: "People Inc",
  },
  {
    review:
      "Tiffany has strong communication skills. She articulates both technical solutions and challenges clearly. Her abiliy to communicate effectively contributes to strong team collaboration and problem solving. Her impressive knowledge of software engineering principles significantly improves the quality of the codebase, and I find her approaches to complex architectural decisions and implementation choices to be highly efficient and ingenious.",
    author: "Senior Software Engineer",
    company: "People Inc",
  },
];
