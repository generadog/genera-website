import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFonts, FONT_POPPINS, FONT_INTER } from "./fonts";

loadFonts();

const TEAL = "#003E45";
const TEAL_DARK = "#002B30";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";

// Zigzag divider path at x=540, full 1920px height
const ZigzagDivider: React.FC<{ opacity: number }> = ({ opacity }) => {
  const W = 44;
  const zigH = 60;
  const steps = Math.ceil(1920 / zigH) + 2;
  const cx = 540;

  let d = `M ${cx} 0`;
  for (let i = 0; i < steps; i++) {
    const y1 = i * zigH + zigH / 2;
    const y2 = (i + 1) * zigH;
    const xOff = i % 2 === 0 ? W / 2 : -W / 2;
    d += ` L ${cx + xOff} ${y1} L ${cx} ${y2}`;
  }
  d += ` L ${cx} 1920 L ${cx - W / 2} 1920 L ${cx - W / 2} 0 Z`;

  return (
    <svg
      style={{ position: "absolute", top: 0, left: 0, opacity }}
      width={1080}
      height={1920}
      viewBox="0 0 1080 1920"
    >
      <path d={d} fill={TEAL} />
    </svg>
  );
};

const PadlockIcon: React.FC<{ scale: number }> = ({ scale }) => (
  <div
    style={{
      transform: `scale(${scale})`,
      transformOrigin: "center center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg width={220} height={260} viewBox="0 0 220 260">
      {/* Arch */}
      <path
        d="M 45 120 L 45 75 A 65 65 0 0 1 175 75 L 175 120"
        fill="none"
        stroke={TEAL}
        strokeWidth={36}
        strokeLinecap="round"
      />
      {/* Body */}
      <rect x={20} y={110} width={180} height={140} rx={22} ry={22} fill={TEAL} />
      {/* Keyhole circle */}
      <circle cx={110} cy={174} r={20} fill={GOLD} />
      {/* Keyhole stem */}
      <rect x={100} y={182} width={20} height={30} rx={6} fill={GOLD} />
    </svg>
  </div>
);

const AppIcon: React.FC<{
  emoji: string;
  scale: number;
  rotation: number;
  floatY: number;
}> = ({ emoji, scale, rotation, floatY }) => (
  <div
    style={{
      transform: `scale(${scale}) rotate(${rotation}deg) translateY(${floatY}px)`,
      transformOrigin: "center center",
      width: 100,
      height: 100,
      borderRadius: 22,
      background: "rgba(0,62,69,0.85)",
      border: `2px solid rgba(255,168,0,0.25)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 52,
    }}
  >
    {emoji}
  </div>
);

// Positions are local to the right panel (0–540 x, 0–1920 y)
const icons = [
  { emoji: "📋", lx: 60,  y: 580, startFrame: 55,  rot: -8  },
  { emoji: "📱", lx: 230, y: 510, startFrame: 65,  rot: 6   },
  { emoji: "📊", lx: 50,  y: 700, startFrame: 75,  rot: -4  },
  { emoji: "❓", lx: 190, y: 660, startFrame: 85,  rot: 10  },
  { emoji: "📁", lx: 330, y: 630, startFrame: 95,  rot: -7  },
  { emoji: "🔑", lx: 290, y: 780, startFrame: 105, rot: 12  },
];

export const DefraRecordsSplit: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Panel slide-in
  const leftSlide = interpolate(frame, [0, 25], [-540, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const rightSlide = interpolate(frame, [0, 25], [540, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Zigzag divider fade
  const zigOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Left: label fade+slide
  const labelLeftOpacity = interpolate(frame, [20, 45], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelLeftY = interpolate(frame, [20, 45], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Padlock spring
  const padlockScale = spring({
    frame: frame - 30,
    fps,
    config: { damping: 12, stiffness: 150 },
  });

  // Left: body text slide
  const bodyTextOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const bodyTextY = interpolate(frame, [60, 90], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Left: badge fade
  const badgeOpacity = interpolate(frame, [85, 110], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Right: label fade+slide
  const labelRightOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelRightY = interpolate(frame, [30, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Right: headline slide
  const headlineOpacity = interpolate(frame, [100, 130], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const headlineY = interpolate(frame, [100, 130], [40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Right: footer fade
  const footerOpacity = interpolate(frame, [125, 148], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: TEAL_DARK, overflow: "hidden" }}>
      {/* LEFT GOLD PANEL */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 540,
          height: 1920,
          backgroundColor: GOLD,
          transform: `translateX(${leftSlide}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
        }}
      >
        {/* DEFRA label */}
        <div
          style={{
            opacity: labelLeftOpacity,
            transform: `translateY(${labelLeftY}px)`,
            color: TEAL,
            fontFamily: FONT_INTER,
            fontWeight: 600,
            fontSize: 26,
            letterSpacing: "0.18em",
            textAlign: "center",
            marginBottom: 40,
            lineHeight: 1.5,
          }}
        >
          DEFRA —{"\n"}CONDITION 25
        </div>

        {/* Padlock */}
        <div style={{ marginBottom: 48 }}>
          <PadlockIcon scale={padlockScale} />
        </div>

        {/* Body text */}
        <div
          style={{
            opacity: bodyTextOpacity,
            transform: `translateY(${bodyTextY}px)`,
            color: TEAL,
            fontFamily: FONT_POPPINS,
            fontWeight: 800,
            fontSize: 68,
            textAlign: "center",
            lineHeight: 1.15,
            paddingLeft: 40,
            paddingRight: 40,
            marginBottom: 48,
          }}
        >
          Full dog records. Required by law.
        </div>

        {/* Badge */}
        <div
          style={{
            opacity: badgeOpacity,
            border: `2.5px solid ${TEAL}`,
            padding: "18px 32px",
            color: TEAL,
            fontFamily: FONT_INTER,
            fontWeight: 600,
            fontSize: 24,
            letterSpacing: "0.2em",
            textAlign: "center",
          }}
        >
          INSPECTABLE.{"\n"}ANY TIME.
        </div>
      </div>

      {/* RIGHT TEAL PANEL */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 540,
          width: 540,
          height: 1920,
          backgroundColor: TEAL,
          transform: `translateX(${rightSlide}px)`,
        }}
      >
        {/* THE REALITY label */}
        <div
          style={{
            position: "absolute",
            top: 420,
            left: 0,
            right: 0,
            opacity: labelRightOpacity,
            transform: `translateY(${labelRightY}px)`,
            color: "rgba(255,255,255,0.55)",
            fontFamily: FONT_INTER,
            fontWeight: 600,
            fontSize: 26,
            letterSpacing: "0.18em",
            textAlign: "center",
          }}
        >
          THE REALITY
        </div>

        {/* Floating icons */}
        {icons.map(({ emoji, lx, y, startFrame, rot }) => {
          const iconScale = spring({
            frame: frame - startFrame,
            fps,
            config: { damping: 10, stiffness: 180 },
          });
          const floatY = Math.sin((frame / 30) * Math.PI + startFrame) * 8;
          return (
            <div
              key={emoji}
              style={{
                position: "absolute",
                left: lx,
                top: y - 50,
              }}
            >
              <AppIcon
                emoji={emoji}
                scale={iconScale}
                rotation={rot}
                floatY={floatY}
              />
            </div>
          );
        })}

        {/* How many passwords headline */}
        <div
          style={{
            position: "absolute",
            bottom: 380,
            left: 0,
            right: 0,
            opacity: headlineOpacity,
            transform: `translateY(${headlineY}px)`,
            textAlign: "center",
            paddingLeft: 36,
            paddingRight: 36,
          }}
        >
          <span
            style={{
              fontFamily: FONT_POPPINS,
              fontWeight: 800,
              fontSize: 64,
              color: WHITE,
              lineHeight: 1.2,
            }}
          >
            How many{" "}
          </span>
          <span
            style={{
              fontFamily: FONT_POPPINS,
              fontWeight: 800,
              fontSize: 64,
              color: GOLD,
              lineHeight: 1.2,
            }}
          >
            passwords
          </span>
          <span
            style={{
              fontFamily: FONT_POPPINS,
              fontWeight: 800,
              fontSize: 64,
              color: WHITE,
              lineHeight: 1.2,
            }}
          >
            {" "}is that?
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 200,
            left: 0,
            right: 0,
            opacity: footerOpacity,
            textAlign: "center",
            color: "rgba(255,255,255,0.5)",
            fontFamily: FONT_INTER,
            fontWeight: 400,
            fontSize: 26,
            letterSpacing: "0.04em",
          }}
        >
          #LicensedToOperate · generasoftware.com
        </div>
      </div>

      {/* Zigzag divider — rendered on top */}
      <ZigzagDivider opacity={zigOpacity} />
    </AbsoluteFill>
  );
};
