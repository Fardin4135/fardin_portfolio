import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  // =====================================================
  // Hide welcome screen after 1.8 seconds
  // =====================================================

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center
                 overflow-hidden bg-slate-950"
    >

      {/* =====================================================
          WELCOME INTRO
      ===================================================== */}

      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-[100]
                       grid h-[100dvh] w-screen
                       place-items-center
                       overflow-hidden
                       bg-slate-950"
          >

            {/* =================================================
                CENTER CYAN GLOW
            ================================================= */}

            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1.5,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
              }}
              className="pointer-events-none
                         absolute
                         left-1/2
                         top-1/2
                         h-64
                         w-64
                         -translate-x-1/2
                         -translate-y-1/2
                         rounded-full
                         bg-cyan-500/20
                         blur-3xl
                         sm:h-72
                         sm:w-72"
            />

            {/* =================================================
                PURPLE GLOW
            ================================================= */}

            <motion.div
              initial={{
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                scale: 1.3,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="pointer-events-none
                         absolute
                         -bottom-20
                         -right-20
                         h-64
                         w-64
                         rounded-full
                         bg-purple-500/20
                         blur-3xl
                         sm:h-80
                         sm:w-80"
            />

            {/* =================================================
                INTRO CONTENT
            ================================================= */}

            <div
              className="relative z-10
                         flex w-full
                         max-w-2xl
                         flex-col
                         items-center
                         justify-center
                         px-5
                         text-center
                         sm:px-8"
            >

              {/* TOP LINE */}

              <motion.div
                initial={{
                  width: 0,
                  opacity: 0,
                }}
                animate={{
                  width: "80px",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mx-auto mb-6
                           h-[2px]
                           rounded-full
                           bg-cyan-400"
              />

              {/* WELCOME */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                  letterSpacing: "0.15em",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  letterSpacing: "0.32em",
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="whitespace-nowrap
                           text-xs
                           font-medium
                           text-cyan-400
                           sm:text-sm"
              >
                WELCOME
              </motion.p>

              {/* NAME */}

              <motion.h1
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-4
                           whitespace-nowrap
                           text-4xl
                           font-bold
                           tracking-tight
                           text-white
                           sm:text-5xl
                           md:text-7xl"
              >
                Fardin
                <span className="text-cyan-400">
                  {" "}Alam
                </span>
              </motion.h1>

              {/* PROFESSION */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.55,
                }}
                className="mt-5
                           max-w-full
                           text-xs
                           leading-6
                           text-slate-400
                           sm:text-sm
                           md:text-base"
              >
                AI/ML Engineer

                <span className="mx-1.5 text-cyan-400 sm:mx-2">
                  •
                </span>

                Developer

                <span className="mx-1.5 text-cyan-400 sm:mx-2">
                  •
                </span>

                Trainer
              </motion.p>

              {/* LOADING BAR */}

              <div
                className="mx-auto mt-8
                           h-[2px]
                           w-32
                           overflow-hidden
                           rounded-full
                           bg-white/10
                           sm:w-40"
              >
                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "0%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "linear",
                  }}
                  className="h-full w-full bg-cyan-400"
                />
              </div>

              {/* LOADING TEXT */}

              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.4,
                }}
                className="mt-4
                           text-[10px]
                           uppercase
                           tracking-[0.25em]
                           text-slate-600"
              >
                Creating something amazing
              </motion.p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          HERO BACKGROUND GLOW
      ===================================================== */}

      <div
        className="pointer-events-none
                   absolute
                   -right-40
                   -top-40
                   h-96
                   w-96
                   rounded-full
                   bg-cyan-500/20
                   blur-3xl"
      />

      <div
        className="pointer-events-none
                   absolute
                   -left-40
                   bottom-0
                   h-96
                   w-96
                   rounded-full
                   bg-purple-500/20
                   blur-3xl"
      />


      {/* =====================================================
          MAIN HERO CONTENT
      ===================================================== */}

      <div
        className="relative
                   mx-auto
                   w-full
                   max-w-7xl
                   px-6
                   pt-24"
      >

        <div
          className="grid
                     items-center
                     gap-12
                     lg:grid-cols-2"
        >

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.9,
            }}
          >

            {/* HELLO */}

            <p
              className="mb-4
                         font-medium
                         text-cyan-400"
            >
              Hello, I'm
            </p>


            {/* NAME */}

            <h1
              className="text-5xl
                         font-bold
                         leading-tight
                         md:text-7xl"
            >
              Fardin

              <span className="text-cyan-400">
                {" "}Alam
              </span>
            </h1>


            {/* PROFESSION */}

            <h2
              className="mt-6
                         text-2xl
                         text-slate-300
                         md:text-3xl"
            >
              AI/ML Engineer

              <span className="text-slate-500">
                {" • "}
              </span>

              Developer

              <span className="text-slate-500">
                {" • "}
              </span>

              Trainer
            </h2>


            {/* DESCRIPTION */}

            <p
              className="mt-6
                         max-w-xl
                         text-lg
                         leading-relaxed
                         text-slate-400"
            >
              I build modern web applications,
              explore machine learning solutions,
              and train students in technology
              through hands-on learning.
            </p>


            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="mt-8
                         flex
                         flex-wrap
                         gap-4"
            >

              {/* VIEW MY WORK */}

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 25px rgba(34,211,238,0.35)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="rounded-xl
                           bg-cyan-500
                           px-6
                           py-3
                           font-semibold
                           text-slate-950
                           transition
                           hover:bg-cyan-400"
              >
                View My Work
              </motion.a>


              {/* RESUME */}

              <motion.a
                href="/resume/Resume_trainer.pdf"
                download
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex
                           items-center
                           gap-2
                           rounded-xl
                           border
                           border-white/20
                           px-6
                           py-3
                           transition
                           hover:border-cyan-400/50
                           hover:bg-white/10"
              >
                <FiDownload />

                Resume
              </motion.a>

            </div>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div
              className="mt-8
                         flex
                         gap-5"
            >

              {/* GITHUB */}

              <motion.a
                href="https://github.com/Fardin4135"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                className="text-2xl
                           text-slate-400
                           transition
                           hover:text-cyan-400"
              >
                <FiGithub />
              </motion.a>


              {/* LINKEDIN */}

              <motion.a
                href="https://www.linkedin.com/in/fardin4135/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                className="text-2xl
                           text-slate-400
                           transition
                           hover:text-cyan-400"
              >
                <FiLinkedin />
              </motion.a>

            </div>

          </motion.div>


          {/* =================================================
              RIGHT SIDE PROFILE IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 50,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* IMAGE GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none
                           absolute
                           inset-0
                           rounded-full
                           bg-cyan-400/20
                           blur-3xl"
              />


              {/* PROFILE IMAGE */}

              <motion.img
                src="/images/profile/fardin2.jpeg"
                alt="Fardin Alam"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="relative
                           h-72
                           w-72
                           rounded-full
                           border-4
                           border-cyan-400/30
                           object-cover
                           shadow-[0_0_50px_rgba(34,211,238,0.15)]
                           md:h-96
                           md:w-96"
              />

            </div>

          </motion.div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.8,
            duration: 0.5,
          }}
          className="absolute
                     bottom-8
                     left-1/2
                     -translate-x-1/2"
        >

          <motion.a
            href="#about"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FiArrowDown
              className="text-2xl
                         text-slate-500
                         transition
                         hover:text-cyan-400"
            />
          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}