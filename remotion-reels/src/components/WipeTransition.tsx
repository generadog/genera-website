import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

/**
 * Horizontal teal wipe transition.
 * Duration: 20 frames
 *   0–8:  teal bar enters from left  (fast sweep in)
 *   8–20: teal bar exits to right    (reveal new scene underneath)
 */
export const WipeTransition: React.FC = () => {
  const frame = useCurrentFrame();

  // Enter: -1080 → 0 over frames 0–8
  const enterX = interpolate(frame, [0, 8], [-1080, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Exit: 0 → 1080 over frames 8–20
  const exitX = interpolate(frame, [8, 20], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = frame <= 8 ? enterX : exitX;

  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: x,
          width: 1080,
          backgroundColor: "#003E45",
        }}
      />
    </AbsoluteFill>
  );
};
