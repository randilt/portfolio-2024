"use client";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";

const inter = Inter({ subsets: ["latin"] });

export function AboutSection() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(inter.className, "text-xl mb-4 text-white")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert text-white">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Who Am I?",
    description: (
      <>
        <p>
          I'm Randil Tharusha, a dedicated software developer, tech enthusiast,
          and gamer from Gampaha, Sri Lanka. At 20 years old, I'm currently
          honing my skills as a freelance web developer and as an undergraduate
          student in Software Engineering. My journey in technology isn't just
          about personal growth; it's also about sharing knowledge and
          empowering others to excel.
        </p>
        <p>
          Driven by a deep-seated passion for teaching, I find joy in guiding
          fellow enthusiasts through the intricacies of coding and technology.
          Whether it's breaking down complex concepts into digestible pieces or
          providing hands-on assistance, I thrive on seeing others succeed. From
          mentoring peers to leading workshops, I'm committed to fostering a
          supportive learning community where everyone has the opportunity to
          thrive.
        </p>
      </>
    ),
    badge: "Introduction",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tech Interests and Future Goals",
    description: (
      <>
        <p>
          I'm passionate about software engineering and have my sights set on
          becoming a DevOps engineer to streamline development processes and
          enhance system reliability. Concurrently, I'm eager to contribute to
          open source projects that shape the future of technology.
          Additionally, I'm committed to teaching and mentoring others about
          technology to empower the next generation of innovators.
        </p>
      </>
    ),
    badge: "Vision for the Future",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
