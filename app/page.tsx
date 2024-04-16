import { Hero } from "@/components/base/Hero";
import { Navbar } from "@/components/base/Navbar";
import { Projects } from "@/components/base/Projects";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
