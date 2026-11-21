import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "../data";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.85, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function GallerySection() {
  const [active, setActive] = useState(null);
  const photos = content.gallery.photos;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-white/40"
        >
          {content.gallery.eyebrow}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
        >
          {content.gallery.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-base text-white/55 md:text-lg"
        >
          {content.gallery.subtitle}
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        {photos.map((p, i) => (
          <motion.figure
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            onClick={() => setActive(i)}
            className={`group relative cursor-zoom-in overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] ${
              i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
            }`}
          >
            <motion.img
              layoutId={`photo-${i}`}
              src={p.src}
              alt={p.caption}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/90 md:p-5 md:text-base">
              {p.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-5 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.figure
              layoutId={`photo-${active}`}
              className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[active].src}
                alt={photos[active].caption}
                className="max-h-[78vh] w-full object-contain"
              />
              <figcaption className="bg-black/45 px-6 py-4 text-center text-sm text-white/90 backdrop-blur-md md:text-base">
                {photos[active].caption}
              </figcaption>
            </motion.figure>
            <button
              aria-label="Закрыть"
              onClick={() => setActive(null)}
              className="glass absolute right-5 top-5 rounded-full p-3 text-white/80 transition-colors hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
