import { Hero } from "@/components/base/Hero";
import { Navbar } from "@/components/base/Navbar";
import { AboutSection } from "@/components/base/AboutSection";
import HireMe from "@/components/base/HireMe";
import Image from "next/image";
import { EvervaultCardDemo } from "@/components/base/Card";
import Skills from "@/components/base/Skills";
import StatsSection from "@/components/base/StatsSection";
import ProjectsSection from "@/components/base/ProjectsSection";
import Footer from "@/components/base/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <StatsSection />
      <HireMe />
      {/* <ProjectsSection /> */}
      <Skills />
      <Footer />
    </div>
  );
}
