import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Typewriter({ text, speed = 24, startDelay = 600, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || count >= text.length) return undefined;
    const delay = count === 0 ? startDelay + speed : speed;
    const t = setTimeout(() => setCount((c) => Math.min(c + 1, text.length)), delay);
    return () => clearTimeout(t);
  }, [inView, count, text, speed, startDelay]);

  return (
    <p ref={ref} className={className}>
      {text.slice(0, count)}
      {count < text.length && (
        <span
          aria-hidden
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-rose-300/80 align-middle"
        />
      )}
    </p>
  );
}
