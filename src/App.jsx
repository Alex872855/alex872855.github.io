import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import IntroScreen from "./components/IntroScreen";
import LetterSection from "./components/LetterSection";
import GallerySection from "./components/GallerySection";
import GiftSection from "./components/GiftSection";
import FinalSection from "./components/FinalSection";
import AmbientBackground from "./components/AmbientBackground";
import ScrollProgress from "./components/ScrollProgress";
import VideoSection from "./components/VideoSection";

export default function App() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) window.scrollTo(0, 0);
  }, [opened]);

  const replay = () => {
    setOpened(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050507] text-white">
      {opened && (
        <>
          <AmbientBackground />
          <ScrollProgress />
          <main className="relative z-10">
            <LetterSection />
            <GallerySection />
            <VideoSection />
            <FinalSection onReplay={replay} />
          </main>
        </>
      )}

      <AnimatePresence>
        {!opened && <IntroScreen key="intro" onOpen={() => setOpened(true)} />}
      </AnimatePresence>
    </div>
  );
}
