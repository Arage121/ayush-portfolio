import Navbar from "../components/Navbar";
import Hero from "../components/basic/Hero";
import About from "../components/basic/About";
import Skills from "../components/basic/Skills";
import Projects from "../components/basic/Projects";
import Contact from "../components/basic/Contact";
import Footer from "../components/basic/Footer";
import type { GraphicsMode } from "../components/GraphicsModeButton";

export default function BasicPage({
  onModeChange,
}: {
  onModeChange: (mode: GraphicsMode) => void;
}) {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] font-sans">
      <Navbar onModeChange={onModeChange} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
