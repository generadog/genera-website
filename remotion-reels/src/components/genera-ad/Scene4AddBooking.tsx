import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_OPEN_SANS, FONT_POPPINS } from "../../fonts";
import { GOLD, SPRING_CONFIG, TEAL, WHITE } from "./constants";

// Word-by-word text animation
// "Smart recurring bookings. Membership-linked billing."
const WORDS_LINE1 = ["Smart", "recurring", "bookings."];
const WORDS_LINE2 = ["Membership-linked", "billing."];
const ALL_WORDS = [...WORDS_LINE1, ...WORDS_LINE2];
const GOLD_WORDS = new Set(["Membership-linked", "billing."]);

// Cursor waypoints (relative to img, as fraction of modal dimensions)
// Moves to toggle at frame 60, clicks at frame 80, moves to dropdown at frame 100, hovers at frame 120
const CURSOR_WAYPOINTS = [
  { frame: 0,   x: 0.5,  y: 0.35 },  // start center
  { frame: 60,  x: 0.62, y: 0.52 },  // over recurring toggle
  { frame: 80,  x: 0.62, y: 0.52 },  // click (stay)
  { frame: 110, x: 0.62, y: 0.65 },  // move to membership dropdown
  { frame: 180, x: 0.62, y: 0.65 },  // hold
];

function lerpCursor(frame: number, w: typeof CURSOR_WAYPOINTS, prop: "x" | "y") {
  for (let i = 0; i < w.length - 1; i++) {
    const a = w[i];
    const b = w[i + 1];
    if (frame >= a.frame && frame <= b.frame) {
      const t = (frame - a.frame) / (b.frame - a.frame);
      return a[prop] + (b[prop] - a[prop]) * t;
    }
  }
  return w[w.length - 1][prop];
}

export const Scene4AddBooking: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Horizontal wipe in: clipPath right edge contracts
  const wipeProgress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const clipRight = interpolate(wipeProgress, [0, 1], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const imgWidth = width * 0.72;
  const imgHeight = height * 0.82;

  // Cursor position (relative to img top-left)
  const cursorRelX = lerpCursor(frame, CURSOR_WAYPOINTS, "x");
  const cursorRelY = lerpCursor(frame, CURSOR_WAYPOINTS, "y");

  // Cursor click pulse at frame 80
  const clickSpring = spring({
    frame: Math.max(0, frame - 78),
    fps,
    config: { stiffness: 200, damping: 14 },
    durationInFrames: 15,
  });
  const cursorScale = interpolate(
    frame >= 78 && frame <= 95 ? clickSpring : 1,
    [0, 1],
    [1, frame >= 78 && frame <= 88 ? 1.8 : 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Gold ring around dropdown (frames 110–180)
  const ringOpacity = interpolate(frame, [108, 120], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ringPulse = 1 + Math.sin(frame / 8) * 0.06;

  // Text overlay word-by-word (starts frame 50)
  const textStartFrame = 50;
  const wordStagger = 8;
  const textFontSize = width * 0.0167;
  const subtextFontSize = width * 0.013;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Wipe-in screenshot */}
      <div
        style={{
          clipPath: `inset(0 ${clipRight}% 0 0)`,
          willChange: "clip-path",
          position: "relative",
          width: imgWidth,
          height: imgHeight,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${GOLD}33`,
        }}
      >
        <Img
          src={staticFile("add-booking.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Gold ring around membership dropdown */}
        <div
          style={{
            position: "absolute",
            left: `${cursorRelX * 100 - 10}%`,
            top: `${0.65 * 100 - 4}%`,
            width: "36%",
            height: "8%",
            borderRadius: 8,
            border: `2px solid ${GOLD}`,
            opacity: ringOpacity,
            transform: `scale(${ringPulse})`,
            willChange: "opacity, transform",
            pointerEvents: "none",
            boxShadow: `0 0 16px ${GOLD}88`,
          }}
        />

        {/* Animated cursor */}
        <div
          style={{
            position: "absolute",
            left: `${cursorRelX * 100}%`,
            top: `${cursorRelY * 100}%`,
            transform: `translate(-50%, -50%) scale(${cursorScale})`,
            willChange: "transform, left, top",
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: WHITE,
            boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
            border: "2px solid rgba(0,0,0,0.15)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Text overlay — appears after wipe settles */}
      <div
        style={{
          position: "absolute",
          bottom: height * 0.06,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: height * 0.012,
          paddingLeft: width * 0.04,
          paddingRight: width * 0.04,
        }}
      >
        {/* Line 1 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: textFontSize * 0.35,
          }}
        >
          {WORDS_LINE1.map((word, wi) => {
            const wordFrame = Math.max(0, frame - (textStartFrame + wi * wordStagger));
            const wordSpring = spring({
              frame: wordFrame,
              fps,
              config: SPRING_CONFIG,
              durationInFrames: 12,
            });
            const wordOpacity = interpolate(wordFrame, [0, 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const wordY = interpolate(wordSpring, [0, 1], [12, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <span
                key={wi}
                style={{
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                  willChange: "transform, opacity",
                  fontFamily: FONT_POPPINS,
                  fontWeight: 700,
                  fontSize: textFontSize,
                  color: WHITE,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Line 2 */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: textFontSize * 0.35,
          }}
        >
          {WORDS_LINE2.map((word, wi) => {
            const globalIndex = WORDS_LINE1.length + wi;
            const wordFrame = Math.max(
              0,
              frame - (textStartFrame + globalIndex * wordStagger)
            );
            const wordSpring = spring({
              frame: wordFrame,
              fps,
              config: SPRING_CONFIG,
              durationInFrames: 12,
            });
            const wordOpacity = interpolate(wordFrame, [0, 8], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const wordY = interpolate(wordSpring, [0, 1], [12, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <span
                key={wi}
                style={{
                  opacity: wordOpacity,
                  transform: `translateY(${wordY}px)`,
                  willChange: "transform, opacity",
                  fontFamily: FONT_POPPINS,
                  fontWeight: 700,
                  fontSize: textFontSize,
                  color: GOLD_WORDS.has(word) ? GOLD : WHITE,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
