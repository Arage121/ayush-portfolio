import Navbar from "../components/Navbar";
import Hero from "../components/basic/Hero";
import About from "../components/basic/About";
import Skills from "../components/basic/Skills";
import Projects from "../components/basic/Projects";
import Contact from "../components/basic/Contact";
import Footer from "../components/basic/Footer";

export default function BasicPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] font-sans">
      <Navbar />
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
