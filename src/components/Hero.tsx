"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-secondary/50 via-background to-background pointer-events-none" />
      <motion.div
        aria-hidden="true"
        className="absolute -right-40 top-24 h-[420px] w-[420px] rounded-full border border-gold/10"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-start"
        >
          <p className="text-[11px] md:text-[12px] uppercase tracking-[2px] text-gold font-semibold mb-5">Portfolio · 2026</p>
          <h1 className="text-4xl md:text-[56px] font-semibold text-text-primary tracking-[-1px] leading-tight mb-4">
            Mohammed Muaaz
          </h1>
          <h2 className="text-xl md:text-[20px] font-semibold text-gold italic mb-6">
            Creative Strategist & Brand Designer
          </h2>
          <p className="text-[14px] md:text-[16px] text-text-secondary max-w-[500px] leading-[1.8] mb-10">
            Transforming luxury and hospitality brands through strategic visual identity, high-impact design systems, and performance-driven creative direction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#work"
              className="flex items-center justify-center bg-gold text-background px-8 py-3.5 text-[14px] uppercase tracking-[1px] font-semibold hover:bg-white hover:text-background transition-colors duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center border border-gold text-gold px-8 py-3.5 text-[14px] uppercase tracking-[1px] font-semibold hover:bg-gold/10 hover:shadow-[inset_0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/images/CV.pdf"
              download
              className="flex items-center justify-center px-4 py-3.5 text-[13px] uppercase tracking-[1px] font-semibold text-text-secondary hover:text-gold transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-[540px] w-full border-t border-border-subtle pt-6">
            <div>
              <p className="text-[24px] md:text-[28px] font-semibold text-gold">4+</p>
              <p className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[1px] text-text-secondary">Years experience</p>
            </div>
            <div>
              <p className="text-[24px] md:text-[28px] font-semibold text-gold">50+</p>
              <p className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[1px] text-text-secondary">Campaign assets</p>
            </div>
            <div>
              <p className="text-[24px] md:text-[28px] font-semibold text-gold">15+</p>
              <p className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[1px] text-text-secondary">Luxury brands</p>
            </div>
          </div>
        </motion.div>

        <div className="relative min-h-[400px] md:min-h-[520px] flex items-center justify-center" aria-label="Selected project visuals">
          <motion.div
            aria-hidden="true"
            className="absolute w-[72%] aspect-square rounded-full border border-gold/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute left-[8%] top-[16%] w-[47%] aspect-[4/5] overflow-hidden rounded-lg border border-white/20 shadow-2xl shadow-black/30 rotate-[-8deg]"
            initial={{ opacity: 0, y: 28, rotate: -14 }}
            animate={{ opacity: 1, y: [0, -10, 0], rotate: -8 }}
            transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.8, delay: 0.2 } }}
          >
            <Image src="/images/ovh_soneva_fushi.jpg" alt="Luxury hospitality campaign visual" fill priority sizes="(max-width: 768px) 45vw, 25vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent" />
          </motion.div>
          <motion.div
            className="absolute right-[7%] top-[8%] w-[42%] aspect-[4/5] overflow-hidden rounded-lg border border-white/20 shadow-2xl shadow-black/30 rotate-[8deg]"
            initial={{ opacity: 0, y: 22, rotate: 14 }}
            animate={{ opacity: 1, y: [0, 12, 0], rotate: 8 }}
            transition={{ opacity: { duration: 0.8, delay: 0.35 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.8, delay: 0.35 } }}
          >
            <Image src="/images/Majlis/LOGO Competition Winner Post1.jpg" alt="Student organisation identity design" fill sizes="(max-width: 768px) 42vw, 23vw" className="object-cover" />
            <div className="absolute inset-0 bg-gold/10 mix-blend-screen" />
          </motion.div>
          <motion.div
            className="absolute bottom-[9%] left-[25%] w-[42%] aspect-[4/3] overflow-hidden rounded-lg border-2 border-gold/70 shadow-2xl shadow-black/40 rotate-[3deg]"
            initial={{ opacity: 0, y: 35, scale: 0.94 }}
            animate={{ opacity: 1, y: [0, -7, 0], scale: 1 }}
            transition={{ opacity: { duration: 0.8, delay: 0.5 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.8, delay: 0.5 } }}
          >
            <Image src="/images/layora.jpg" alt="Freelance brand identity design" fill sizes="(max-width: 768px) 42vw, 23vw" className="object-cover" />
          </motion.div>
          <p className="absolute bottom-0 right-2 text-[10px] uppercase tracking-[2px] text-text-secondary">Identity · Digital · Motion</p>
        </div>
      </div>
    </section>
  );
}
