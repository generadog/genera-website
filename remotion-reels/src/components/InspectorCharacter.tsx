import React from "react";

/**
 * Flat 2D cartoon inspector with clipboard.
 * viewBox: 0 0 200 460
 * Rendered at 240×552px on the 1080×1920 canvas.
 *
 * legAngle: degrees to swing legs (positive = left leg forward, right leg back)
 * armSwing: degrees to swing left arm (right arm stays on clipboard)
 */
interface InspectorCharacterProps {
  legAngle?: number;
  armSwing?: number;
}

const SKIN = "#FDBCB4";
const HAIR = "#4A3020";
const JACKET = "#003E45";
const PANTS = "#1A2E40";
const SHOE = "#111827";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";
const SHIRT = "#E8F4F0";

export const InspectorCharacter: React.FC<InspectorCharacterProps> = ({
  legAngle = 0,
  armSwing = 0,
}) => {
  return (
    <svg
      width={240}
      height={552}
      viewBox="0 0 200 460"
      style={{ overflow: "visible" }}
    >
      {/* ── BACK ELEMENTS ── */}

      {/* LEFT LEG GROUP — pivots at (72, 288) */}
      <g transform={`rotate(${legAngle}, 72, 288)`}>
        <rect x="54" y="288" width="36" height="110" rx="14" fill={PANTS} />
        {/* Left shoe */}
        <ellipse cx="72" cy="404" rx="26" ry="11" fill={SHOE} />
        <ellipse cx="80" cy="401" rx="10" ry="7" fill="#2A3848" />
      </g>

      {/* RIGHT LEG GROUP — pivots at (128, 288) */}
      <g transform={`rotate(${-legAngle}, 128, 288)`}>
        <rect x="110" y="288" width="36" height="110" rx="14" fill={PANTS} />
        {/* Right shoe */}
        <ellipse cx="128" cy="404" rx="26" ry="11" fill={SHOE} />
        <ellipse cx="136" cy="401" rx="10" ry="7" fill="#2A3848" />
      </g>

      {/* ── BODY ── */}
      {/* Main jacket */}
      <rect x="28" y="140" width="144" height="155" rx="22" fill={JACKET} />

      {/* Shirt collar / V shape */}
      <polygon points="100,140 75,175 100,188 125,175" fill={SHIRT} />

      {/* Left lapel */}
      <polygon points="28,140 75,175 60,140" fill="#004A54" />
      {/* Right lapel */}
      <polygon points="172,140 125,175 140,140" fill="#004A54" />

      {/* Inspector badge (left breast) */}
      <rect x="38" y="160" width="42" height="26" rx="6" fill={GOLD} />
      <rect x="41" y="163" width="36" height="20" rx="4" fill={JACKET} />
      <rect x="44" y="167" width="22" height="3" rx="1" fill={GOLD} />
      <rect x="44" y="173" width="16" height="3" rx="1" fill={GOLD} />

      {/* ── LEFT ARM (swings during walk) — pivots at (28, 152) ── */}
      <g transform={`rotate(${-armSwing}, 28, 152)`}>
        <rect x="0" y="152" width="30" height="80" rx="14" fill={JACKET} />
        {/* Left hand */}
        <circle cx="15" cy="240" r="16" fill={SKIN} />
        {/* Knuckle detail */}
        <circle cx="8" cy="236" r="4" fill="#F0A898" />
        <circle cx="16" cy="233" r="4" fill="#F0A898" />
        <circle cx="22" cy="236" r="4" fill="#F0A898" />
      </g>

      {/* ── RIGHT ARM + CLIPBOARD — pivots at (172, 152) ── */}
      <g transform="rotate(-18, 172, 152)">
        <rect x="170" y="152" width="30" height="72" rx="14" fill={JACKET} />
        {/* Right hand */}
        <circle cx="185" cy="230" r="16" fill={SKIN} />
      </g>

      {/* CLIPBOARD (overlaps right arm) */}
      <g transform="rotate(-18, 172, 152)">
        {/* Clipboard board */}
        <rect x="160" y="120" width="65" height="88" rx="8" fill={GOLD} />
        {/* Metal clip */}
        <rect x="178" y="112" width="28" height="16" rx="6" fill="#888" />
        <rect x="183" y="116" width="18" height="10" rx="3" fill="#AAA" />
        {/* Paper */}
        <rect x="165" y="128" width="55" height="74" rx="5" fill="#FFFEF2" />
        {/* Lines */}
        <line x1="170" y1="142" x2="215" y2="142" stroke="#DDD" strokeWidth="2.5" />
        <line x1="170" y1="154" x2="215" y2="154" stroke="#DDD" strokeWidth="2.5" />
        <line x1="170" y1="166" x2="208" y2="166" stroke="#DDD" strokeWidth="2.5" />
        <line x1="170" y1="178" x2="215" y2="178" stroke="#DDD" strokeWidth="2.5" />
        {/* Checkmark on first line */}
        <path
          d="M170,142 L174,148 L183,136"
          stroke={JACKET}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tick on second line */}
        <path
          d="M170,154 L174,160 L183,148"
          stroke={JACKET}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* ── HEAD ── */}
      {/* Neck */}
      <rect x="82" y="126" width="36" height="22" rx="8" fill={SKIN} />

      {/* Head circle */}
      <circle cx="100" cy="72" r="58" fill={SKIN} />

      {/* Hair — top of head */}
      <ellipse cx="100" cy="24" rx="58" ry="26" fill={HAIR} />
      <path d="M42,60 Q44,14 100,12 Q156,14 158,60" fill={HAIR} />

      {/* Left ear */}
      <ellipse cx="41" cy="76" rx="11" ry="16" fill={SKIN} />
      <ellipse cx="41" cy="76" rx="6" ry="10" fill="#F0A898" />

      {/* Right ear */}
      <ellipse cx="159" cy="76" rx="11" ry="16" fill={SKIN} />
      <ellipse cx="159" cy="76" rx="6" ry="10" fill="#F0A898" />

      {/* Eyebrows */}
      <path d="M68,56 Q80,48 92,56" stroke={HAIR} strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M108,56 Q120,48 132,56" stroke={HAIR} strokeWidth="4.5" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="78" cy="70" r="10" fill={WHITE} />
      <circle cx="122" cy="70" r="10" fill={WHITE} />
      <circle cx="80" cy="72" r="7" fill="#2D1810" />
      <circle cx="124" cy="72" r="7" fill="#2D1810" />
      {/* Pupils */}
      <circle cx="82" cy="74" r="3.5" fill="#111" />
      <circle cx="126" cy="74" r="3.5" fill="#111" />
      {/* Eye shine */}
      <circle cx="84" cy="70" r="2.5" fill={WHITE} />
      <circle cx="128" cy="70" r="2.5" fill={WHITE} />

      {/* Nose */}
      <ellipse cx="100" cy="86" rx="8" ry="6" fill="#F0A898" />
      <circle cx="97" cy="89" rx="2.5" ry="2" fill="#E89080" />
      <circle cx="103" cy="89" rx="2.5" ry="2" fill="#E89080" />

      {/* Smile */}
      <path d="M84,102 Q100,116 116,102" stroke="#C47A6A" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Cheeks (blush) */}
      <ellipse cx="68" cy="88" rx="12" ry="8" fill="rgba(240,130,110,0.25)" />
      <ellipse cx="132" cy="88" rx="12" ry="8" fill="rgba(240,130,110,0.25)" />
    </svg>
  );
};
