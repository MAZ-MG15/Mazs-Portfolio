export default function Stats() {
  const stats = [
    { number: "50+", label: "Campaign Assets Designed" },
    { number: "4+", label: "Years Industry Experience" },
    { number: "8+", label: "Leadership & Mentorship Projects" },
    { number: "15+", label: "Global Luxury Brands Served" }
  ];

  return (
    <section className="py-20 bg-background border-y border-border-subtle relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gold/5 border-t-2 border-t-gold p-8 text-center flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300"
            >
              <div className="text-[36px] font-semibold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-[12px] uppercase tracking-[1px] text-text-secondary max-w-[150px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
