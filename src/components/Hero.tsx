export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-background-secondary/50 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-start mt-10 md:mt-0">
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
        </div>
      </div>
    </section>
  );
}
