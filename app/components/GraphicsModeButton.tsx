"use client";

export type GraphicsMode = "basic" | "advanced";

type GraphicsModeButtonProps = {
  mode: GraphicsMode;
  onModeChange: (mode: GraphicsMode) => void;
};

export default function GraphicsModeButton({
  mode,
  onModeChange,
}: GraphicsModeButtonProps) {
  const isAdvanced = mode === "advanced";
  const buttonTheme = isAdvanced
    ? "border-white/10 bg-white/[0.04] text-white/55 hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus-visible:outline-white"
    : "border-gray-200 bg-white/70 text-gray-600 hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400 dark:hover:border-gray-700 dark:hover:bg-white/[0.08] dark:hover:text-white focus-visible:outline-gray-500";

  return (
    <div className="flex shrink-0 items-center gap-2">
      <span
        className={`hidden min-[420px]:inline whitespace-nowrap font-serif text-sm italic sm:text-base ${
          isAdvanced ? "text-[#f1e7d8]" : "text-gray-800 dark:text-[#f1e7d8]"
        }`}
      >
        {isAdvanced ? "Device hanging?" : "Need more detail?"}
      </span>
      <button
        type="button"
        aria-label={isAdvanced ? "Lower graphics" : "Switch to HD graphics"}
        onClick={() => onModeChange(isAdvanced ? "basic" : "advanced")}
        className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-medium backdrop-blur-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-xs tracking-wide ${buttonTheme}`}
      >
        {isAdvanced ? "Lower graphics" : "HD graphics"}
      </button>
    </div>
  );
}
