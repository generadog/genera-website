import React from "react";

/**
 * Flat 2D cartoon dog — golden retriever style.
 * Key changes from v1:
 *   - Floppy ears hang DOWN the sides of the face (not on top like a bear)
 *   - Clearly defined rectangular muzzle / snout protruding from face
 *   - Head is a squashed oval, not a perfect circle
 *   - Eyebrows + inverted-Y dog mouth for expressiveness
 */
interface DogCharacterProps {
  tailWag?: number; // -1 to 1
}

const BODY       = "#D4883C";
const BODY_DARK  = "#B86820";
const MUZZLE     = "#E8A870";
const EAR_INNER  = "#C87838";
const EYE        = "#2D1810";
const WHITE      = "#FFFFFF";
const TEAL       = "#003E45";
const GOLD       = "#FFA800";

export const DogCharacter: React.FC<DogCharacterProps> = ({ tailWag = 0 }) => {
  // Tail tip moves with tailWag
  const tailCpX  = 198 + tailWag * 22;
  const tailCpY  = 72  - tailWag * 28;
  const tailEndX = 212 + tailWag * 28;
  const tailEndY = 44  - tailWag * 35;

  return (
    <svg
      width={248}
      height={270}
      viewBox="0 0 220 240"
      style={{ overflow: "visible" }}
    >
      {/* ── TAIL ── */}
      <path
        d={`M166,116 Q${tailCpX},${tailCpY} ${tailEndX},${tailEndY}`}
        stroke={BODY_DARK}
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      />
      {/* Fluffy tail tip */}
      <path
        d={`M${tailEndX - 10},${tailEndY + 10} Q${tailEndX + 6},${tailEndY - 10} ${tailEndX + 9},${tailEndY - 3}`}
        stroke="#EDCBA0"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />

      {/* ── BACK LEGS ── */}
      <rect x="32" y="160" width="34" height="58" rx="14" fill={BODY_DARK} />
      <ellipse cx="49"  cy="221" rx="24" ry="10" fill="#A05E1A" />
      <rect x="154" y="160" width="34" height="58" rx="14" fill={BODY_DARK} />
      <ellipse cx="171" cy="221" rx="24" ry="10" fill="#A05E1A" />

      {/* ── BODY ── */}
      <ellipse cx="110" cy="155" rx="76" ry="58" fill={BODY} />
      <ellipse cx="90"  cy="134" rx="34" ry="18" fill="rgba(255,255,255,0.08)" />

      {/* ── FRONT LEGS ── */}
      <rect x="48"  y="168" width="33" height="54" rx="13" fill={BODY} />
      <ellipse cx="64"  cy="225" rx="22" ry="10" fill={BODY_DARK} />
      <circle cx="56" cy="228" r="5" fill="#B86820" />
      <circle cx="64" cy="230" r="5" fill="#B86820" />
      <circle cx="72" cy="228" r="5" fill="#B86820" />

      <rect x="139" y="168" width="33" height="54" rx="13" fill={BODY} />
      <ellipse cx="155" cy="225" rx="22" ry="10" fill={BODY_DARK} />
      <circle cx="147" cy="228" r="5" fill="#B86820" />
      <circle cx="155" cy="230" r="5" fill="#B86820" />
      <circle cx="163" cy="228" r="5" fill="#B86820" />

      {/* ── LEFT FLOPPY EAR — path, hangs down ALONGSIDE the face ── */}
      {/* Outer ear */}
      <path
        d="M58,42 Q30,56 26,102 Q22,148 48,156 Q64,160 73,132 Q80,104 70,46 Z"
        fill={BODY_DARK}
      />
      {/* Inner ear (lighter, warm tone) */}
      <path
        d="M62,50 Q38,64 34,104 Q31,144 52,151 Q64,154 71,128 Q76,102 67,54 Z"
        fill={EAR_INNER}
      />

      {/* ── RIGHT FLOPPY EAR — mirror of left ── */}
      <path
        d="M162,42 Q190,56 194,102 Q198,148 172,156 Q156,160 147,132 Q140,104 150,46 Z"
        fill={BODY_DARK}
      />
      <path
        d="M158,50 Q182,64 186,104 Q189,144 168,151 Q156,154 149,128 Q144,102 153,54 Z"
        fill={EAR_INNER}
      />

      {/* ── HEAD — squashed oval (wider than tall = dog skull shape) ── */}
      <ellipse cx="110" cy="78" rx="62" ry="54" fill={BODY} />
      {/* Subtle forehead highlight */}
      <ellipse cx="94"  cy="56" rx="26" ry="16" fill="rgba(255,255,255,0.09)" />

      {/* ── MUZZLE — the key feature: a clearly protruding dog snout ── */}
      {/* Snout box */}
      <rect x="80" y="90" width="60" height="44" rx="22" fill={MUZZLE} />
      {/* Top blend — merges snout into face smoothly */}
      <ellipse cx="110" cy="92" rx="30" ry="12" fill={MUZZLE} />

      {/* ── EYES — positioned high on head, above centre ── */}
      {/* Eye whites */}
      <circle cx="86"  cy="68" r="13" fill={WHITE} />
      <circle cx="134" cy="68" r="13" fill={WHITE} />
      {/* Irises */}
      <circle cx="88"  cy="70" r="9"  fill={EYE} />
      <circle cx="136" cy="70" r="9"  fill={EYE} />
      {/* Pupils */}
      <circle cx="89"  cy="72" r="5"  fill="#111" />
      <circle cx="137" cy="72" r="5"  fill="#111" />
      {/* Eye shine */}
      <circle cx="92"  cy="66" r="3"  fill={WHITE} />
      <circle cx="140" cy="66" r="3"  fill={WHITE} />

      {/* ── EYEBROWS — arched, adds dog expression ── */}
      <path d="M75,54 Q86,46 97,54"  stroke={BODY_DARK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M123,54 Q134,46 145,54" stroke={BODY_DARK} strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* ── NOSE — wide, flat dog nose sitting on the muzzle ── */}
      <path
        d="M97,97 Q97,108 110,111 Q123,108 123,97 Q119,90 110,88 Q101,90 97,97 Z"
        fill={EYE}
      />
      {/* Nostrils */}
      <circle cx="104" cy="102" r="3" fill="rgba(0,0,0,0.4)" />
      <circle cx="116" cy="102" r="3" fill="rgba(0,0,0,0.4)" />
      {/* Nose shine */}
      <ellipse cx="108" cy="94" rx="5" ry="3" fill="rgba(255,255,255,0.22)" />

      {/* ── MOUTH — inverted-Y dog mouth (not a bear smile) ── */}
      {/* Corners */}
      <path d="M96,112 Q110,122 124,112" stroke={EYE} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Centre drop */}
      <path d="M110,112 L110,121" stroke={EYE} strokeWidth="3" strokeLinecap="round" />

      {/* ── TONGUE ── */}
      <ellipse cx="110" cy="122" rx="11" ry="10" fill="#E05878" />
      <path d="M110,115 L110,131" stroke="#C04060" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="107" cy="120" rx="3.5" ry="4.5" fill="rgba(255,255,255,0.2)" />

      {/* ── COLLAR ── */}
      <rect x="72"  y="126" width="76" height="20" rx="9"  fill={TEAL} />
      {/* Collar tag */}
      <rect x="101" y="123" width="18" height="28" rx="4"  fill={GOLD} />
      <circle cx="110" cy="150" r="8"  fill={GOLD} />
      {/* Studs */}
      <circle cx="82"  cy="136" r="4"  fill={GOLD} />
      <circle cx="138" cy="136" r="4"  fill={GOLD} />
    </svg>
  );
};
