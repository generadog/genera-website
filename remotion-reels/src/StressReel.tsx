import React from "react";
import {
  AbsoluteFill,
  interpolate,
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { loadFonts, FONT_POPPINS } from "./fonts";

loadFonts();

// ─── Constants ────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 270; // 9 s @ 30 fps

// Zoom origin — keeps the face centred as we push in
const HEAD_Y_PCT = (460 / 1920) * 100; // ≈ 24%

// ─── Deterministic noise (no Math.random — must be frame-stable for renderer) ─
const hash = (n: number) =>
  Math.abs(Math.sin(n * 127.1 + 311.7) * Math.sin(n * 73.1 + 17.3));

// ─── Screen flicker overlay ───────────────────────────────────────────────────
// Pseudo-random sample changes every 2–3 frames; occasional sharp dips.
const FlickerOverlay: React.FC<{ frame: number }> = ({ frame }) => {
  const sample = hash(Math.floor(frame / 2));
  const isFlicker = sample > 0.955; // ~4.5 % of buckets
  if (!isFlicker) return null;

  const intensity = interpolate(sample, [0.955, 1], [0.08, 0.22]);
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: `rgba(0,0,0,${intensity})`,
        pointerEvents: "none",
        // Occasionally add a faint teal or white flash instead of just dark
        mixBlendMode: sample > 0.98 ? "screen" : "multiply",
      }}
    />
  );
};


// ─── Text overlay ─────────────────────────────────────────────────────────────
const CAPTION =
  "POV: You're a dog daycare owner. Your local council inspector just knocked. " +
  "Buddy's vaccine cert is in one app. Max's emergency contact is in another. " +
  "You're frantically trying every dog's name as the password.";

const TextOverlay: React.FC = () => (
  <AbsoluteFill
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(0,0,0,0.35)",
    }}
  >
    <p
      style={{
        margin: 0,
        padding: "0 72px",
        fontFamily: FONT_POPPINS,
        fontWeight: 900,
        fontSize: 46,
        lineHeight: 1.25,
        color: "#FFFFFF",
        textAlign: "center",
        textShadow: [
          "0px 2px 5px rgba(0,0,0,1)",
          "0px 4px 18px rgba(0,0,0,0.9)",
          "0px 0px 50px rgba(0,0,0,0.6)",
        ].join(", "),
        letterSpacing: "-0.3px",
      }}
    >
      {CAPTION}
    </p>
  </AbsoluteFill>
);

// ─── Main composition ─────────────────────────────────────────────────────────
export const StressReel: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow push-in zoom — origin locked on the face so it fills the frame
  const zoomScale = interpolate(frame, [0, TOTAL_FRAMES - 1], [1.0, 1.4], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: "#000", overflow: "hidden" }}>

      {/* ── Zooming video ── */}
      {/* Drop your footage into remotion-reels/public/stress-couch.mov to activate */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${zoomScale})`,
          transformOrigin: `50% ${HEAD_Y_PCT.toFixed(1)}%`,
          willChange: "transform",
        }}
      >
        <OffthreadVideo
          src={staticFile("pov-daycare.mov")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loop
        />
      </div>

      {/* ── Cinematic teal colour grade (very subtle) ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,40,50,0.12)",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />

      {/* ── Irregular screen flicker ── */}
      <FlickerOverlay frame={frame} />

      {/* ── Full-duration text overlay ── */}
      <TextOverlay />

    </AbsoluteFill>
  );
};
