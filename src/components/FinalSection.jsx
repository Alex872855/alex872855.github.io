import { motion } from "framer-motion";
import { content } from "../data";

export default function FinalSection({ onReplay }) {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-gradient max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl"
      >
        {content.final.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 max-w-xl text-balance text-base text-white/60 md:text-lg"
      >
        {content.final.subtitle}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.35 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={onReplay}
        className="glass mt-14 rounded-full px-9 py-4 text-base font-medium text-white shadow-[0_0_50px_rgba(255,255,255,0.08)] transition-shadow hover:shadow-[0_0_70px_rgba(255,255,255,0.2)]"
      >
        {content.final.replay}
      </motion.button>

      <motion.p className="absolute bottom-8 text-[11px] uppercase tracking-[0.35em] text-white/25">
        {content.final.footer}
      </motion.p>
    </section>
  );
}
