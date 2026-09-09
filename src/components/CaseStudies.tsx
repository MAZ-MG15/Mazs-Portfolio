"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { motion } from "framer-motion";

type CaseStudy = {
  id: string;
  client: string;
  label: string;
  title: string;
  description: string;
  image: string;
  result: string;
  challenge: string;
  approach: string[];
  impact: string;
  tools: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "ov-holidays",
    client: "OV Holidays PTE LTD",
    label: "Luxury hospitality · Brand & campaign",
    title: "Making premium travel feel unmistakably premium",
    description: "A visual system and campaign direction for a luxury travel company representing some of the Maldives' most desirable resorts.",
    image: "/images/ovh_soneva_fushi.jpg",
    result: "50+ campaign assets across 15+ resort brands",
    challenge: "OV Holidays needed a more consistent, premium visual language across social campaigns, resort features, and sales collateral.",
    approach: [
      "Created a refined campaign system for print and digital touchpoints.",
      "Designed high-engagement social carousels and resort storytelling.",
      "Produced motion graphics and video edits for short-form platforms."
    ],
    impact: "A cohesive luxury aesthetic that made content easier to scale across multiple resort properties and channels.",
    tools: ["Photoshop", "Illustrator", "After Effects", "Premiere Pro"]
  },
  {
    id: "muslim-majlis",
    client: "Muslim Majlis · University of Colombo",
    label: "Community · Creative direction",
    title: "Building a brand system for a growing student community",
    description: "A complete identity and editorial system that helped a 500+ member organisation communicate with clarity and consistency.",
    image: "/images/Majlis/LOGO Competition Winner Post1.jpg",
    result: "5+ creatives mentored through a consistent editorial pipeline",
    challenge: "The organisation needed an identity that could work across events, announcements, recruitment, and digital platforms while keeping a volunteer team aligned.",
    approach: [
      "Designed the official logo and a flexible visual identity system.",
      "Established templates and quality standards for recurring communications.",
      "Led and mentored a creative team across digital and print work."
    ],
    impact: "A repeatable creative workflow that improved consistency across the organisation's public-facing communications.",
    tools: ["Illustrator", "Photoshop", "Figma", "Editorial design"]
  }
];

export default function CaseStudies() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCaseStudy(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCaseStudy ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCaseStudy]);

  return (
    <section className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[12px] uppercase tracking-[2px] text-gold font-semibold mb-4">Selected thinking</p>
            <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary">Featured case studies</h2>
          </div>
          <p className="text-[14px] text-text-secondary leading-[1.7] max-w-[360px] md:text-right">
            A closer look at the strategy, systems, and outcomes behind the visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {caseStudies.map((caseStudy, index) => (
            <motion.button
              key={caseStudy.id}
              type="button"
              onClick={() => setSelectedCaseStudy(caseStudy)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.99 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group text-left border border-border-subtle rounded-lg overflow-hidden bg-background-secondary transition-colors duration-500 hover:border-gold hover:shadow-[0_16px_50px_rgba(212,175,55,0.08)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute left-6 bottom-5 text-[11px] uppercase tracking-[1.5px] text-white/80">
                  {caseStudy.client}
                </span>
              </div>
              <div className="p-7 md:p-8">
                <p className="text-[11px] uppercase tracking-[1.5px] text-gold font-semibold mb-4">{caseStudy.label}</p>
                <h3 className="text-[21px] md:text-[24px] font-semibold text-text-primary leading-[1.25] mb-4">{caseStudy.title}</h3>
                <p className="text-[14px] text-text-secondary leading-[1.8] mb-6">{caseStudy.description}</p>
                <div className="flex items-center justify-between gap-4 pt-5 border-t border-border-subtle">
                  <span className="text-[12px] text-text-primary leading-[1.5]">{caseStudy.result}</span>
                  <span className="inline-flex items-center gap-2 shrink-0 text-[12px] uppercase tracking-[1px] text-gold group-hover:translate-x-1 transition-transform">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <button
            type="button"
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold transition-colors z-[110]"
            onClick={() => setSelectedCaseStudy(null)}
            aria-label="Close case study"
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[88vh] overflow-y-auto bg-background-secondary border border-border-subtle rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] custom-scrollbar"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full h-[220px] md:h-[320px] border-b border-border-subtle">
              <Image
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
            </div>

            <div className="p-7 md:p-12">
              <p className="text-[11px] uppercase tracking-[1.8px] text-gold font-semibold mb-4">{selectedCaseStudy.label}</p>
              <h3 className="text-[28px] md:text-[38px] font-semibold text-text-primary leading-[1.15] mb-10">{selectedCaseStudy.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-12">
                <div>
                  <h4 className="text-[12px] uppercase tracking-[1px] text-gold mb-3 font-semibold">The challenge</h4>
                  <p className="text-[14px] text-text-secondary leading-[1.8]">{selectedCaseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="text-[12px] uppercase tracking-[1px] text-gold mb-3 font-semibold">The outcome</h4>
                  <p className="text-[14px] text-text-secondary leading-[1.8]">{selectedCaseStudy.impact}</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border-subtle">
                <h4 className="text-[12px] uppercase tracking-[1px] text-gold mb-4 font-semibold">The approach</h4>
                <ul className="list-disc pl-5 text-[14px] text-text-secondary space-y-3 marker:text-gold">
                  {selectedCaseStudy.approach.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className="mt-10 pt-8 border-t border-border-subtle">
                <h4 className="text-[12px] uppercase tracking-[1px] text-gold mb-4 font-semibold">Tools & disciplines</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCaseStudy.tools.map((tool) => (
                    <span key={tool} className="text-[12px] px-4 py-2 bg-white/5 border border-border-subtle rounded-md text-text-primary">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
