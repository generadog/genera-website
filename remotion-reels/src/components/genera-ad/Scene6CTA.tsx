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

// Cards: 3 screenshots arranged in a floating perspective row
// dashboard, bookings-modal, add-booking — the 3 most visual ones
const CARDS = [
  { src: "dashboard.png",      rotateY: -8, delay: 0  },
  { src: "bookings-modal.png", rotateY:  0, delay: 8  },
  { src: "add-booking.png",    rotateY:  8, delay: 16 },
];

export const Scene6CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Cards spring in from below
  const cardWidth = width * 0.26;
  const cardHeight = height * 0.48;

  // CTA text springs in (frame 30+)
  const ctaSpring = spring({
    frame: Math.max(0, frame - 30),
    fps,
    config: SPRING_CONFIG,
    durationInFrames: 40,
  });
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.85, 1.0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const ctaOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subdomain fades in after CTA (frame 55+)
  const subOpacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gold horizontal line sweeps in (frame 65–100)
  const lineScale = interpolate(frame, [65, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.exp),
  });

  const ctaFontSize = width * 0.034;
  const subFontSize = width * 0.0146;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: TEAL,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: height * 0.035,
      }}
    >
      {/* Floating card row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: width * 0.02,
          perspective: 1200,
          marginBottom: height * 0.02,
        }}
      >
        {CARDS.map((card, i) => {
          const cardFrame = Math.max(0, frame - card.delay);
          const cardSpring = spring({
            frame: cardFrame,
            fps,
            config: SPRING_CONFIG,
            durationInFrames: 35,
          });
          const cardY_entry = interpolate(cardSpring, [0, 1], [height * 0.25, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          const cardOpacity = interpolate(cardFrame, [0, 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });
          // Continuous gentle bob
          const bob = Math.sin((frame + i * 20) / 20) * 8;

          return (
            <div
              key={i}
              style={{
                transform: `translateY(${cardY_entry + bob}px) rotateY(${card.rotateY}deg)`,
                opacity: cardOpacity,
                willChange: "transform, opacity",
                width: cardWidth,
                height: cardHeight,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: `0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px ${GOLD}33`,
                flexShrink: 0,
              }}
            >
              <Img
                src={staticFile(card.src)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          );
        })}
      </div>

      {/* CTA headline */}
      <div
        style={{
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
          willChange: "transform, opacity",
          fontFamily: FONT_POPPINS,
          fontWeight: 700,
          fontSize: ctaFontSize,
          color: GOLD,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Run your pet business smarter.
      </div>

      {/* genera.software */}
      <div
        style={{
          opacity: subOpacity,
          willChange: "opacity",
          fontFamily: FONT_OPEN_SANS,
          fontWeight: 400,
          fontSize: subFontSize,
          color: WHITE,
          letterSpacing: "0.04em",
        }}
      >
        genera.software
      </div>

      {/* Gold full-width sweep line */}
      <div
        style={{
          position: "absolute",
          bottom: height * 0.07,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: width * 0.72,
            height: 2,
            backgroundColor: GOLD,
            borderRadius: 2,
            transformOrigin: "left center",
            transform: `scaleX(${lineScale})`,
            willChange: "transform",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
