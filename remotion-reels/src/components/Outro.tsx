import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_INTER, FONT_POPPINS } from "../fonts";

const TEAL = "#003E45";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Genera wordmark spring
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 180 },
    durationInFrames: 20,
  });

  // Headline fade + rise
  const headlineOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [10, 30], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtext
  const subOpacity = interpolate(frame, [22, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subY = interpolate(frame, [22, 40], [24, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // CTA badge
  const ctaScale = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: { damping: 12, stiffness: 200 },
    durationInFrames: 20,
  });

  // Gold divider line
  const lineWidth = interpolate(frame, [5, 25], [0, 100], {
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
      {/* Genera wordmark */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          fontFamily: FONT_POPPINS,
          fontWeight: 700,
          fontSize: 52,
          color: WHITE,
          letterSpacing: "-0.5px",
          marginBottom: 48,
        }}
      >
        genera<span style={{ color: GOLD }}>.</span>
      </div>

      {/* Gold divider */}
      <div
        style={{
          width: `${lineWidth}%`,
          height: 3,
          backgroundColor: GOLD,
          borderRadius: 2,
          marginBottom: 56,
        }}
      />

      {/* Headline */}
      <div
        style={{
          opacity: headlineOpacity,
          transform: `translateY(${headlineY}px)`,
          fontFamily: FONT_POPPINS,
          fontWeight: 800,
          fontSize: 82,
          color: WHITE,
          lineHeight: 1.1,
          textAlign: "center",
          marginBottom: 36,
        }}
      >
        Is your daycare inspection-ready?
      </div>

      {/* Subtext */}
      <div
        style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          fontFamily: FONT_INTER,
          fontWeight: 400,
          fontSize: 38,
          color: "rgba(255,255,255,0.65)",
          textAlign: "center",
          lineHeight: 1.5,
          marginBottom: 64,
        }}
      >
        Genera helps you stay compliant,{"\n"}every inspection.
      </div>

      {/* CTA badge */}
      <div
        style={{
          transform: `scale(${ctaScale})`,
          backgroundColor: GOLD,
          borderRadius: 100,
          paddingLeft: 56,
          paddingRight: 56,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        <span
          style={{
            fontFamily: FONT_POPPINS,
            fontWeight: 700,
            fontSize: 38,
            color: TEAL,
            letterSpacing: "0.5px",
          }}
        >
          generasoftware.com
        </span>
      </div>
    </AbsoluteFill>
  );
};
