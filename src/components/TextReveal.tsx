import { motion } from "motion/react";

export function TextReveal({ 
  text, 
  className = "", 
  delay = 0, 
  blur = false 
}: { 
  text: string; 
  className?: string; 
  delay?: number; 
  blur?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-top py-2 -my-2">
          <motion.span
            initial={{ y: "110%", opacity: blur ? 0 : 1, filter: blur ? "blur(12px)" : "blur(0px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block origin-bottom-left"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
