import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import {
  FiAward,
  FiBookOpen,
  FiCode,
  FiUsers,
} from "react-icons/fi";

import SectionTitle from "./SectionTitle";


// ============================================
// Animated Counter Component
// ============================================

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1500;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth ease-out effect
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}


// ============================================
// Highlight Data
// ============================================

const highlights = [
  {
    icon: FiCode,
    title: "Software Development",
    description:
      "Building modern and responsive applications using React, TypeScript, Node.js and other technologies.",
  },

  {
    icon: FiBookOpen,
    title: "AI & Machine Learning",
    description:
      "Working with Python, NumPy, Pandas, Matplotlib and Scikit-learn to explore data and machine learning.",
  },

  {
    icon: FiUsers,
    title: "Technical Training",
    description:
      "Delivering hands-on technical training programs for students at different colleges and locations.",
  },

  {
    icon: FiAward,
    title: "Continuous Learning",
    description:
      "Constantly exploring new technologies, development practices and modern tools.",
  },
];


// ============================================
// About Component
// ============================================

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <SectionTitle
          eyebrow="About Me"
          title="A Developer Who Loves to Build & Teach"
          description="My journey combines software development, artificial intelligence, DevOps and technical training."
        />


        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">


          {/* ========================================
              LEFT SIDE - ABOUT CONTENT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Introduction */}

            <p className="text-lg leading-8 text-slate-300">

              I'm{" "}

              <span className="font-semibold text-white">
                Fardin Alam
              </span>
              , a Computer Science graduate specializing
              in Artificial Intelligence and Machine Learning.

            </p>


            {/* Experience */}

            <p className="mt-6 text-lg leading-8 text-slate-400">

              My experience spans software development,
              frontend technologies, Python, machine learning,
              cloud and DevOps technologies.

            </p>


            {/* Training */}

            <p className="mt-6 text-lg leading-8 text-slate-400">

              Alongside development, I have also worked as a
              technical trainer, conducting skill development
              and NSDC training programs for students across
              different locations and institutions.

            </p>


            {/* ========================================
                ANIMATED STATS
            ======================================== */}

            <div
              className="mt-10 grid grid-cols-2
                         gap-4 sm:grid-cols-4"
            >


              {/* Years Experience */}

              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-2xl border
                           border-white/10
                           bg-white/5 p-4
                           text-center
                           backdrop-blur-xl
                           transition-colors
                           hover:border-cyan-400/30"
              >

                <h3
                  className="text-2xl
                             font-bold
                             text-cyan-400"
                >
                  <AnimatedCounter
                    value={2}
                    suffix="+"
                  />
                </h3>

                <p
                  className="mt-1
                             text-xs
                             text-slate-400"
                >
                  Years Experience
                </p>

              </motion.div>


              {/* Technologies */}

              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-2xl border
                           border-white/10
                           bg-white/5 p-4
                           text-center
                           backdrop-blur-xl
                           transition-colors
                           hover:border-cyan-400/30"
              >

                <h3
                  className="text-2xl
                             font-bold
                             text-cyan-400"
                >
                  <AnimatedCounter
                    value={15}
                    suffix="+"
                  />
                </h3>

                <p
                  className="mt-1
                             text-xs
                             text-slate-400"
                >
                  Technologies
                </p>

              </motion.div>


              {/* Locations */}

              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-2xl border
                           border-white/10
                           bg-white/5 p-4
                           text-center
                           backdrop-blur-xl
                           transition-colors
                           hover:border-cyan-400/30"
              >

                <h3
                  className="text-2xl
                             font-bold
                             text-cyan-400"
                >
                  <AnimatedCounter
                    value={10}
                    suffix="+"
                  />
                </h3>

                <p
                  className="mt-1
                             text-xs
                             text-slate-400"
                >
                  Locations
                </p>

              </motion.div>


              {/* Students */}

              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="rounded-2xl border
                           border-white/10
                           bg-white/5 p-4
                           text-center
                           backdrop-blur-xl
                           transition-colors
                           hover:border-cyan-400/30"
              >

                <h3
                  className="text-2xl
                             font-bold
                             text-cyan-400"
                >
                  <AnimatedCounter
                    value={700}
                    suffix="+"
                  />
                </h3>

                <p
                  className="mt-1
                             text-xs
                             text-slate-400"
                >
                  Students
                </p>

              </motion.div>

            </div>

          </motion.div>


          {/* ========================================
              RIGHT SIDE - HIGHLIGHTS
          ======================================== */}

          <div
            className="grid
                       gap-4
                       sm:grid-cols-2"
          >

            {highlights.map(
              (item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}

                    initial={{
                      opacity: 0,
                      y: 30,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}

                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}

                    whileHover={{
                      y: -6,
                    }}

                    className="group rounded-2xl
                               border border-white/10
                               bg-white/5 p-6
                               backdrop-blur-xl
                               transition-all
                               duration-300
                               hover:border-cyan-400/30
                               hover:bg-white/[0.07]"
                  >

                    {/* Icon */}

                    <div
                      className="mb-5 flex
                                 h-12 w-12
                                 items-center
                                 justify-center
                                 rounded-xl
                                 bg-cyan-400/10
                                 text-cyan-400
                                 transition-all
                                 duration-300
                                 group-hover:bg-cyan-400
                                 group-hover:text-slate-950
                                 group-hover:scale-110"
                    >

                      <Icon
                        className="text-xl"
                      />

                    </div>


                    {/* Title */}

                    <h3
                      className="text-lg
                                 font-semibold
                                 text-white"
                    >
                      {item.title}
                    </h3>


                    {/* Description */}

                    <p
                      className="mt-3
                                 text-sm
                                 leading-6
                                 text-slate-400"
                    >
                      {item.description}
                    </p>

                  </motion.div>

                );
              }
            )}

          </div>

        </div>

      </div>

    </section>
  );
}















































