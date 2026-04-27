import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreExpertise from "@/components/CoreExpertise";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <FadeIn direction="none"><Hero /></FadeIn>
      <FadeIn><CoreExpertise /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Experience /></FadeIn>
      <FadeIn><Portfolio /></FadeIn>
      <FadeIn><CaseStudies /></FadeIn>
      <FadeIn><Skills /></FadeIn>
      <FadeIn><Stats /></FadeIn>
      <FadeIn><Contact /></FadeIn>
      <Footer />
    </main>
  );
}
