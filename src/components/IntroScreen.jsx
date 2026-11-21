import { useState } from "react";
import { motion } from "framer-motion";
import GiftBox from "./GiftBox";
import { content } from "../data";

export default function IntroScreen({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(onOpen, 2100);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#050507] px-6"
      exit={{ opacity: 0, filter: "blur(14px)", scale: 1.06 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[90vmax] w-[90vmax] rounded-full"
        style={{
          x: "-50%",
          y: "-50%",
          background:
            "radial-gradient(circle, rgba(190,24,93,0.32), rgba(30,27,75,0.22) 45%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={opening ? { opacity: 1, scale: 1.25 } : { opacity: 0.65, scale: 1 }}
        transition={{ duration: 1.4 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl"
        >
          {content.intro.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-balance text-base text-white/55 md:text-lg"
        >
          {content.intro.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-16"
        >
          <GiftBox opened={opening} onClick={handleOpen} />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={handleOpen}
          className="glass mt-14 rounded-full px-9 py-4 text-base font-medium text-white shadow-[0_0_50px_rgba(244,114,182,0.18)] transition-shadow hover:shadow-[0_0_70px_rgba(244,114,182,0.35)] md:text-lg"
        >
          {content.intro.button}
        </motion.button>
      </div>

      {/* мягкая белая вспышка в момент открытия */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={opening ? { opacity: [0, 0.85, 0] } : { opacity: 0 }}
        transition={{ duration: 1.6, times: [0, 0.35, 1], delay: 0.55 }}
      />
    </motion.div>
  );
}