// import { motion } from "framer-motion";
// import {
//   FiAward,
//   FiBookOpen,
//   FiCode,
//   FiUsers,
// } from "react-icons/fi";
// import SectionTitle from "./SectionTitle";

// const highlights = [
//   {
//     icon: FiCode,
//     title: "Software Development",
//     description:
//       "Building modern and responsive applications using React, TypeScript, Node.js and other technologies.",
//   },
//   {
//     icon: FiBookOpen,
//     title: "AI & Machine Learning",
//     description:
//       "Working with Python, NumPy, Pandas, Matplotlib and Scikit-learn to explore data and machine learning.",
//   },
//   {
//     icon: FiUsers,
//     title: "Technical Training",
//     description:
//       "Delivering hands-on technical training programs for students at different colleges and locations.",
//   },
//   {
//     icon: FiAward,
//     title: "Continuous Learning",
//     description:
//       "Constantly exploring new technologies, development practices and modern tools.",
//   },
// ];

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-slate-950 py-24"
//     >
//       <div className="mx-auto max-w-7xl px-6">
//         <SectionTitle
//           eyebrow="About Me"
//           title="A Developer Who Loves to Build & Teach"
//           description="My journey combines software development, artificial intelligence, DevOps and technical training."
//         />

//         <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

//           {/* About text */}

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-lg leading-8 text-slate-300">
//               I'm <span className="font-semibold text-white">Fardin Alam</span>,
//               a Computer Science graduate specializing in Artificial
//               Intelligence and Machine Learning.
//             </p>

//             <p className="mt-6 text-lg leading-8 text-slate-400">
//               My experience spans software development, frontend
//               technologies, Python, machine learning, cloud and DevOps
//               technologies.
//             </p>

//             <p className="mt-6 text-lg leading-8 text-slate-400">
//               Alongside development, I have also worked as a technical
//               trainer, conducting skill development and NSDC training
//               programs for students across different locations and
//               institutions.
//             </p>

//             {/* Stats */}

//             <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
//                 <h3 className="text-2xl font-bold text-cyan-400">
//                   2+
//                 </h3>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Years Experience
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
//                 <h3 className="text-2xl font-bold text-cyan-400">
//                   15+
//                 </h3>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Technologies
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
//                 <h3 className="text-2xl font-bold text-cyan-400">
//                   10+
//                 </h3>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Locations
//                 </p>
//               </div>

//               <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
//                 <h3 className="text-2xl font-bold text-cyan-400">
//                   700+
//                 </h3>
//                 <p className="mt-1 text-xs text-slate-400">
//                   Students
//                 </p>
//               </div>

//             </div>
//           </motion.div>

//           {/* Highlights */}

//           <div className="grid gap-4 sm:grid-cols-2">

//             {highlights.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={item.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                   }}
//                   whileHover={{ y: -6 }}
//                   className="group rounded-2xl border
//                              border-white/10 bg-white/5 p-6
//                              backdrop-blur-xl transition
//                              hover:border-cyan-400/30"
//                 >
//                   <div className="mb-5 flex h-12 w-12
//                                   items-center justify-center
//                                   rounded-xl bg-cyan-400/10
//                                   text-cyan-400
//                                   transition
//                                   group-hover:bg-cyan-400
//                                   group-hover:text-slate-950">
//                     <Icon className="text-xl" />
//                   </div>

//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-400">
//                     {item.description}
//                   </p>
//                 </motion.div>
//               );
//             })}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }