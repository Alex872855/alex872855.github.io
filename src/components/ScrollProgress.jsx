import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-40 h-[2px] w-full origin-left bg-gradient-to-r from-rose-400 via-fuchsia-400 to-amber-300"
    />
  );
}
