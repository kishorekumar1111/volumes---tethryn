import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./TextReveal";

export function BackCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.4, 1], [0.97, 1]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] bg-rich-ink flex flex-col items-center justify-center text-warm-paper overflow-hidden z-20 rounded-t-[3rem] md:rounded-t-[5rem] -mt-10">
      
      <motion.div 
        style={{ opacity, scale }} 
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[95vw] lg:max-w-7xl mx-auto"
      >
         <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light italic text-white/90 mb-12 md:mb-16 flex flex-col leading-[1.2] tracking-normal">
            <TextReveal text="Thank you for being" blur delay={0.2} />
            <TextReveal text="part of my story." blur delay={0.5} className="mt-2 md:mt-4 opacity-70" />
         </h2>
         
         <div className="flex flex-col items-center gap-6 mt-10 md:mt-16 w-full">
            <div className="w-px h-16 md:h-24 bg-gradient-to-b from-white/30 to-transparent" />
            
            <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-dusty-grey mt-4">
              End of Volume 01
            </p>
            
            <div className="mt-16 md:mt-24 font-serif italic text-white/40 text-xs md:text-sm tracking-wide">
               Published — {new Date().getFullYear()}
            </div>
         </div>
      </motion.div>
      
    </section>
  );
}
