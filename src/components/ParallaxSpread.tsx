import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./TextReveal";

export function ParallaxSpread() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacityText = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const scaleText = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="relative h-[150vh] md:h-[200vh] bg-rich-ink overflow-hidden clip-diagonal md:my-20 z-10">
      
      {/* Background Parallax Layer */}
      <motion.div style={{ y: yBackground, scale: scaleImage }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <img 
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80" 
          alt="Immersive landscape"
          className="w-full h-full object-cover opacity-[0.65] mix-blend-normal"
        />
        {/* Deep shadow gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-rich-ink/80 via-transparent to-rich-ink/90 opacity-100" />
      </motion.div>

      {/* Centerpiece Text */}
      <motion.div 
        style={{ opacity: opacityText, scale: scaleText }}
        className="sticky top-0 h-screen w-full z-20 flex flex-col items-center justify-center text-warm-paper pointer-events-none px-4 text-center"
      >
        <span className="font-sans text-[9px] md:text-[10px] tracking-[0.5em] uppercase text-soft-ivory/60 mb-8 mix-blend-overlay font-medium">
          Suspended in time
        </span>
        <h2 className="font-serif text-[4rem] sm:text-7xl md:text-9xl lg:text-[11rem] tracking-tighter leading-[0.85] flex flex-col items-center">
          <TextReveal text="Eternity" blur delay={0.1} />
          <TextReveal text="in an" blur delay={0.3} className="text-3xl md:text-6xl lg:text-7xl block my-4 md:my-6 italic font-light text-muted-gold/80" />
          <TextReveal text="Instant" blur delay={0.5} />
        </h2>
      </motion.div>

      {/* Floating Fragments */}
      <motion.div style={{ y: yFront }} className="absolute bottom-10 md:bottom-20 left-0 right-0 z-30 flex items-end justify-between px-6 md:px-20 pointer-events-none gap-4">
        <div className="w-[45%] md:w-1/3 max-w-[280px] border-[4px] md:border-[6px] border-white p-0 bg-white hidden md:block shadow-2xl transform -rotate-2">
           <img 
              src="https://images.unsplash.com/photo-1549488344-c6da71cecb7b?auto=format&fit=crop&q=80" 
              className="w-full h-auto aspect-[3/4] object-cover"
              alt="Fragment"
           />
        </div>
        <div className="w-[90%] md:w-1/3 max-w-[320px] border border-white/20 p-6 md:p-8 bg-white/5 backdrop-blur-md transform rotate-1 md:rotate-3 shadow-2xl mx-auto md:mx-0 md:ml-auto">
           <p className="font-serif italic text-warm-paper text-sm sm:text-base md:text-xl leading-relaxed">
             "We leave traces of ourselves in the spaces we share."
           </p>
        </div>
      </motion.div>
      
    </section>
  );
}
