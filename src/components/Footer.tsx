import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10
                       bg-slate-950">

      <div className="mx-auto max-w-7xl
                      px-6 py-10">

        <div className="flex flex-col
                        items-center
                        justify-between gap-6
                        md:flex-row">

          {/* Logo */}

          <div className="text-center md:text-left">

            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              Fardin
              <span className="text-cyan-400">.</span>
            </a>

            <p className="mt-2 text-sm text-slate-500">
              Developer • AI/ML • Technical Trainer
            </p>

          </div>

          {/* Social */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/Fardin4135"
              className="flex h-10 w-10
                         items-center justify-center
                         rounded-full border
                         border-white/10
                         text-slate-400
                         transition
                         hover:border-cyan-400/40
                         hover:text-cyan-400"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/fardin4135/"
              className="flex h-10 w-10
                         items-center justify-center
                         rounded-full border
                         border-white/10
                         text-slate-400
                         transition
                         hover:border-cyan-400/40
                         hover:text-cyan-400"
            >
              <FiLinkedin />
            </a>

            <a
              href="#home"
              className="flex h-10 w-10
                         items-center justify-center
                         rounded-full
                         bg-cyan-400
                         text-slate-950
                         transition
                         hover:bg-cyan-300"
            >
              <FiArrowUp />
            </a>

          </div>

        </div>

        <div className="mt-8 border-t
                        border-white/10 pt-6
                        text-center text-sm
                        text-slate-600">

          © {new Date().getFullYear()} Fardin Alam.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}