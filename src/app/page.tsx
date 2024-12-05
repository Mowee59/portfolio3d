"use client";

import Hero from "./components/hero/Hero";

import { withLazyLoad } from "./components/loaders/WithLazyLoad";
import React from "react";
import LoadingFallback from "./components/hoc/LoadingFallback";
const LazyAbout = withLazyLoad(
  React.lazy(() => import("./components/about/About")),
  {
    fallback: <LoadingFallback id="about" />,
    threshold: 0.1,
  },
);

const LazyProjects = withLazyLoad(
  React.lazy(() => import("./components/projects/Projects")),
  {
    fallback: <LoadingFallback id="projects" />,
    threshold: 0.1,
  },
);
const LazyWhyMe = withLazyLoad(
  React.lazy(() => import("./components/whyme/WhyMe")),
  {
    fallback: <LoadingFallback id="whyme" />,
    threshold: 0.1,
  },
);
const LazyContact = withLazyLoad(
  React.lazy(() => import("./components/contact/Contact")),
  {
    fallback: <LoadingFallback id="contact" />,
    threshold: 0.1,
  },
);

export default function Home() {
  return (
    <main>
      <Hero />
      <LazyAbout />
      <LazyProjects />
      <LazyWhyMe />
      <LazyContact />
    </main>
  );
}
