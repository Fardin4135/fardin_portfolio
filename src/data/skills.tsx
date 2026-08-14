import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaBrain,
  FaRobot,
} from "react-icons/fa";


import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiC,
  SiCplusplus,
  SiBootstrap,
  SiSqlite,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Programming",

    skills: [
      {
        name: "Python",
        icon: FaPython,
      },

      {
        name: "JavaScript",
        icon: SiJavascript,
      },

      {
        name: "TypeScript",
        icon: SiTypescript,
      },
       {
        name: "C",
        icon: SiC,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
    ],
  },

  {
    title: "Frontend",

    skills: [
      {
        name: "React",
        icon: FaReact,
      },

      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
        {
        name: "BootStrap CSS",
        icon: SiBootstrap,
      },
       {
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },

  {
    title: "Backend & Database",

    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },

      {
        name: "MongoDB",
        icon: SiMongodb,
      },

      {
        name: "SQL",
        icon: SiSqlite,
      },
    ],
  },

  {
    title: "AI / Machine Learning",

    skills: [
      {
        name: "NumPy",
        icon: SiNumpy,
      },

      {
        name: "Pandas",
        icon: SiPandas,
      },

      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
      },
        {
        name: "Gen Ai",
        icon: FaBrain,
      },
      {
        name: "Machine Learning",
        icon: FaRobot,
      }
    ],
  },

  {
    title: "DevOps & Cloud",

    skills: [
      {
        name: "Docker",
        icon: FaDocker,
      },

      {
        name: "Kubernetes",
        icon: SiKubernetes,
      },

      {
        name: "AWS",
        icon: FaAws,
      },

      {
        name: "Terraform",
        icon: SiTerraform,
      },

      {
        name: "Jenkins",
        icon: SiJenkins,
      },

      {
        name: "Git",
        icon: FaGitAlt,
      },
    ],
  },
];