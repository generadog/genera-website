import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_OPEN_SANS, FONT_POPPINS } from "../../fonts";
import { GOLD, TEAL, WHITE } from "./constants";

const SERVICES = [
  { label: "Daycare", count: "12", delay: 80 },
  { label: "Sleepover", count: "8", delay: 88 },
  { label: "Dog Walk", count: "13", delay: 96 },
];

export const Scene3Bookings: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Dashboard fades to background
  const dashOpacity = interpolate(frame, [0, 20], [1, 0.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dashScale = interpolate(frame, [0, 20], [1, 0.95], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Modal flies in from right with perspective Y rotation
  const modalProgress = interpolate(frame, [0, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const modalX = interpolate(modalProgress, [0, 1], [width * 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const modalRotateY = interpolate(modalProgress, [0, 1], [15, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gold underline sweeps left-to-right (frames 50–90)
  const underlineScale = interpolate(frame, [50, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  const modalWidth = width * 0.52;
  const modalHeight = height * 0.72;
  const labelFontSize = width * 0.012;
  const pillFontSize = width * 0.011;
  const headingFontSize = width * 0.016;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dashboard in background (dimmed) */}
      <div
        style={{
          position: "absolute",
          width: width * 0.82,
          height: height * 0.78,
          borderRadius: 12,
          overflow: "hidden",
          opacity: dashOpacity,
          transform: `scale(${dashScale})`,
          willChange: "transform, opacity",
          border: `1px solid ${GOLD}22`,
        }}
      >
        <Img
          src={staticFile("dashboard.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Bookings modal flying in */}
      <div
        style={{
          transform: `translateX(${modalX}px) perspective(1200px) rotateY(${modalRotateY}deg)`,
          willChange: "transform",
          position: "relative",
          width: modalWidth,
          height: modalHeight,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: `0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px ${GOLD}33`,
        }}
      >
        <Img
          src={staticFile("bookings-modal.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* "Bookings by Service" text + gold underline overlay */}
        <div
          style={{
            position: "absolute",
            top: height * 0.04,
            left: 0,
            right: 0,
            paddingLeft: width * 0.02,
            paddingRight: width * 0.02,
          }}
        >
          <div
            style={{
              fontFamily: FONT_POPPINS,
              fontWeight: 700,
              fontSize: headingFontSize,
              color: WHITE,
              marginBottom: 6,
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Bookings by Service
          </div>
          {/* Animated gold underline */}
          <div
            style={{
              height: 3,
              backgroundColor: GOLD,
              borderRadius: 2,
              transformOrigin: "left center",
              transform: `scaleX(${underlineScale})`,
              willChange: "transform",
              width: "60%",
            }}
          />
        </div>

        {/* Service pills */}
        <div
          style={{
            position: "absolute",
            bottom: height * 0.05,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: width * 0.012,
            paddingLeft: width * 0.015,
            paddingRight: width * 0.015,
          }}
        >
          {SERVICES.map((svc, i) => {
            const pillFrame = Math.max(0, frame - svc.delay);
            const pillOpacity = interpolate(pillFrame, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            const pillY = interpolate(pillFrame, [0, 16], [14, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            });

            return (
              <div
                key={i}
                style={{
                  opacity: pillOpacity,
                  transform: `translateY(${pillY}px)`,
                  willChange: "transform, opacity",
                  backgroundColor: `${TEAL}EE`,
                  border: `1px solid ${GOLD}66`,
                  borderRadius: 100,
                  display: "flex",
                  alignItems: "center",
                  gap: width * 0.007,
                  paddingTop: height * 0.01,
                  paddingBottom: height * 0.01,
                  paddingLeft: width * 0.012,
                  paddingRight: width * 0.012,
                }}
              >
                <span
                  style={{
                    backgroundColor: TEAL,
                    border: `2px solid ${GOLD}`,
                    borderRadius: "50%",
                    width: pillFontSize * 1.6,
                    height: pillFontSize * 1.6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_POPPINS,
                    fontWeight: 700,
                    fontSize: pillFontSize * 0.85,
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  {svc.count}
                </span>
                <span
                  style={{
                    fontFamily: FONT_OPEN_SANS,
                    fontWeight: 600,
                    fontSize: pillFontSize,
                    color: WHITE,
                    whiteSpace: "nowrap",
                  }}
                >
                  {svc.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
