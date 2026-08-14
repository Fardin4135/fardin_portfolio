import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-2xl
                 border border-white/10
                 bg-white/5
                 backdrop-blur-xl"
    >

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover
                     transition duration-700
                     group-hover:scale-105"
        />

        <div className="absolute inset-0
                        bg-gradient-to-t
                        from-slate-950/70
                        to-transparent
                        opacity-0
                        transition
                        group-hover:opacity-100" />

      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6
                      text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full
                         bg-cyan-400/10
                         px-3 py-1
                         text-xs text-cyan-300"
            >
              {technology}
            </span>
          ))}

        </div>

        {/* Links */}

        <div className="mt-6 flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2
                         text-sm text-slate-300
                         transition hover:text-cyan-400"
            >
              <FiGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2
                         text-sm text-slate-300
                         transition hover:text-cyan-400"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </motion.article>
  );
}