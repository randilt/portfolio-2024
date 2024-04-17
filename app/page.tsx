import { Hero } from "@/components/base/Hero";
import { Navbar } from "@/components/base/Navbar";
import { AboutSection } from "@/components/base/AboutSection";

import Image from "next/image";
import { EvervaultCardDemo } from "@/components/base/Card";
import Skills from "@/components/base/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Skills />
    </div>
  );
}
