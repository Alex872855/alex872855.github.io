import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import { content } from "../data";

export default function LetterSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-32">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-xs uppercase tracking-[0.4em] text-white/40"
      >
        {content.letter.eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-gradient mt-6 text-center text-5xl font-semibold tracking-tight md:text-7xl"
      >
        {content.letter.title}
      </motion.h2>

      <div className="mt-14 max-w-2xl md:mt-20">
        <Typewriter
          text={content.letter.text}
          speed={24}
          startDelay={700}
          className="whitespace-pre-line text-center text-lg leading-relaxed text-white/80 md:text-2xl"
        />
      </div>
    </section>
  );
}
