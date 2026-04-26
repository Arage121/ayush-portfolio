"use client";

import { useEffect, useState } from "react";
import BasicPage from "./basic/page";
import AdvancedPage from "./advanced/page";

export default function page() {
  const [mode, setMode] = useState<"basic" | "advanced" | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mode") as "basic" | "advanced";

    if (saved) {
      setMode(saved);
    } else {
      // Auto detect low-end device
      const isLowEnd =
        navigator.hardwareConcurrency <= 4 ||
        // @ts-ignore
        navigator.deviceMemory <= 4;

      setMode(isLowEnd ? "basic" : "advanced");
    }
  }, []);

  const handleSelect = (selected: "basic" | "advanced") => {
    localStorage.setItem("mode", selected);
    setMode(selected);
  };

  if (!mode) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-bold">Choose Your Experience</h1>

        <div className="flex gap-4">
          <button
            onClick={() => handleSelect("basic")}
            className="px-6 py-3 border rounded-lg"
          >
            ⚡ Basic (Fast)
          </button>

          <button
            onClick={() => handleSelect("advanced")}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            🚀 Advanced (Full Experience)
          </button>
        </div>
      </div>
    );
  }

  if (mode === "basic") return <BasicPage />;
  return <AdvancedPage />;
}
