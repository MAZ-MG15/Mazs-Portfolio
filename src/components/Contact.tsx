export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background-secondary border-t border-border-subtle relative z-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-6">
          Let&apos;s create something extraordinary.
        </h2>
        <p className="text-[14px] text-text-secondary mb-12 max-w-[500px] mx-auto leading-[1.8]">
          Available for freelance opportunities and full-time roles in brand identity, digital strategy, and multimedia design.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
          <a href="mailto:itzmazua@gmail.com" className="text-[14px] md:text-[16px] text-text-primary hover:text-gold transition-colors font-medium tracking-[0.5px]">
            itzmazua@gmail.com
          </a>
          <span className="hidden md:block w-1 h-1 bg-gold rounded-full"></span>
          <a href="tel:+94778405184" className="text-[14px] md:text-[16px] text-text-primary hover:text-gold transition-colors font-medium tracking-[0.5px]">
            +94 77 840 5184
          </a>
          <span className="hidden md:block w-1 h-1 bg-gold rounded-full"></span>
          <span className="text-[14px] md:text-[16px] text-text-secondary">
            Dehiwala, Sri Lanka
          </span>
        </div>

        <div className="flex justify-center">
          <a
            href="mailto:itzmazua@gmail.com"
            className="inline-flex items-center justify-center bg-gold text-background px-10 py-4 text-[14px] uppercase tracking-[1px] font-semibold hover:bg-white transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
