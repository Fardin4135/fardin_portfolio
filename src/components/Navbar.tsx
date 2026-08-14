import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Training", href: "#training" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 
                 border-b border-white/10 
                 bg-slate-950/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center 
                      justify-between px-6 py-4">

        <a
          href="#home"
          className="text-2xl font-bold"
        >
          Fardin<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop */}

        <div className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-slate-300 
                         transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}

        </div>

        {/* Mobile button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300"
                >
                  {item.name}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}