import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./TextReveal";

export function IntroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage1 = useTransform(scrollYProgress, [0, 1], [-50, 200]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [50, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-40 pb-40 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden bg-warm-paper z-20">
      
      {/* Editorial Text Layer */}
      <motion.div style={{ y: yText }} className="w-full md:w-1/2 flex flex-col z-10 md:pr-10">
        <h2 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-8 flex flex-col font-light">
          <TextReveal text="The" delay={0.2} blur />
          <TextReveal text="Art of" delay={0.4} blur />
          <TextReveal text="Presence." delay={0.6} blur className="italic text-warm-brown mt-2" />
        </h2>
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, delay: 0.8 }}
           className="max-w-md space-y-6 text-dusty-grey font-sans text-sm md:text-base leading-relaxed mt-4"
        >
          <p>
            Moments that slip by unnoticed. Quiet fractions of time. 
            Compiled, they form the architecture of how we remember.
          </p>
          <p className="tracking-[0.2em] uppercase text-[10px] text-rich-ink/70">
            A visual anthology.
          </p>
        </motion.div>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          className="mt-12 w-24 h-[1px] bg-rich-ink/30 origin-left" 
        />
      </motion.div>

      {/* Layered Image Assets */}
      <div className="w-full md:w-1/2 relative h-[70vh] min-h-[500px] mt-20 md:mt-0">
        <motion.div 
          initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
          whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          style={{ y: yImage1 }} 
          className="absolute right-0 top-0 w-[80%] h-[75%] z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1510614838637-25e228965fec?auto=format&fit=crop&q=80" 
            alt="Editorial layer"
            className="w-full h-full object-cover filter hover:scale-105 transition-all duration-[2s]"
          />
        </motion.div>
        
        <motion.div 
          initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
          whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
          style={{ y: yImage2 }} 
          className="absolute left-0 bottom-10 w-[65%] h-[55%] z-10 p-2 bg-warm-paper shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?auto=format&fit=crop&q=80" 
            alt="Editorial sub-layer"
            className="w-full h-full object-cover filter hover:scale-105 transition-all duration-[2s]"
          />
        </motion.div>
      </div>

    </section>
  );
}
