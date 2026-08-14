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
    title: "Weather Application",

    description:
      "A responsive weather application built with React that displays real-time weather information using an external weather API.",

    image:
      "/images/projects/weather_app.png",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "API",
      "Docker",
      "AWS",
    ],

    github:
      "https://github.com/Fardin4135/React-tsc-weatherApp",

    live:
      "https://react-tsc-real-time-weather-app.vercel.app/",
  },

  {
    title: "Todo App",

    description:
     "A responsive Todo application built with React featuring dark and light mode, task creation, task deletion, task completion and a clean, user-friendly interface.",

    image:
      "/images/projects/Todo_app.png",

    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind"
    ],

    github:
      "https://github.com/Fardin4135/Todo_App_react_ts",

    live:
      "https://todo-app-react-i9lwbbx5v-fardin4135s-projects.vercel.app/",
  },

  {
    title: "AWS Infrastructure Automation",

    description:
     "Infrastructure automation project using Terraform to provision, manage, and scale AWS cloud resources efficiently, securely, and consistently through Infrastructure as Code.",

    image:
      "/images/projects/aws_infra.png",

    technologies: [
      "Terraform",
      "AWS",
      "EC2",
      "S3",
      "IAM",
    ],

    github:
      "https://github.com/Fardin4135/Automating-ec2-s3-terraform",
  },
];