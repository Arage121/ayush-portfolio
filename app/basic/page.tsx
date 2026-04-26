import About from "../components/basic/About";
import Hero from "../components/basic/Hero";
import Navbar from "../components/Navbar";

export default function BasicPage() {
  return (
    <div className="h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
