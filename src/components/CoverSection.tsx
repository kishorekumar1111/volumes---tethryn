import { motion } from "motion/react";
import { TextReveal } from "./TextReveal";

export function CoverSection({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100vh",
        scale: 0.95,
        filter: "blur(20px)",
        transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-rich-ink text-warm-paper overflow-hidden origin-top"
    >
      <div className="absolute inset-0 z-0 bg-rich-ink">
        <motion.div
          animate={{ scale: [1.05, 1.0] }}
          transition={{ duration: 40, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1549488344-c6da71cecb7b?auto=format&fit=crop&q=80"
            alt="Cinematic atmosphere"
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </motion.div>
        {/* Soft moving gradients for atmospheric lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-rich-ink via-rich-ink/50 to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-rich-ink/50 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center w-full max-w-7xl mx-auto pt-20 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] text-muted-gold mb-16 md:mb-24 font-sans font-medium"
        >
          Volume 01
        </motion.p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-[7rem] leading-[1.05] mb-20 md:mb-32 flex flex-col w-full px-4 font-light tracking-tight">
          <TextReveal text="Some people become" blur delay={1.0} />
          <TextReveal text="entire chapters" blur delay={1.4} className="italic text-white/90 my-2 md:my-4 pr-12 md:pr-0" />
          <TextReveal text="in our lives." blur delay={1.8} />
        </h1>

        <motion.button
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          onClick={onOpen}
          className="group relative px-10 py-5 font-sans text-xs uppercase tracking-[0.25em] text-soft-ivory overflow-hidden border border-white/20 rounded-full hover:border-white/50 transition-all duration-700 ease-out"
        >
          <span className="relative z-10 flex items-center gap-4">
            Open Volume
            <motion.span 
              animate={{ x: [0, 5, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </span>
          <div className="absolute inset-0 h-full w-0 bg-white/10 group-hover:w-full transition-all duration-700 ease-out z-0" />
        </motion.button>
      </div>
    </motion.div>
  );
}
