export interface Review {
  review: string;
  author?: string;
  company?: string;
}

export const reviews: Review[] = [
  {
    review: `Tiffany consistently demonstrates that she is a product engineer rather than just a software engineer. She possesses a high degree of autonomy and sound product judgment, frequently making architectural decisions that align with user needs rather than just technical convenience. She looks beyond the immediate task to consider system-wide implications, ensuring we are building the right things the right way. \n\nHer standards for the final output are high; she doesn’t ship work that looks or feels unfinished. She consistently looks beyond basic functional requirements, raising smart questions early in the process. She is also effective at navigating ambiguity, knowing when to move forward independently and when to pull others in for clarity rather than waiting for every detail to be defined.`,
    author: "Anonymous Peer Reviewer",
    company: "People Inc",
  },
  {
    review:
      "Tiffany has an incredible depth of knowledge about Core CMS, ProseMirror, and Tiptap. She possesses a vast amount of both institutional and technical knowledge, and our team relies heavily on her expertise when troubleshooting bugs and tackling complex issues. I am frequently amazed by how much she can recall about our codebase and its history. \n\nWhat stands out even more though is her ability to communicate that knowledge effectively. She has a talent for breaking down complex technical concepts and explaining them clearly to others. During meetings, she consistently presents ideas in a way that is easy to understand even for people outside our team, while still providing the level of detail needed for technical discussions. \n\nI have learned a great deal from working with Tiffany. She is an essential member of our team!",
    author: "Anonymous Peer Reviewer",
    company: "People Inc",
  },
  {
    review:
      "Tiffany's technical knowledge and her problem-solving skills are elite. She diagnoses problems in real-time, as they are being described, at a level that is beyond her years of experience. She has tackled learning the ins and outs of TipTap and Prosemirror eagerly, and I frequently go to her with questions when I'm not sure the best approach.",
    author: "Anonymous Peer Reviewer",
    company: "People Inc",
  },
];
