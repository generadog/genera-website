import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_OPEN_SANS } from "../../fonts";
import { GOLD, SPRING_CONFIG, TEAL } from "./constants";
import { GeneraLogo } from "./GeneraLogo";

const TAGLINE = "A Better Breed of Software";

export const Scene1BrandOpen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Logo scale: spring from 0.6 → 1.0
  const logoSpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG,
    durationInFrames: 60,
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.6, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Radial glow pulse: Math.sin wave
  const glowOpacity = 0.3 + Math.sin(frame / 15) * 0.2;

  // Tagline typewriter: chars revealed over frames 20–100
  const charProgress = interpolate(frame, [20, 100], [0, TAGLINE.length], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const visibleChars = Math.floor(charProgress);
  const visibleText = TAGLINE.slice(0, visibleChars);

  // Tagline opacity fades in as first char appears
  const taglineOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoSize = width * 0.1;
  const taglineFontSize = width * 0.0146;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* Radial gold glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: width * 0.5,
          height: width * 0.5,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${GOLD}55 0%, transparent 70%)`,
          opacity: glowOpacity,
          willChange: "opacity",
        }}
      />

      {/* Logo + wordmark */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          willChange: "transform",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: height * 0.04,
        }}
      >
        <GeneraLogo size={logoSize} />
      </div>

      {/* Tagline typewriter */}
      <div
        style={{
          opacity: taglineOpacity,
          fontFamily: FONT_OPEN_SANS,
          fontWeight: 400,
          fontSize: taglineFontSize,
          color: GOLD,
          letterSpacing: "0.05em",
          minHeight: taglineFontSize * 1.5,
          willChange: "opacity",
        }}
      >
        {visibleText}
        {/* Blinking cursor while typing */}
        {visibleChars < TAGLINE.length && (
          <span
            style={{
              opacity: Math.floor(frame / 8) % 2 === 0 ? 1 : 0,
              color: GOLD,
            }}
          >
            |
          </span>
        )}
      </div>
    </AbsoluteFill>
  );
};
