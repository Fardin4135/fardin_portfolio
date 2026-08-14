import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Have a project, opportunity or collaboration in mind? I'd love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Contact information */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >

            <h3 className="text-2xl font-bold text-white">
              Let's connect
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              Whether you want to discuss a project,
              a job opportunity, training program or
              collaboration, feel free to reach out.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12
                                items-center justify-center
                                rounded-xl bg-cyan-400/10
                                text-cyan-400">
                  <FiMail />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>
                  <p className="text-sm text-slate-300">
                    fardin0023789@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12
                                items-center justify-center
                                rounded-xl bg-cyan-400/10
                                text-cyan-400">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-xs text-slate-500">
                    Location
                  </p>
                  <p className="text-sm text-slate-300">
                    Bangalore
                  </p>
                </div>

              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/Fardin4135"
                className="flex h-11 w-11
                           items-center justify-center
                           rounded-xl border
                           border-white/10
                           text-slate-400
                           transition hover:border-cyan-400/40
                           hover:text-cyan-400"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/fardin4135/"
                className="flex h-11 w-11
                           items-center justify-center
                           rounded-xl border
                           border-white/10
                           text-slate-400
                           transition hover:border-cyan-400/40
                           hover:text-cyan-400"
              >
                <FiLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Form */}

          <motion.form
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border
                       border-white/10
                       bg-white/5 p-6
                       backdrop-blur-xl
                       lg:col-span-3"
          >

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm
                                  text-slate-300">
                  Your Name
                </label>

                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl
                             border border-white/10
                             bg-slate-950/60
                             px-4 py-3
                             text-white outline-none
                             placeholder:text-slate-600
                             focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm
                                  text-slate-300">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl
                             border border-white/10
                             bg-slate-950/60
                             px-4 py-3
                             text-white outline-none
                             placeholder:text-slate-600
                             focus:border-cyan-400"
                />
              </div>

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm
                                text-slate-300">
                Subject
              </label>

              <input
                required
                type="text"
                placeholder="Project discussion"
                className="w-full rounded-xl
                           border border-white/10
                           bg-slate-950/60
                           px-4 py-3
                           text-white outline-none
                           placeholder:text-slate-600
                           focus:border-cyan-400"
              />

            </div>

            <div className="mt-5">

              <label className="mb-2 block text-sm
                                text-slate-300">
                Message
              </label>

              <textarea
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full resize-none
                           rounded-xl border
                           border-white/10
                           bg-slate-950/60
                           px-4 py-3
                           text-white outline-none
                           placeholder:text-slate-600
                           focus:border-cyan-400"
              />

            </div>

            <button
              type="submit"
              className="mt-6 flex w-full
                         items-center justify-center
                         gap-2 rounded-xl
                         bg-cyan-400 px-6 py-3
                         font-semibold
                         text-slate-950
                         transition hover:bg-cyan-300"
            >
              <FiSend />
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm
                            text-emerald-400">
                Thanks! Your message has been submitted.
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}