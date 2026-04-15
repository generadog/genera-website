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
const TEAL_ALT = "#004D56";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";
const DARK = "#111827";

interface CountdownItemProps {
  number: number;
  title: string;
  subtitle: string;
  highlight?: boolean; // #1 item gets gold background
  altBackground?: boolean; // alternating bg for rhythm
}

export const CountdownItem: React.FC<CountdownItemProps> = ({
  number,
  title,
  subtitle,
  highlight = false,
  altBackground = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bg = highlight ? GOLD : altBackground ? TEAL_ALT : TEAL;
  const textColor = highlight ? DARK : WHITE;
  const numberColor = highlight ? TEAL : GOLD;
  const subtitleColor = highlight ? "rgba(17,24,39,0.65)" : "rgba(255,255,255,0.6)";

  // Number — bouncy spring scale
  const numberScale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 160 },
    durationInFrames: 25,
  });

  // Number opacity
  const numberOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Title — slide in from right, delayed 15 frames
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleX = interpolate(frame, [15, 35], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtitle — same, delayed 25 frames
  const subOpacity = interpolate(frame, [25, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subX = interpolate(frame, [25, 45], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Decorative side bar
  const barHeight = interpolate(frame, [5, 30], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        flexDirection: "row",
        alignItems: "center",
        padding: "0 80px",
        gap: 60,
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: `${(100 - barHeight) / 2}%`,
          width: 10,
          height: `${barHeight}%`,
          backgroundColor: highlight ? TEAL : GOLD,
          borderRadius: "0 6px 6px 0",
        }}
      />

      {/* Number */}
      <div
        style={{
          opacity: numberOpacity,
          transform: `scale(${numberScale})`,
          flexShrink: 0,
          width: 220,
          textAlign: "center",
        }}
      >
        <span
          style={{
            fontFamily: FONT_POPPINS,
            fontWeight: 800,
            fontSize: 240,
            color: numberColor,
            lineHeight: 1,
            display: "block",
          }}
        >
          {number}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, flexDirection: "column" }}>
        {/* "CHECK #N" label */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateX(${titleX}px)`,
            fontFamily: FONT_INTER,
            fontWeight: 600,
            fontSize: 26,
            color: highlight ? "rgba(17,24,39,0.5)" : "rgba(255,168,0,0.8)",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          CHECK #{number}
        </div>

        {/* Title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateX(${titleX}px)`,
            fontFamily: FONT_POPPINS,
            fontWeight: 700,
            fontSize: 72,
            color: textColor,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subOpacity,
            transform: `translateX(${subX}px)`,
            fontFamily: FONT_INTER,
            fontWeight: 400,
            fontSize: 38,
            color: subtitleColor,
            lineHeight: 1.45,
          }}
        >
          {subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};
