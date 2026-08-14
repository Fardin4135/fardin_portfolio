import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="My Toolkit"
          title="Technologies & Skills"
          description="Technologies and tools I use to build applications, work with data and deploy modern software."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.1,
              }}
              className="rounded-2xl border
                         border-white/10
                         bg-white/5 p-6
                         backdrop-blur-xl"
            >
              <h3 className="mb-6 text-xl
                             font-semibold text-white">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-3">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{
                        scale: 1.04,
                      }}
                      className="flex items-center
                                 gap-3 rounded-xl
                                 border border-white/10
                                 bg-slate-950/50
                                 p-3"
                    >
                      <Icon className="text-xl
                                       text-cyan-400" />

                      <span className="text-sm
                                       text-slate-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}