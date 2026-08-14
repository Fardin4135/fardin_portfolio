import { motion } from "framer-motion";

export default function TrainingCard({ training }: any) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.5,
      }}
      className="overflow-hidden rounded-2xl
                 border border-white/10
                 bg-white/5
                 backdrop-blur-xl"
    >

      <img
        src={training.image}
        alt={training.college}
        className="h-64 w-full object-cover
                   transition duration-500
                   hover:scale-105"
      />

      <div className="p-6">

        <p className="text-sm text-cyan-400">
          {training.program}
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {training.college}
        </h3>

        <p className="mt-2 text-slate-400">
          📍 {training.location}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">

          {training.topics.map((topic: string) => (
            <span
              key={topic}
              className="rounded-full
                         bg-cyan-400/10
                         px-3 py-1
                         text-xs
                         text-cyan-300"
            >
              {topic}
            </span>
          ))}

        </div>

      </div>

    </motion.div>
  );
}