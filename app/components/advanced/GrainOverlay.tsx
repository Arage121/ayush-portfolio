const GrainOverlay = () => (
  <div
    className="fixed inset-0 pointer-events-none z-[900] mix-blend-overlay"
    style={{ opacity: 0.032 }}
    aria-hidden
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  </div>
);

export default GrainOverlay;
