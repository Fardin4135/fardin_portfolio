import { experiences } from "../data/experience";
import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiMapPin,
} from "react-icons/fi";

import SectionTitle from "./SectionTitle";



export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <SectionTitle
          eyebrow="My Journey"
          title="Professional Experience"
          description="A timeline of my professional experience, development work and technical training."
        />

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-4 top-0 h-full
                          w-px bg-white/10 md:left-1/2
                          md:-translate-x-1/2" />

          <div className="space-y-12">

            {experiences.map((experience, index) => {

              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={`${experience.company}-${experience.role}`}
                  initial={{
                    opacity: 0,
                    x: isRight ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{ duration: 0.6 }}
                  className={`relative md:flex ${
                    isRight
                      ? "md:justify-end"
                      : "md:justify-start"
                  }`}
                >

                  {/* Timeline dot */}

                  <div className="absolute left-4 top-8
                                  z-10 h-4 w-4
                                  -translate-x-1/2
                                  rounded-full border-4
                                  border-slate-900
                                  bg-cyan-400
                                  md:left-1/2" />

                  {/* Card */}

                  <div className="ml-10 w-full
                                  md:ml-0 md:w-[45%]">

                    <div
  className="rounded-2xl border
             border-white/10
             bg-white/5
             p-4 sm:p-6
             backdrop-blur-xl
             transition
             hover:border-cyan-400/30
             hover:bg-white/[0.07]"
>

                      <div className="flex flex-wrap
                                      items-start
                                      justify-between gap-3">

                        <div>

                          <p className="text-sm
                                        font-medium
                                        text-cyan-400">
                            {experience.duration}
                          </p>

                          <h3 className="mt-1 text-xl
                                         font-bold text-white">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-slate-300">
                            {experience.company}
                          </p>

                        </div>

                        <div className="flex h-10 w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-cyan-400/10
                                        text-cyan-400">
                          <FiBriefcase />
                        </div>

                      </div>

                      <div className="mt-4 flex
                                      items-center gap-2
                                      text-sm text-slate-500">
                        <FiMapPin />
                        {experience.location}
                      </div>

                      <p className="mt-5 text-sm
                                    leading-7 text-slate-400">
                        {experience.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">

                        {experience.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-full
                                         bg-cyan-400/10
                                         px-3 py-1
                                         text-xs
                                         text-cyan-300"
                            >
                              {technology}
                            </span>
                          )
                        )}

                      </div>

                    </div>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}