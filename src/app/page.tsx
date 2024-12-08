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
import Preloader from "./components/loaders/Preloader";

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
      {!showContent && <Preloader />}
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
