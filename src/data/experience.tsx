export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Ethnotech Academy",
    role: "Technical Trainer / IT Specialist",
    duration: "Feb 2026 - Present",
    location: "India",
    description:
      "Working as a Technical Trainer and IT Specialist, delivering NSDC and skill development training programs across different colleges and locations. Training students in programming, web development and modern technologies while also contributing to IT and software-related activities.",
    technologies: [
      "Python",
      "C/C++",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "DevOps",
      "AI&Ml",
      "DataScience",
      "Prompt Engineering"
    ],
  },

  {
    company: "Workfall / Anviam Solution Pvt. Ltd.",
    role: "Software Developer",
    duration: "Jan 2025 - Jan 2026 · 1 Year",
    location: "Remote",
    description:
      "Gained one year of practical software development experience through a combination of a 6-month Software Developer internship and 6 months of freelance software development. Worked on web applications, backend development, deployment and modern software development workflows.",
    technologies: [
      "React",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "Python",
      "Flask",
      "Node.js",
      "Docker",
      "AWS",
      "Git",
    ],
  },

  {
    company: "Outlier",
    role: "AI Trainer / Freelance AI Trainer",
    duration: "Freelance",
    location: "Remote",
    description:
      "Worked as a freelance AI Trainer on AI model training and evaluation tasks. Contributed to improving AI systems through technical problem solving, programming evaluation, response analysis and quality assessment.",
    technologies: [
      "Artificial Intelligence",
      "Python",
      "Machine Learning",
      "AI Evaluation",
      "Programming",
    ],
  },
];