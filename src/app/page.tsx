"use client";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import WhyMe from "./components/whyme/WhyMe";
import Contact from "./components/contact/Contact";
import React, { useEffect, useState } from "react";
import { Loader } from "@react-three/drei";
import { LoadingProvider } from "./context/LoadingContext";
import { useLoading } from "./context/LoadingContext";

const expectedComponents = ["About", "Hero", "Projects", "WhyMe", "Contact"];

const Content: React.FC = () => {
  const { allComponentsLoaded } = useLoading();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (allComponentsLoaded) {
      const timer = setTimeout(() => setShowContent(true), 1000); // Delay to ensure smooth transition
      return () => clearTimeout(timer);
    }
  }, [allComponentsLoaded]);

  return (
    <main>
      {!showContent && (
        <div className="absolute left-0 top-0 z-50 h-screen w-screen bg-black">
          <h1 className="text-center text-2xl text-white">Chargement</h1>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}
      >
        <Hero />
        <About />
        <Projects />
        <WhyMe />
        <Contact />
      </div>
    </main>
  );
};

export default function Home() {
  return (
    <LoadingProvider expectedComponents={expectedComponents}>
      <Content />
    </LoadingProvider>
  );
}
