import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { content } from "../data";

export default function GiftSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.88, 1, 1.06]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section ref={ref} className="relative px-6 py-32 md:py-48">
      <div className="mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-white/40"
        >
          {content.gift.eyebrow}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient mt-6 whitespace-pre-line text-5xl font-semibold leading-[1.06] tracking-tight md:text-7xl"
        >
          {content.gift.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-white/55 md:text-lg"
        >
          {content.gift.description}
        </motion.p>
      </div>

      <motion.div style={{ scale, opacity, y }} className="relative mx-auto mt-16 max-w-5xl md:mt-20">
        {/* деликатное свечение вокруг изображения */}
        <div className="absolute -inset-10 rounded-[48px] bg-gradient-to-b from-amber-300/15 via-fuchsia-500/10 to-transparent blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_40px_120px_-20px_rgba(255,180,120,0.22)]"
        >
          <img
            src={content.gift.image}
            alt={content.gift.name}
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
            <p className="text-2xl font-semibold tracking-tight md:text-4xl">{content.gift.name}</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
