import { useMemo } from "react";
import { motion } from "framer-motion";

const W = 210; // ширина коробки
const H = 150; // высота коробки
const D = 62;  // глубина коробки
const LH = 20; // высота крышки
const W2 = W + 18;
const D2 = D + 18;

const COLORS = ["#ffffff", "#fde68a", "#fda4af", "#e9d5ff", "#fbbf24", "#a5f3fc"];

function sideStyle(t, w, h) {
  return {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: w,
    height: h,
    transform: `translate(-50%, -50%) ${t}`,
  };
}

function Particles({ play }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 54 }, (_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 110 + Math.random() * 240;
        return {
          id: i,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist - 90,
          size: 3 + Math.random() * 7,
          delay: Math.random() * 0.4,
          color: COLORS[i % COLORS.length],
        };
      }),
    []
  );

  if (!play) return null;

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
          }}
          initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
          animate={{
            x: p.x,
            y: p.y,
            opacity: [0, 1, 1, 0],
            scale: [0, 1.25, 1, 0.3],
          }}
          transition={{ duration: 1.7, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function GiftBox({ opened, onClick }) {
  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{ perspective: 1100 }}
      onClick={onClick}
      whileHover={opened ? undefined : { scale: 1.04, y: -6 }}
      whileTap={opened ? undefined : { scale: 0.98 }}
      animate={opened ? { scale: 1.08 } : undefined}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      role="button"
      tabIndex={0}
      aria-label="Открыть подарок"
    >
      <div className="animate-float">
        <motion.div
          className="relative mx-auto"
          style={{
            width: W,
            height: H,
            transformStyle: "preserve-3d",
            rotateX: -16,
            rotateY: -22,
          }}
          animate={opened ? { rotateX: -30, rotateY: -36 } : undefined}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* мягкое свечение под коробкой */}
          <div className="absolute left-1/2 top-[70%] h-14 w-64 -translate-x-1/2 rounded-full bg-rose-500/25 blur-2xl" />

          {/* --- корпус коробки --- */}
          <div className="absolute" style={{ ...sideStyle("", 0, 0), left: "50%", top: "50%" }} />
          <div
            className="rounded-md bg-gradient-to-b from-[#7f1d3a] to-[#4c0519]"
            style={sideStyle(`rotateY(180deg) translateZ(${D / 2}px)`, W, H)}
          />
          <div
            className="bg-gradient-to-b from-[#6b1230] to-[#3b0512]"
            style={sideStyle(`rotateY(-90deg) translateZ(${W / 2}px)`, D, H)}
          />
          <div
            className="bg-gradient-to-b from-[#9f1239] to-[#5b0e24]"
            style={sideStyle(`rotateY(90deg) translateZ(${W / 2}px)`, D, H)}
          />
          <div
            className="overflow-hidden rounded-md bg-gradient-to-br from-[#be185d] via-[#9f1239] to-[#4c0519]"
            style={sideStyle(`translateZ(${D / 2}px)`, W, H)}
          >
            <div className="absolute left-1/2 top-0 h-full w-9 -translate-x-1/2 bg-gradient-to-b from-[#fde68a] via-[#f59e0b] to-[#b45309] opacity-95" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/10" />
          </div>
          <div
            className="bg-[#3b0512]"
            style={sideStyle(`rotateX(-90deg) translateZ(${H / 2}px)`, W, D)}
          />

          {/* --- свечение из коробки --- */}
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: 280,
              height: 280,
              background:
                "radial-gradient(circle, rgba(253,224,71,0.9), rgba(244,114,182,0.5) 40%, transparent 70%)",
              filter: "blur(28px)",
            }}
            animate={
              opened
                ? { opacity: [0, 1, 0.85], scale: [0.2, 1.7, 1.35], x: "-50%", y: "-50%" }
                : { opacity: 0, x: "-50%", y: "-50%" }
            }
            transition={{ duration: 1.2, delay: 0.45 }}
          />

          {/* --- крышка --- */}
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `translate(-50%, -50%) translateY(${-(H / 2 + LH / 2)}px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="relative"
              style={{ width: W2, height: D2, transformStyle: "preserve-3d" }}
              animate={opened ? { y: -180, rotateX: 70, opacity: 0 } : { y: 0, rotateX: 0, opacity: 1 }}
              transition={{ duration: 1.05, ease: [0.34, 1.25, 0.4, 1] }}
            >
              <div
                className="overflow-hidden rounded-lg bg-gradient-to-br from-[#e11d48] via-[#9f1239] to-[#6b1230]"
                style={sideStyle(`rotateX(90deg) translateZ(${LH / 2}px)`, W2, D2)}
              >
                <div className="absolute left-1/2 top-1/2 h-full w-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#fde68a] to-[#d97706]" />
                <div className="absolute left-1/2 top-1/2 h-8 w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#fde68a] to-[#d97706]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-white/15" />
              </div>
              <div
                className="bg-[#4c0519]"
                style={sideStyle(`rotateX(-90deg) translateZ(${LH / 2}px)`, W2, D2)}
              />
              <div
                className="overflow-hidden rounded-b-md bg-gradient-to-b from-[#9f1239] to-[#6b1230]"
                style={sideStyle(`translateZ(${D2 / 2}px)`, W2, LH)}
              >
                <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-b from-[#fde68a] to-[#b45309]" />
              </div>
              <div
                className="bg-[#6b1230]"
                style={sideStyle(`rotateY(180deg) translateZ(${D2 / 2}px)`, W2, LH)}
              />
              <div
                className="bg-[#7f1d3a]"
                style={sideStyle(`rotateY(-90deg) translateZ(${W2 / 2}px)`, D2, LH)}
              />
              <div
                className="bg-[#881c3f]"
                style={sideStyle(`rotateY(90deg) translateZ(${W2 / 2}px)`, D2, LH)}
              />
            </motion.div>
          </div>

          <Particles play={opened} />
        </motion.div>
      </div>
    </motion.div>
  );
}
