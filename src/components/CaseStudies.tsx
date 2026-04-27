"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export default function CaseStudies() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <section className="py-20 md:py-32 bg-background relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary mb-16 border-l-4 border-gold pl-4">
          Featured Case Study
        </h2>

        {/* Clickable Card */}
        <div 
          onClick={() => setIsOpen(true)}
          className="group cursor-pointer border border-border-subtle rounded-lg overflow-hidden bg-background-secondary flex flex-col md:flex-row transition-all duration-500 hover:border-gold hover:shadow-[0_10px_40px_rgba(212,175,55,0.05)]"
        >
          <div className="w-full md:w-1/2 relative min-h-[300px] border-b md:border-b-0 md:border-r border-border-subtle overflow-hidden">
            <Image 
              src="/images/ovh_soneva_fushi.jpg" 
              alt="OV Holidays Campaign Strategy" 
              fill
              loading="lazy"
              className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="text-[12px] uppercase tracking-[2px] text-gold font-semibold mb-4">
                Brand Strategy & Campaign
              </div>
              <h3 className="text-[24px] md:text-[28px] font-semibold text-text-primary mb-6">
                OV Holidays Campaign Strategy
              </h3>
              <p className="text-[14px] text-text-secondary leading-[1.8] mb-8 line-clamp-3">
                Elevate the digital presence of OV Holidays to better resonate with ultra-high-net-worth individuals seeking bespoke luxury travel experiences in the Maldives.
              </p>
              <div className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[1px] font-semibold text-gold group-hover:translate-x-2 transition-transform duration-300">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold transition-colors z-[110]"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
          </button>
          
          <div 
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-background-secondary border border-border-subtle rounded-lg flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="w-full relative h-[300px] shrink-0 border-b border-border-subtle">
              <Image 
                src="/images/ovh_soneva_fushi.jpg" 
                alt="OV Holidays Campaign Strategy" 
                fill
                loading="lazy"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent" />
            </div>

            {/* Modal Content */}
            <div className="p-8 md:p-12">
              <div className="text-[12px] uppercase tracking-[2px] text-gold font-semibold mb-4">
                Brand Strategy & Campaign
              </div>
              <h3 className="text-[28px] md:text-[36px] font-semibold text-text-primary mb-12">
                OV Holidays Campaign Strategy
              </h3>

              <div className="space-y-10">
                <div>
                  <h4 className="text-[16px] uppercase tracking-[1px] text-text-primary mb-3 font-semibold">The Challenge</h4>
                  <p className="text-[15px] text-text-secondary leading-[1.8]">
                    Elevate the digital presence of OV Holidays to better resonate with ultra-high-net-worth individuals seeking bespoke luxury travel experiences in the Maldives.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] uppercase tracking-[1px] text-text-primary mb-3 font-semibold">Design Approach</h4>
                  <p className="text-[15px] text-text-secondary leading-[1.8] mb-4">
                    A multi-phased approach focusing on visual storytelling:
                  </p>
                  <ul className="list-disc pl-5 text-[15px] text-text-secondary space-y-2 marker:text-gold">
                    <li>Refined brand identity assets for print and digital.</li>
                    <li>Designed high-engagement social media carousels.</li>
                    <li>Produced motion graphics for Instagram Reels.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[16px] uppercase tracking-[1px] text-text-primary mb-3 font-semibold">Results & Impact</h4>
                  <p className="text-[15px] text-text-secondary leading-[1.8]">
                    Increased brand visibility and engagement metrics across key social platforms, establishing a cohesive and premium aesthetic that aligns with luxury hospitality standards.
                  </p>
                </div>

                <div>
                  <h4 className="text-[16px] uppercase tracking-[1px] text-text-primary mb-4 font-semibold">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {["Photoshop", "Illustrator", "After Effects", "Premiere Pro"].map(tech => (
                      <span key={tech} className="text-[13px] px-4 py-2 bg-white/5 border border-border-subtle rounded-md text-text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
