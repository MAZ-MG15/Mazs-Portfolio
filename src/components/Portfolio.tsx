"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["All", "OV Holidays", "Traveller Club", "Muslim Majlis", "Freelance", "Viluxur", "Photography"];

const projects = [
  { id: 3, title: "The Den - Soneva Fushi", category: "OV Holidays", image: "/images/ovh_soneva_fushi.jpg" },
  { id: 6, title: "Waldorf Astoria Ithaafushi", category: "OV Holidays", image: "/images/ovh_waldorf_astoria.jpg" },
  { id: 34, title: "Logo Competition Winner", category: "Muslim Majlis", image: "/images/Majlis/LOGO Competition Winner Post1.jpg" },
  { id: 15, title: "Visit OV Holidays", category: "OV Holidays", image: "/images/ovh_visit_dark.jpg" },
  { id: 13, title: "Celebrate Eid by the Ocean", category: "OV Holidays", image: "/images/ovh_eid_celebrate.jpg" },
  { id: 7, title: "Four Seasons Landaa Giraavaru", category: "OV Holidays", image: "/images/ovh_four_seasons.jpg" },
  { id: 5, title: "Top 5 Kids Clubs in Maldives", category: "OV Holidays", image: "/images/ovh_top_5_kids.jpg" },
  { id: 14, title: "Eid Maldives Campaign", category: "OV Holidays", image: "/images/ovh_eid_answer.jpg" },
  { id: 45, title: "Best Villas for Families", category: "Viluxur", image: "/images/Viluxur/best_villas_families.jpg" },
  { id: 2, title: "The Den - Soneva Jani", category: "OV Holidays", image: "/images/ovh_soneva_jani.jpg" },
  { id: 49, title: "One & Only Reethi Rah", category: "Viluxur", image: "/images/Viluxur/one_only_reethi_rah.jpg" },
  { id: 28, title: "Abu Bakr As-Siddiq Post", category: "Muslim Majlis", image: "/images/Majlis/abu_bakr_post.png" },
  { id: 1, title: "Little Griffins - JW Marriott", category: "OV Holidays", image: "/images/ovh_little_griffins.jpg" },
  { id: 4, title: "Top 3 Program Rating", category: "OV Holidays", image: "/images/ovh_program_rating.jpg" },
  { id: 8, title: "Most Family-Friendly Resorts", category: "OV Holidays", image: "/images/ovh_family_friendly.jpg" },
  { id: 9, title: "Soneva Fushi Family Rhythm", category: "OV Holidays", image: "/images/ovh_soneva_fushi_bw.jpg" },
  { id: 10, title: "The Big 5 Lenses", category: "OV Holidays", image: "/images/ovh_big_5_lenses.jpg" },
  { id: 11, title: "Hiring Graphic Designer Poster 1", category: "OV Holidays", image: "/images/ovh_hiring_1.jpg" },
  { id: 12, title: "Hiring Graphic Designer Poster 2", category: "OV Holidays", image: "/images/ovh_hiring_2.jpg" },
  { id: 16, title: "Uga Chena Huts Poster", category: "Traveller Club", image: "/images/ov_uga_chena.jpg" },
  { id: 17, title: "Gal Oya Lodge Poster", category: "Traveller Club", image: "/images/ov_gal_oya.jpg" },
  { id: 18, title: "Santani Wellness Poster", category: "Traveller Club", image: "/images/ov_santani.jpg" },
  { id: 19, title: "Jetwing Vil Uyana Poster", category: "Traveller Club", image: "/images/ov_jetwing.jpg" },
  { id: 20, title: "Wild Coast Tented Lodge Poster", category: "Traveller Club", image: "/images/ov_wild_coast.jpg" },
  { id: 21, title: "Joali Being Poster", category: "Traveller Club", image: "/images/ov_joali_being.jpg" },
  { id: 22, title: "Gili Lankanfushi Poster", category: "Traveller Club", image: "/images/ov_gili_lankanfushi.jpg" },
  { id: 23, title: "Six Senses Laamu Poster", category: "Traveller Club", image: "/images/ov_six_senses.jpg" },
  { id: 24, title: "Soneva Fushi Poster", category: "Traveller Club", image: "/images/ov_soneva_fushi.jpg" },
  { id: 25, title: "Bill Bensley Poster", category: "Traveller Club", image: "/images/ov_bill_bensley.jpg" },
  { id: 26, title: "Christina Ong Poster", category: "Traveller Club", image: "/images/ov_christina_ong.jpg" },
  { id: 27, title: "Sonu Shivdasani Poster", category: "Traveller Club", image: "/images/ov_sonu_shivdasani.jpg" },
  { id: 29, title: "Web Dev Team Recruitment", category: "Muslim Majlis", image: "/images/Majlis/web_dev_recruitment.jpg" },
  { id: 30, title: "Level Up Seminar", category: "Muslim Majlis", image: "/images/Majlis/level_up_seminar.jpg" },
  { id: 31, title: "Hijri 1447", category: "Muslim Majlis", image: "/images/Majlis/HIJRI 1447.jpg" },
  { id: 32, title: "Independence Day", category: "Muslim Majlis", image: "/images/Majlis/Independence day1.jpg" },
  { id: 33, title: "Inter University Tennis", category: "Muslim Majlis", image: "/images/Majlis/Inter University Champ Tennis.jpg" },
  { id: 35, title: "Wrestling Championship", category: "Muslim Majlis", image: "/images/Majlis/Wrestling L1.jpg" },
  { id: 36, title: "Guest Lecture - Dr. Asha", category: "Muslim Majlis", image: "/images/Majlis/Dr Asha.png" },
  { id: 37, title: "Layora Logo Design", category: "Freelance", image: "/images/layora.jpg" },
  { id: 38, title: "Crown Jewellery Logo Design", category: "Freelance", image: "/images/crown_jewellery.png" },
  { id: 39, title: "Blackshot Web Services", category: "Freelance", image: "/images/Freelance/blackshot_web_services.jpg" },
  { id: 40, title: "One Day Digital eCommerce", category: "Freelance", image: "/images/Freelance/oneday_ecommerce.jpg" },
  { id: 41, title: "Times Tech Project Seminar", category: "Freelance", image: "/images/Freelance/times_tech_seminar.jpg" },
  { id: 42, title: "Study Sphere Admission", category: "Freelance", image: "/images/Freelance/study_sphere_admission.jpg" },
  { id: 43, title: "Times Tech ICT Class", category: "Freelance", image: "/images/Freelance/times_tech_ict_class.jpg" },
  { id: 44, title: "Soneva Fushi Villa Suite", category: "Viluxur", image: "/images/Viluxur/soneva_fushi_villa.jpg" },
  { id: 46, title: "How We Choose - Family Focus", category: "Viluxur", image: "/images/Viluxur/how_we_choose_handprints.jpg" },
  { id: 47, title: "Soneva Jani Island Retreat", category: "Viluxur", image: "/images/Viluxur/soneva_jani_retreat.jpg" },
  { id: 48, title: "Soneva Fushi Experience", category: "Viluxur", image: "/images/Viluxur/soneva_fushi_dining.jpg" },
  { id: 50, title: "Velaa Private Island", category: "Viluxur", image: "/images/Viluxur/velaa_private_island.jpg" },
  { id: 51, title: "Four Seasons Landaa Giraavaru - Oceanfront", category: "Viluxur", image: "/images/Viluxur/four_seasons_landaa_oceanfront.jpg" },
  { id: 52, title: "Waldorf Astoria Ithaafushi", category: "Viluxur", image: "/images/Viluxur/waldorf_astoria_ithaafushi.jpg" },
  { id: 53, title: "Four Seasons Landaa - Pool View", category: "Viluxur", image: "/images/Viluxur/four_seasons_landaa_pool.jpg" },
  { id: 54, title: "One & Only Reethi Rah - Residence", category: "Viluxur", image: "/images/Viluxur/one_only_reethi_rah_3.jpg" },
  { id: 55, title: "Top 5 Family Friendly Resorts", category: "Viluxur", image: "/images/Viluxur/top_5_family_resorts.jpg" },
  { id: 56, title: "The Big Five Lenses", category: "Viluxur", image: "/images/Viluxur/big_five_lenses.jpg" },
  { id: 57, title: "Train Station Vibes", category: "Photography", image: "/images/Photography/train_station.jpg" },
  { id: 58, title: "Urban Nature", category: "Photography", image: "/images/Photography/skyscrapers_nature.jpg" },
  { id: 59, title: "Wildlife Portrait", category: "Photography", image: "/images/Photography/monkey_portrait.jpg" },
  { id: 60, title: "Tropical Serenity", category: "Photography", image: "/images/Photography/beach_coconut.jpg" },
  { id: 61, title: "The Red Mosque", category: "Photography", image: "/images/Photography/red_mosque.jpg" },
  { id: 62, title: "Cat Portrait", category: "Photography", image: "/images/Photography/cat_portrait.jpg" },
  { id: 63, title: "Nature Macro", category: "Photography", image: "/images/Photography/yellow_flower_macro.jpg" },
  { id: 64, title: "City Perspectives", category: "Photography", image: "/images/Photography/city_road_building.jpg" },
  { id: 65, title: "Dragonfly Macro", category: "Photography", image: "/images/Photography/dragonfly_macro.jpg" },
  { id: 66, title: "Night Street Mood", category: "Photography", image: "/images/Photography/night_street_bw.jpg" },
  { id: 67, title: "Photography 1", category: "Photography", image: "/images/Photography/photo_1.jpg" },
  { id: 68, title: "Photography 2", category: "Photography", image: "/images/Photography/photo_2.jpg" },
  { id: 69, title: "Photography 3", category: "Photography", image: "/images/Photography/photo_3.jpg" },
  { id: 70, title: "Photography 4", category: "Photography", image: "/images/Photography/photo_4.jpg" },
  { id: 71, title: "Photography 5", category: "Photography", image: "/images/Photography/photo_5.jpg" },
  { id: 72, title: "Photography 6", category: "Photography", image: "/images/Photography/photo_6.jpg" },
  { id: 73, title: "Red Mosque Architecture", category: "Photography", image: "/images/Photography/red_mosque_architecture.jpg" }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(12);
  };

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="work" className="py-20 md:py-32 bg-background-secondary relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <h2 className="text-[28px] md:text-[32px] font-semibold text-text-primary">
            Selected Work
          </h2>
          
          <div className="flex flex-wrap gap-3 md:justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 py-2 text-[12px] uppercase tracking-[1px] font-medium border transition-all duration-300 ${
                  activeFilter === cat 
                    ? "border-gold text-gold bg-gold/10" 
                    : "border-border-subtle text-text-secondary bg-transparent hover:border-gold hover:text-gold hover:bg-gold/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 10) * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={() => setSelectedImage(project.image)}
              className="cursor-pointer group relative aspect-[4/3] rounded-lg overflow-hidden border border-border-subtle bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 hover:border-gold hover:scale-[1.02]"
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-gold text-[12px] uppercase tracking-[2px] mb-2 font-medium">
                  {project.category}
                </span>
                <h3 className="text-white text-[18px] font-semibold tracking-wide">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center w-full px-4 md:px-0">
            <button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setVisibleCount(prev => prev + 12);
                  setIsLoading(false);
                }, 400);
              }}
              disabled={isLoading}
              className="w-full max-w-[300px] md:w-auto min-h-[44px] md:px-10 py-[14px] text-[13px] uppercase tracking-[1px] font-medium border border-gold text-gold bg-transparent rounded-[2px] transition-all duration-300 hover:bg-gold/10 hover:text-[#E8C652] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? "LOADING..." : "LOAD MORE"}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
          </button>
          
          <div 
            className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage} 
              alt="Preview" 
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  );
}
