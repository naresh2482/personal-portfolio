/** Decorative, CSS-animated diagram: systems → integration layer → backend → local AI. */
const sources = [
  { y: 80, label: 'Instruments' },
  { y: 190, label: 'Enterprise apps' },
  { y: 300, label: 'Documents' },
];
const outputs = [
  { y: 125, label: 'Backend services', ai: false },
  { y: 255, label: 'Local LLM', ai: true },
];

export default function HeroVisual() {
  return (
    <figure className="hero-visual" role="img"
      aria-label="Diagram: instruments, enterprise applications and documents connect through an API integration layer to backend services and a local language model.">
      <svg viewBox="0 0 440 400" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="hv-line" x1="0" x2="1">
            <stop offset="0" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#2dd4bf" />
          </linearGradient>
          <radialGradient id="hv-glow">
            <stop offset="0" stopColor="#2dd4bf" stopOpacity=".35" />
            <stop offset="1" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>

        <text x="68" y="22" textAnchor="middle" className="hv-col">SOURCES</text>
        <text x="220" y="22" textAnchor="middle" className="hv-col">INTEGRATION</text>
        <text x="372" y="22" textAnchor="middle" className="hv-col">OUTPUTS</text>

        <circle cx="220" cy="190" r="110" fill="url(#hv-glow)" />

        {sources.map((n, i) => (
          <path key={n.label} className="hv-flow" style={{ animationDelay: `${i * -0.6}s` }}
            d={`M132 ${n.y} C 170 ${n.y}, 170 190, 188 190`} />
        ))}
        {outputs.map((n, i) => (
          <path key={n.label} className="hv-flow" style={{ animationDelay: `${i * -0.8}s` }}
            d={`M252 190 C 270 190, 270 ${n.y}, 308 ${n.y}`} />
        ))}

        {sources.map((n) => (
          <g key={n.label}>
            <rect x="4" y={n.y - 26} width="128" height="52" rx="12" className="hv-node" />
            <text x="68" y={n.y + 5} textAnchor="middle" className="hv-label">{n.label}</text>
          </g>
        ))}

        <rect x="188" y="150" width="64" height="80" rx="16" className="hv-core" />
        <text x="220" y="186" textAnchor="middle" className="hv-core-text">API</text>
        <text x="220" y="208" textAnchor="middle" className="hv-sub">layer</text>

        {outputs.map((n) => (
          <g key={n.label}>
            <rect x="308" y={n.y - 26} width="128" height="52" rx="12" className={n.ai ? 'hv-node hv-ai' : 'hv-node'} />
            <text x="372" y={n.y + 5} textAnchor="middle" className="hv-label">{n.label}</text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
