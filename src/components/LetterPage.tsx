import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function LetterPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1.05]);
  const yLabel = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} className="py-20 md:py-40 bg-warm-paper relative z-10 overflow-hidden">
      <div className="w-full max-w-[95%] mx-auto relative h-[70vh] md:h-[110vh]">
        <motion.div style={{ scale }} className="w-full h-full origin-bottom">
          <img 
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
            alt="Editorial spread" 
            className="w-full h-full object-cover shadow-2xl"
          />
        </motion.div>
        
        <motion.div 
          style={{ y: yLabel }}
          className="absolute -bottom-8 left-8 md:bottom-20 md:left-20 bg-white p-6 md:p-12 max-w-[80vw] md:max-w-md border border-dusty-grey/10 shadow-2xl"
        >
          <p className="font-serif text-3xl md:text-5xl italic text-rich-ink leading-snug font-light">
            "Everything speaks."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
