import { motion } from "framer-motion";
import { data } from "../data";

export default function VideoSection() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-text">{data.video.title}</h2>
        <p className="text-white/60 mb-10">{data.video.subtitle}</p>

        <div className="glass p-2 glow">
          <video
            src={data.video.src}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-[1.2rem] bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
}
