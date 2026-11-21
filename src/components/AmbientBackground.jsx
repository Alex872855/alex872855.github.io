import { motion } from "framer-motion";

const blobs = [
  {
    className: "-left-[30vmax] -top-[35vmax] h-[75vmax] w-[75vmax] bg-[#3b0764]/40",
    animate: { x: [0, 90, -50, 0], y: [0, 70, 20, 0] },
    duration: 28,
  },
  {
    className: "-right-[32vmax] top-[35%] h-[65vmax] w-[65vmax] bg-[#0c4a6e]/40",
    animate: { x: [0, -70, 40, 0], y: [0, 50, -30, 0] },
    duration: 32,
  },
  {
    className: "bottom-[-25vmax] left-[15%] h-[55vmax] w-[55vmax] bg-[#831843]/35",
    animate: { x: [0, 60, -30, 0], y: [0, -40, 30, 0] },
    duration: 26,
  },
];

export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[130px] ${b.className}`}
          animate={b.animate}
          transition={{ duration: b.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
