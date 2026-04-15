import React from "react";
import {
  AbsoluteFill,
  interpolate,
  OffthreadVideo,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { loadFonts, FONT_POPPINS } from "./fonts";

loadFonts();

// ─── Timing ───────────────────────────────────────────────────────────────────
// 2 s per line = 60 frames, 10-frame crossfade between lines
// Total: 4 × 60 + hold on last = ~270 frames = 9 s
const LINE_GAP = 60;      // frames from one entrance to the next
const FADE_DURATION = 10; // crossfade overlap in frames

const LINES = [
  "POV: you run a dog daycare.",
  "Your DEFRA inspector just knocked.",
  "Your records are across three apps, two spreadsheets and a WhatsApp thread.",
  "And you've tried every dog's name as the password.",
];

const START_FRAMES = LINES.map((_, i) => i * LINE_GAP);

// Font sizes — trim the long line slightly
const FONT_SIZES = [76, 76, 62, 70];

// ─── Single animated line ─────────────────────────────────────────────────────
interface LineProps {
  text: string;
  fontSize: number;
  startFrame: number;
  isLast: boolean;
}

const AnimatedLine: React.FC<LineProps> = ({ text, fontSize, startFrame, isLast }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const localFrame = frame - startFrame;
  if (localFrame < 0) return null;

  // Fast spring drop from +30px below
  const progress = spring({
    frame: localFrame,
    fps,
    config: { damping: 16, stiffness: 280 },
  });
  const yOffset = interpolate(progress, [0, 1], [30, 0]);
  const fadeIn = interpolate(progress, [0, 0.12], [0, 1], { extrapolateRight: "clamp" });

  // Fade out at the end of the 2-second window (or gentle hold on last line)
  const holdEnd = isLast ? LINE_GAP * 3 : LINE_GAP - FADE_DURATION;
  const fadeOut = interpolate(
    localFrame,
    [holdEnd, holdEnd + FADE_DURATION],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity: fadeIn * fadeOut,
        transform: `translateY(${yOffset}px)`,
        textAlign: "center",
        padding: "0 72px",
        fontFamily: FONT_POPPINS,
        fontWeight: 900,
        fontSize: fontSize,
        lineHeight: 1.2,
        color: "#FFFFFF",
        textShadow: [
          "0px 2px 6px rgba(0,0,0,0.98)",
          "0px 4px 24px rgba(0,0,0,0.85)",
          "0px 0px 60px rgba(0,0,0,0.5)",
        ].join(", "),
        letterSpacing: "-0.5px",
      }}
    >
      {text}
    </div>
  );
};

// ─── Composition ─────────────────────────────────────────────────────────────
export const POVDaycareReel: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      {/* Full-bleed video */}
      <OffthreadVideo
        src={staticFile("pov-daycare.mov")}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loop
      />

      {/* Full-frame dark scrim so text is legible anywhere in the video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.30)",
          pointerEvents: "none",
        }}
      />

      {/* Text — vertically and horizontally centred */}
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {LINES.map((text, i) => (
          <AnimatedLine
            key={i}
            text={text}
            fontSize={FONT_SIZES[i]}
            startFrame={START_FRAMES[i]}
            isLast={i === LINES.length - 1}
          />
        ))}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
