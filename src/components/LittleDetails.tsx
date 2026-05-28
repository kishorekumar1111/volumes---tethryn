import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./TextReveal";

export function LittleDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const yMove = useTransform(scrollYProgress, [0, 1], [30, -30]);
  
  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 max-w-[1200px] mx-auto bg-warm-paper relative z-10">
      
      <div className="mb-24 md:mb-32 flex flex-col md:items-center text-center">
         <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl mb-8">
           <TextReveal text="The" blur /> <TextReveal text="Margins." blur delay={0.2} className="italic text-warm-brown/80" />
         </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-16 relative w-full items-center">
         
         {/* Detail 1 */}
         <div className="md:col-span-6 flex flex-col items-center md:items-start pt-10">
            <motion.div 
               whileHover={{ scale: 1.03, rotate: 0 }}
               className="bg-white p-3 shadow-[0_20px_40px_rgba(0,0,0,0.08)] relative w-full max-w-sm transform -rotate-2 transition-transform duration-700 ease-out z-20"
            >
               <div className="overflow-hidden bg-soft-ivory">
                 <img 
                   src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&q=80" 
                   alt="Blurry memory" 
                   className="w-full aspect-[4/5] object-cover hover:scale-105 transition-all duration-[2s] ease-out"
                 />
               </div>
               <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.2em] text-center text-dusty-grey mb-1">06:43 AM</p>
            </motion.div>
         </div>

         {/* Detail 2: Offset Image */}
         <div className="md:col-span-6 flex flex-col justify-center items-center md:items-end md:mt-20">
            <motion.div 
              style={{ y: yMove }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[280px] bg-white p-3 shadow-2xl relative group overflow-hidden transform rotate-2 md:rotate-3"
            >
               <div className="overflow-hidden">
                 <img 
                   src="https://images.unsplash.com/photo-1522008342704-6b265b543c46?auto=format&fit=crop&q=80" 
                   alt="Detail memory" 
                   className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-all duration-[2s] ease-out"
                 />
               </div>
               <p className="mt-4 font-sans text-[9px] uppercase tracking-[0.2em] text-center text-dusty-grey mb-1">02:14 PM</p>
            </motion.div>
         </div>
         
         <div className="md:col-span-12 flex justify-center mt-10 md:-mt-10 relative z-30">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-serif italic text-2xl md:text-3xl max-w-[400px] text-center text-rich-ink leading-relaxed px-6 py-8 bg-warm-paper/80 backdrop-blur-md rounded-2xl shadow-sm border border-dusty-grey/5"
            >
              "The outtakes hold the most truth."
            </motion.p>
         </div>

         {/* Detail 3 Wide Pan */}
         <div className="md:col-span-12 flex justify-center mt-20 md:mt-32">
             <div className="relative w-full aspect-square md:aspect-[21/9] overflow-hidden group shadow-lg">
                 <motion.img 
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 2, ease: "easeOut" }}
                   src="https://images.unsplash.com/photo-1549488344-c6da71cecb7b?auto=format&fit=crop&q=80" 
                   className="w-full h-full object-cover transition-all duration-[2s] bg-rich-ink/10"
                   alt="Cinematic detail"
                 />
                 <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end text-white/90 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase pointer-events-none">
                    <span className="font-medium">Rec. 001</span>
                    <span className="opacity-70 group-hover:opacity-100 transition-opacity duration-1000">New York — 11.14.23</span>
                 </div>
             </div>
         </div>

      </div>
    </section>
  );
}
