import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "./TextReveal";

export function MemoryFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="bg-soft-ivory relative z-10">
      {/* Memory 1: Cinematic Sticky Split layout */}
      <MemoryOne />
      
      {/* Memory 2: Center Cinematic Quote */}
      <MemoryTwo />
      
      {/* Memory 3: Layered Collage */}
      <MemoryThree />
    </section>
  );
}

function MemoryOne() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  
  return (
    <div ref={ref} className="relative flex flex-col md:flex-row w-full bg-rich-ink min-h-[100vh]">
      <div className="w-full md:w-5/12 p-8 pt-32 pb-24 md:p-20 relative z-10 flex flex-col justify-center order-2 md:order-1">
        <div className="max-w-[400px] text-warm-paper mx-auto md:ml-auto md:mr-0 pl-4 md:pl-0 border-l border-white/10 md:border-none">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-gold tracking-[0.4em] uppercase text-[9px] mb-8 block font-sans"
          >
            Chapter I
          </motion.span>
          <h3 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] mb-12 flex flex-col leading-[1.05] tracking-tight">
             <TextReveal text="The Geometry" blur delay={0.1} />
             <TextReveal text="of Light." blur delay={0.3} className="italic text-white/90 font-light" />
          </h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-lg md:text-3xl leading-relaxed text-white/80 font-light"
          >
            "Some afternoons arrive without announcement and stay forever."
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1 }}
            className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-white/50 mt-16"
          >
            London // 2023
          </motion.p>
        </div>
      </div>
      <div className="w-full md:w-7/12 h-[60vh] md:h-auto md:min-h-screen overflow-hidden relative order-1 md:order-2">
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
           className="absolute inset-0 w-full h-full"
        >
          <motion.img 
            style={{ y: yImage, scale: 1.1 }}
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80" 
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            alt="Memory visual"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-rich-ink via-rich-ink/60 to-transparent h-[40%] md:h-full top-auto md:top-0 bottom-0 md:w-2/3 opacity-100 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}

function MemoryTwo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <div ref={ref} className="min-h-[80vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-rich-ink">
      <motion.div style={{ scale }} className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1549488344-c6da71cecb7b?auto=format&fit=crop&q=80" 
            alt="Cinematic background"
            className="w-full h-full object-cover opacity-60 mix-blend-normal"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-rich-ink/90 via-transparent to-rich-ink/90 opacity-100" />
         <div className="absolute inset-0 bg-rich-ink/30 grid grid-cols-12 pointer-events-none">
            <div className="col-span-1 border-r border-white/5 opacity-50"></div>
            <div className="col-start-12 col-span-1 border-l border-white/5 opacity-50"></div>
         </div>
      </motion.div>
      <div className="relative z-10 text-center px-6 max-w-5xl py-32 md:py-48 flex flex-col items-center">
        <p className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-paper leading-[1.2] mb-12 flex flex-col font-light">
          <TextReveal text='"I have collected' blur delay={0.2} />
          <TextReveal text='every version' blur delay={0.4} className="pl-8 md:pl-20 !font-light text-muted-gold/90" />
          <TextReveal text='of you..."' blur delay={0.6} />
        </p>
      </div>
    </div>
  );
}

function MemoryThree() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    // GSAP staggered image appearance with advanced easing
    const images = ref.current.querySelectorAll('.collage-img');
    gsap.fromTo(images, 
      { y: 150, opacity: 0, scale: 0.95, rotation: () => Math.random() * 15 - 7.5 },
      { 
        y: 0, opacity: 1, scale: 1,
        rotation: () => Math.random() * 4 - 2,
        duration: 2.5, 
        stagger: 0.2, 
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <div ref={ref} className="min-h-[140vh] md:min-h-[120vh] py-32 md:py-48 px-6 max-w-[1400px] mx-auto relative overflow-hidden bg-soft-ivory">
       <div className="flex justify-between items-end mb-24 md:mb-32 relative z-20 px-4 md:px-12">
         <h3 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight text-rich-ink/90 relative">
            <span className="absolute -top-10 left-2 text-[10px] font-sans tracking-[0.4em] uppercase text-dusty-grey">Collection</span>
            Fragments.
         </h3>
       </div>
       
       <div className="relative h-[800px] md:h-[1000px] w-full mt-10 md:mt-20">
         <img src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80" className="collage-img absolute top-0 left-0 md:left-[5%] w-[65%] sm:w-[45%] md:w-[35%] aspect-[4/5] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-20 bg-white hover:scale-[1.02] hover:z-40 transition-transform duration-700 ease-out" alt="Collage part 1" />
         
         <img src="https://images.unsplash.com/photo-1506744626753-1fa7673e0237?auto=format&fit=crop&q=80" className="collage-img absolute top-[25%] md:top-[15%] right-0 md:right-[5%] w-[70%] sm:w-[50%] md:w-[40%] aspect-square object-cover shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 p-0 bg-warm-paper hover:scale-[1.02] hover:z-40 transition-transform duration-700 ease-out" alt="Collage part 2" />
         
         <img src="https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?auto=format&fit=crop&q=80" className="collage-img absolute bottom-[5%] md:bottom-[10%] left-[5%] md:left-[20%] w-[90%] md:w-[60%] aspect-[4/3] md:aspect-[16/9] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.12)] z-30 p-0 bg-white hover:scale-[1.02] hover:z-40 transition-transform duration-700 ease-out" alt="Collage part 3" />
       </div>
    </div>
  );
}
