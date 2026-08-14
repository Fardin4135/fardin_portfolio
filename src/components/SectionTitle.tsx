import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-cyan-400" />

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  );
}