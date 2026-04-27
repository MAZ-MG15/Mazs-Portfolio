import Link from "next/link";
import { Check } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "OV HOLIDAYS PTE LTD",
      role: "Multimedia Designer",
      duration: "Nov 2024 – Dec 2025",
      description: "Engineered 50+ high-conversion social media assets and brand systems for premium Maldivian resorts. Led end-to-end design for luxury hospitality marketing company spanning multiple resort properties.",
      achievements: [
        "Designed 50+ campaign assets optimized for Meta and Google platforms",
        "Established brand governance system ensuring consistency across 15+ resorts",
        "Produced motion graphics and video content for Instagram and TikTok",
        "Refined brand identity including logo, loyalty cards, and collateral"
      ],
      responsibilities: [
        "Brand strategy and visual identity refinement",
        "High-conversion social media campaign design",
        "Video production and motion graphics",
        "Multi-property brand consistency management"
      ],
      linkText: "View OV Holidays Work \u2192",
      linkHref: "#work"
    },
    {
      company: "MUSLIM MAJLIS, UNIVERSITY OF COLOMBO",
      role: "Chief Editor & Creative Director",
      duration: "Sep 2024 – Jan 2026",
      description: "Built and led creative team managing all digital and print communications for university's largest student organization (500+ members). Redesigned organizational brand identity and established visual standards.",
      achievements: [
        "Designed official logo and comprehensive brand identity system",
        "Recruited and mentored 5+ creative team members",
        "Directed UI/UX improvements for organization website",
        "Established editorial pipeline ensuring consistent quality"
      ],
      responsibilities: [
        "Creative leadership and team mentorship",
        "Brand identity development and visual consistency",
        "Editorial pipeline management and quality control",
        "Website UI/UX design and implementation"
      ],
      linkText: "View Muslim Majlis Work \u2192",
      linkHref: "#work"
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-12 text-center md:text-left">
          Featured Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group p-8 md:p-10 border border-border-subtle bg-white/5 backdrop-blur-sm rounded-lg transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="mb-6">
                <h3 className="text-[16px] font-bold text-text-primary tracking-[1px] uppercase mb-1">
                  {exp.company}
                </h3>
                <p className="text-[14px] text-gold font-medium">
                  {exp.role} <span className="text-text-secondary font-normal mx-2">|</span> {exp.duration}
                </p>
              </div>

              <p className="text-[14px] leading-[1.8] text-[#E8E8E8] mb-8">
                {exp.description}
              </p>

              <div className="mb-8">
                <h4 className="text-[12px] uppercase tracking-[0.5px] text-gold mb-4 font-semibold">
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] text-[#B8B8B8] leading-[1.6]">
                      <Check className="w-[14px] h-[14px] text-gold mt-[3px] shrink-0" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-[12px] uppercase tracking-[0.5px] text-gold mb-4 font-semibold">
                  Core Responsibilities
                </h4>
                <ul className="space-y-3 list-disc pl-5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="text-[13px] text-[#B8B8B8] leading-[1.6]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border-subtle">
                <Link 
                  href={exp.linkHref}
                  className="inline-flex items-center text-[13px] font-medium text-[#A8A8A8] group-hover:text-gold transition-colors duration-300"
                >
                  {exp.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
