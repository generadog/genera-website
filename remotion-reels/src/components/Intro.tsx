import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FONT_INTER, FONT_POPPINS } from "../fonts";

const TEAL = "#003E45";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Ep 3" badge — spring scale from 0
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 180 },
    durationInFrames: 30,
  });

  // Gold divider line — width 0→100%
  const lineWidth = interpolate(frame, [15, 45], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // "DEFRA" label fade + slide up
  const defraOpacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const defraY = interpolate(frame, [20, 40], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Main headline fade + slide up (delayed)
  const headlineOpacity = interpolate(frame, [30, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [30, 55], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subline
  const subOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [45, 65], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 80px",
      }}
    >
      {/* Genera wordmark top */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 80,
          fontFamily: FONT_POPPINS,
          fontWeight: 700,
          fontSize: 42,
          color: WHITE,
          letterSpacing: "-0.5px",
        }}
      >
        genera
        <span style={{ color: GOLD }}>.</span>
      </div>

      {/* Ep 3 badge */}
      <div
        style={{
          transform: `scale(${badgeScale})`,
          backgroundColor: GOLD,
          borderRadius: 100,
          paddingLeft: 36,
          paddingRight: 36,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 48,
        }}
      >
        <span
          style={{
            fontFamily: FONT_POPPINS,
            fontWeight: 700,
            fontSize: 34,
            color: TEAL,
            letterSpacing: "1px",
          }}
        >
          EP 3
        </span>
      </div>

      {/* Gold divider */}
      <div
        style={{
          width: `${lineWidth}%`,
          height: 3,
          backgroundColor: GOLD,
          borderRadius: 2,
          marginBottom: 40,
        }}
      />

      {/* "DEFRA" label */}
      <div
        style={{
          opacity: defraOpacity,
          transform: `translateY(${defraY}px)`,
          fontFamily: FONT_INTER,
          fontWeight: 600,
          fontSize: 28,
          color: GOLD,
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        DEFRA Series
      </div>

      {/* Main headline */}
      <div
        style={{
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
          fontFamily: FONT_POPPINS,
          fontWeight: 800,
          fontSize: 88,
          color: WHITE,
          lineHeight: 1.05,
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        What inspectors actually check
      </div>

      {/* Sub-line */}
      <div
        style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          fontFamily: FONT_INTER,
          fontWeight: 400,
          fontSize: 36,
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        The 5 things that make or break your inspection
      </div>
    </AbsoluteFill>
  );
};
