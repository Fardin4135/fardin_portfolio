export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "Coding & Training Platform (EdTech)",
    description:
      "A full-featured EdTech platform designed for interactive technical training, featuring structured curriculum paths, hands-on modules, and seamless progress tracking.",
    image: "/images/projects/edtech_platform.png",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "AWS",
    ],
    github: "https://github.com/Fardin4135/codeSphere",
    live: "https://coding-training-two.vercel.app/",
  },

  {
    title: "CallNPut (FinTech Trading Platform)",
    description:
      "A comprehensive FinTech solution providing financial market analytics, options trading tools, real-time data visualization, and portfolio management.",
    image: "/images/projects/fintech_callnput.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "Node.js",
      "WebSockets",
    ],
    github: "https://github.com/Fardin4135/CALLNPUT",
    live: "https://callnput.vercel.app/",
  },

  {
    title: "AWS Infrastructure Automation",
    description:
      "Infrastructure automation project using Terraform to provision, manage, and scale AWS cloud resources efficiently, securely, and consistently through Infrastructure as Code.",
    image: "/images/projects/aws_infra.png",
    technologies: [
      "Terraform",
      "AWS",
      "EC2",
      "S3",
      "IAM",
    ],
    github: "https://github.com/Fardin4135/Automating-ec2-s3-terraform",
  },
];