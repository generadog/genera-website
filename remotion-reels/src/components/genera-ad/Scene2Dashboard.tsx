import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { CameraMotionBlur } from "@remotion/motion-blur";
import { FONT_OPEN_SANS } from "../../fonts";
import { GOLD, SPRING_CONFIG, TEAL, WHITE } from "./constants";

const LABELS = [
  { text: "33 bookings this month", position: { top: "12%", left: "4%" }, delay: 30 },
  { text: "22 recurring", position: { top: "12%", right: "4%" }, delay: 50 },
  { text: "Live calendar view", position: { bottom: "12%", left: "50%", transform: "translateX(-50%)" }, delay: 70 },
];

export const Scene2Dashboard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Entry spring: screen lands from below
  const entrySpring = spring({
    frame,
    fps,
    config: SPRING_CONFIG,
    durationInFrames: 50,
  });

  const translateY = interpolate(entrySpring, [0, 1], [height * 0.35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Perspective tilt: rotateX 8deg → 0deg
  const rotateX = interpolate(entrySpring, [0, 1], [8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Motion blur shutter angle — high during entry (strong blur), settles to standard
  const shutterAngle = interpolate(frame, [0, 25], [360, 90], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const labelFontSize = width * 0.013;
  const imgWidth = width * 0.82;
  const imgHeight = height * 0.78;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dashboard screenshot with perspective entry */}
      <CameraMotionBlur shutterAngle={shutterAngle} samples={5}>
        <div
          style={{
            transform: `translateY(${translateY}px) perspective(1200px) rotateX(${rotateX}deg)`,
            willChange: "transform",
            position: "relative",
            width: imgWidth,
            height: imgHeight,
            borderRadius: 12,
            boxShadow: `0 0 40px #FFA80044, 0 30px 80px rgba(0,0,0,0.5)`,
            border: `1px solid ${GOLD}44`,
            overflow: "hidden",
          }}
        >
          <Img
            src={staticFile("dashboard.png")}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Floating label pills */}
          {LABELS.map((label, i) => {
            const labelFrame = Math.max(0, frame - label.delay);
            const labelSpring = spring({
              frame: labelFrame,
              fps,
              config: SPRING_CONFIG,
              durationInFrames: 20,
            });
            const labelScale = interpolate(labelSpring, [0, 1], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const labelOpacity = interpolate(labelFrame, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...label.position,
                  opacity: labelOpacity,
                  transform: `scale(${labelScale}) ${label.position.transform ?? ""}`,
                  transformOrigin: "center",
                  willChange: "transform, opacity",
                  backgroundColor: TEAL,
                  borderLeft: `4px solid ${GOLD}`,
                  borderRadius: 8,
                  paddingTop: height * 0.012,
                  paddingBottom: height * 0.012,
                  paddingLeft: width * 0.014,
                  paddingRight: width * 0.014,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: width * 0.006,
                }}
              >
                <span
                  style={{
                    fontFamily: FONT_OPEN_SANS,
                    fontWeight: 600,
                    fontSize: labelFontSize,
                    color: WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label.text}
                </span>
              </div>
            );
          })}
        </div>
      </CameraMotionBlur>
    </AbsoluteFill>
  );
};
