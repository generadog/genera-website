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

export const Scene5Invoice: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Invoice zoom + tilt in: scale 0.7 → 1, rotate -2 → 0
  const entrySpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG,
    durationInFrames: 45,
  });
  const imgScale = interpolate(entrySpring, [0, 1], [0.7, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const imgRotate = interpolate(entrySpring, [0, 1], [-2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gold stamp/seal: ring rotates 360 → 0 and settles (frames 20–70)
  const sealProgress = interpolate(frame, [20, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const sealRotate = interpolate(sealProgress, [0, 1], [360, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sealOpacity = interpolate(frame, [20, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sealScale = spring({
    frame: Math.max(0, frame - 20),
    fps,
    config: { stiffness: 120, damping: 12 },
    durationInFrames: 30,
  });

  // Main headline fades up (frames 40–70)
  const headlineOpacity = interpolate(frame, [40, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [40, 65], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Subtitle fades up with delay (frames 60–90)
  const subtitleOpacity = interpolate(frame, [60, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subtitleY = interpolate(frame, [60, 85], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  const imgWidth = width * 0.58;
  const imgHeight = height * 0.72;
  const sealSize = width * 0.09;
  const headlineFontSize = width * 0.0188;
  const subtitleFontSize = width * 0.013;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: height * 0.04,
      }}
    >
      {/* Invoice screenshot */}
      <div
        style={{
          position: "relative",
          transform: `scale(${imgScale}) rotate(${imgRotate}deg)`,
          willChange: "transform",
          width: imgWidth,
          height: imgHeight,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${GOLD}33`,
        }}
      >
        <Img
          src={staticFile("invoice.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Gold stamp seal — top right corner */}
        <div
          style={{
            position: "absolute",
            top: height * 0.03,
            right: width * 0.025,
            width: sealSize,
            height: sealSize,
            opacity: sealOpacity,
            transform: `scale(${sealScale}) rotate(${sealRotate}deg)`,
            willChange: "transform, opacity",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            width={sealSize}
            height={sealSize}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer dashed ring */}
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke={GOLD}
              strokeWidth="3.5"
              strokeDasharray="8 5"
            />
            {/* Inner ring */}
            <circle cx="50" cy="50" r="34" stroke={GOLD} strokeWidth="2" />
            {/* Center fill */}
            <circle cx="50" cy="50" r="28" fill={GOLD} />
            {/* Checkmark */}
            <path
              d="M34 50 L45 61 L66 38"
              stroke={TEAL}
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Text overlay */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: height * 0.015,
        }}
      >
        <div
          style={{
            opacity: headlineOpacity,
            transform: `translateY(${headlineY}px)`,
            willChange: "transform, opacity",
            fontFamily: FONT_POPPINS,
            fontWeight: 700,
            fontSize: headlineFontSize,
            color: WHITE,
            textAlign: "center",
          }}
        >
          Automated invoicing.{" "}
          <span style={{ color: GOLD }}>Same day.</span>
        </div>

        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            willChange: "transform, opacity",
            fontFamily: FONT_OPEN_SANS,
            fontWeight: 400,
            fontSize: subtitleFontSize,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: width * 0.5,
            lineHeight: 1.55,
          }}
        >
          Raise, preview, and send — without leaving your dashboard.
        </div>
      </div>
    </AbsoluteFill>
  );
};
