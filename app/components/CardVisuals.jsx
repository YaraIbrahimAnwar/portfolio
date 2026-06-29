// Generated card "cover" visuals — sharp at any size, use your palette, need no image files.
// Used on the home page cards. Your real screenshots stay on the detail pages.

const fill = { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" };

// PhD — stylized spectrogram
export function SpectrogramTile() {
  const cols = 46, rows = 26, W = 400, H = 300;
  const cw = W / cols, ch = H / rows;
  const cells = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const v = Math.abs(Math.sin(c * 0.4 + r * 0.35) * Math.cos(c * 0.08 - r * 0.25));
      const op = (0.06 + v * 0.8).toFixed(2);
      cells.push(<rect key={`${c}-${r}`} x={c * cw} y={r * ch} width={cw + 0.5} height={ch + 0.5} fill="var(--accent)" opacity={op} />);
    }
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={fill} role="img" aria-label="Spectrogram">
      <rect width="400" height="300" fill="var(--card)" />
      {cells}
    </svg>
  );
}

// Vision — segmentation contour over a scan
export function SegmentationTile() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={fill} role="img" aria-label="Segmentation contour">
      <rect width="400" height="300" fill="var(--card)" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="0" y1={i * 25 + 12} x2="400" y2={i * 25 + 12} stroke="var(--line)" strokeWidth="1" opacity="0.5" />
      ))}
      <path d="M150 95 C 200 70, 280 95, 285 150 C 290 205, 230 230, 185 220 C 130 208, 110 150, 150 95 Z"
        fill="var(--soft)" fillOpacity="0.45" stroke="var(--accent)" strokeWidth="3" />
      <path d="M158 105 C 205 84, 272 106, 276 150 C 280 196, 228 217, 188 208 C 140 197, 124 150, 158 105 Z"
        fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.55" />
    </svg>
  );
}

// Plunia — mixed-reality overlay
export function MixedRealityTile() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={fill} role="img" aria-label="Mixed reality overlay">
      <rect width="400" height="300" fill="var(--card)" />
      <path d="M40 70 v-25 h25" fill="none" stroke="var(--accent)" strokeWidth="3" />
      <path d="M360 70 v-25 h-25" fill="none" stroke="var(--accent)" strokeWidth="3" />
      <path d="M40 230 v25 h25" fill="none" stroke="var(--accent)" strokeWidth="3" />
      <path d="M360 230 v25 h-25" fill="none" stroke="var(--accent)" strokeWidth="3" />
      <rect x="150" y="120" width="150" height="90" rx="10" fill="var(--soft)" fillOpacity="0.3" stroke="var(--accent)" strokeWidth="2" />
      <line x1="165" y1="145" x2="270" y2="145" stroke="var(--accent)" strokeWidth="3" opacity="0.8" />
      <line x1="165" y1="165" x2="250" y2="165" stroke="var(--accent)" strokeWidth="3" opacity="0.55" />
      <line x1="165" y1="185" x2="260" y2="185" stroke="var(--accent)" strokeWidth="3" opacity="0.55" />
      <circle cx="110" cy="150" r="14" fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <circle cx="110" cy="150" r="3" fill="var(--accent)" />
    </svg>
  );
}
