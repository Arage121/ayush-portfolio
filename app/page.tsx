"use client";

import { useSyncExternalStore } from "react";
import BasicPage from "./basic/page";
import AdvancedPage from "./advanced/page";
import type { GraphicsMode } from "./components/GraphicsModeButton";

function subscribeToMode(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-mode-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-mode-change", onStoreChange);
  };
}

function getModeSnapshot(): GraphicsMode {
  return localStorage.getItem("mode") === "basic" ? "basic" : "advanced";
}

export default function Page() {
  const mode = useSyncExternalStore(subscribeToMode, getModeSnapshot, () => null);

  const handleModeChange = (selected: GraphicsMode) => {
    localStorage.setItem("mode", selected);
    window.dispatchEvent(new Event("portfolio-mode-change"));
  };

  if (!mode) return null;

  if (mode === "basic") {
    return <BasicPage onModeChange={handleModeChange} />;
  }

  return <AdvancedPage onModeChange={handleModeChange} />;
}
