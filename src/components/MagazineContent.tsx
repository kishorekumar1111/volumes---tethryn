import { useEffect } from "react";
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useScroll, useSpring } from 'motion/react';
import { IntroSection } from "./IntroSection";
import { MemoryFeatures } from "./MemoryFeatures";
import { LittleDetails } from "./LittleDetails";
import { ParallaxSpread } from "./ParallaxSpread";
import { LetterPage } from "./LetterPage";
import { BackCover } from "./BackCover";

gsap.registerPlugin(ScrollTrigger);

export function MagazineContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 40, restDelta: 0.001 });

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 1.2, smoothWheel: true }}>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-warm-brown origin-left z-[100] mix-blend-difference" 
        style={{ scaleX }} 
      />
      <nav className="fixed top-6 left-6 right-6 flex justify-between uppercase text-[10px] tracking-[0.3em] font-sans pointer-events-none mix-blend-difference text-warm-paper z-50 opacity-70">
        <span>Volumes</span>
        <span>Issue N°1</span>
      </nav>
      <main className="bg-warm-paper min-h-screen text-rich-ink selection:bg-muted-gold selection:text-rich-ink relative">
        <IntroSection />
        <MemoryFeatures />
        <ParallaxSpread />
        <LittleDetails />
        <LetterPage />
        <BackCover />
      </main>
    </ReactLenis>
  );
}
