import Hero from "./components/hero/Hero";
import About from "./components/about/About";
export default function Home() {
  return (
    <main className="background-gradient min-h-screen">
      <Hero />
      <About />
    </main>
  );
}
