import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import TrainingCard from "./TrainingCard";
import { trainingData } from "../data/training";



export default function Training() {
  return (
    <section
      id="training"
      className="relative overflow-hidden
                 bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="Training Journey"
          title="Training Students Across Different Locations"
          description="A collection of my training experiences, workshops and skill development programs conducted at different institutions."
        />

        {/* Intro */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-4xl
                     rounded-2xl border
                     border-cyan-400/10
                     bg-cyan-400/5
                     p-6 text-center"
        >
          <p className="leading-7 text-slate-300">
            From NSDC programs to skill development
            initiatives and college-based technical
            training, I have had the opportunity to
            interact with students from different
            backgrounds and locations.
          </p>
        </motion.div>

        {/* Training cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {trainingData.map((training, index) => (
            <motion.div
              key={`${training.college}-${index}`}
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
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <TrainingCard training={training} />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}