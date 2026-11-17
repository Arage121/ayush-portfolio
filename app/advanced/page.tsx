import NodeBackground from "../components/advanced/NodeBackground";
import GrainOverlay from "../components/advanced/GrainOverlay";
import Cursor from "../components/advanced/Cursor";
import AdvancedNav from "../components/advanced/AdvancedNav";
import AdvancedHero from "../components/advanced/AdvancedHero";
import AdvancedAbout from "../components/advanced/AdvancedAbout";
import AdvancedSkills from "../components/advanced/AdvancedSkills";
import AdvancedProjects from "../components/advanced/AdvancedProjects";
import AdvancedContact from "../components/advanced/AdvancedContact";
import type { GraphicsMode } from "../components/GraphicsModeButton";

export default function AdvancedPage({
  onModeChange,
}: {
  onModeChange: (mode: GraphicsMode) => void;
}) {
  return (
    <div className="bg-[#070707] text-white min-h-screen 2xl:px-40">
      {/* Fixed canvas node network — sits behind all content */}
      <NodeBackground />
      <GrainOverlay />

      {/* Cursor overlay */}
      <Cursor />

      {/* Fixed nav */}
      <AdvancedNav onModeChange={onModeChange} />

      {/* All page content sits above the canvas */}
      <main className="mx-auto w-full max-w-[1920px]">
        <AdvancedHero />
        <AdvancedAbout />
        <AdvancedSkills />
        <AdvancedProjects />
        <AdvancedContact />
      </main>

      <footer className="relative z-10 border-t border-white/5 py-8">
        <div className="mx-auto flex max-w-[1920px] flex-col items-center justify-between gap-3 px-8 sm:flex-row md:px-16">
          <p className="text-[10px] text-white/15 tracking-wider">
            &copy; 2026 Ayush Raj. All rights reserved.
          </p>
          <p className="text-[10px] text-white/10 tracking-wider">
            Built with Next.js &amp; GSAP
          </p>
        </div>
      </footer>
    </div>
  );
}
