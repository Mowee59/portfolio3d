import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
export default function Home() {
  return (
    <main className="background-gradient min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
