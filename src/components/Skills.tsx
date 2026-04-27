export default function Skills() {
  const coreExpertise = [
    "Graphic Design", "Brand Identity", "Social Media Strategy", 
    "Video Editing", "Motion Graphics", "Art Direction", "UI/UX Basics"
  ];

  const tools = [
    "Photoshop", "Illustrator", "After Effects", "Premiere Pro", 
    "InDesign", "Figma", "Sketch", "Lightroom"
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-2">Technical Arsenal</h2>
          <p className="text-text-secondary text-[14px]">The tools and skills I use to bring ideas to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-[16px] md:text-[18px] font-semibold text-gold mb-6 uppercase tracking-[1px]">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {coreExpertise.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 text-[13px] text-text-primary bg-white/5 border border-border-subtle rounded-md hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[16px] md:text-[18px] font-semibold text-gold mb-6 uppercase tracking-[1px]">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 text-[13px] text-text-primary bg-white/5 border border-border-subtle rounded-md hover:border-gold hover:text-gold transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
