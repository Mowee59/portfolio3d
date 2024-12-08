"use client";

import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import WhyMe from "./components/whyme/WhyMe";
import Contact from "./components/contact/Contact";
import React from "react";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <WhyMe />
      <Contact />
    </main>
  );
}
