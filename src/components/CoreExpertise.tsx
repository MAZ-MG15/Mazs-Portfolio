import { Palette, Smartphone, Video } from "lucide-react";

export default function CoreExpertise() {
  const expertise = [
    {
      icon: <Palette className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />,
      title: "Brand Identity",
      description: "Logo design, visual systems, and brand governance for luxury hospitality and lifestyle brands."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />,
      title: "Digital Strategy",
      description: "High-conversion social campaigns, performance ad creative, and audience engagement optimization."
    },
    {
      icon: <Video className="w-8 h-8 text-gold mb-6" strokeWidth={1.5} />,
      title: "Motion & Video",
      description: "Motion graphics, video editing, and digital storytelling across web and social platforms."
    }
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="p-[30px] border border-border-subtle bg-white/2 rounded-lg transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:-translate-y-1 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110 origin-left">
                {item.icon}
              </div>
              <h3 className="text-[16px] md:text-[18px] font-semibold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
