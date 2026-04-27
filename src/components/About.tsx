export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background-secondary border-y border-border-subtle relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-8">
            Strategic design that elevates luxury brands.
          </h2>
          <div className="flex flex-col gap-6 text-[14px] md:text-[16px] text-text-secondary leading-[1.8]">
            <p>
              Creative strategist and brand designer specializing in <strong className="text-gold font-medium">luxury hospitality</strong>. Over the past 4 years, I have architected compelling visual identities and motion narratives that seamlessly blend high-end aesthetics with technical precision.
            </p>
            <p>
              My expertise in digital content creation and video production is elevated by a mastery of <strong className="text-gold font-medium">AI-driven workflows</strong> and full-stack design principles. By leading creative teams with this forward-thinking approach, I ensure every campaign delivers maximum visual impact alongside operational efficiency.
            </p>
            <p className="text-[13px] uppercase tracking-[1px] text-gold mt-4 pt-4 border-t border-border-subtle inline-block">
              Currently finishing my BICT degree at the University of Colombo, bridging the gap between creative storytelling and IT innovation. For luxury brands, this means delivering premium digital experiences rooted in structured data, user behavior, and strategic positioning.
            </p>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden border border-border-subtle bg-background">
          {/* We'll use a placeholder or image here */}
          <div className="absolute inset-0 bg-gold/5 mix-blend-overlay"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/DP.png" 
            alt="Mohammed Muaaz" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
