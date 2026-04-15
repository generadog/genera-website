import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FONT_INTER, FONT_POPPINS } from "../fonts";
import { VideoBackground } from "./VideoBackground";
import { DogCharacter } from "./DogCharacter";
import { InspectorCharacter } from "./InspectorCharacter";

const TEAL = "#003E45";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";

interface CheckSlideProps {
  number: number;
  title: string;
  subtitle: string;
  highlight?: boolean;
  scene: 1 | 2 | 3 | 4 | 5;
  hasVideo?: boolean; // flip to true once scene[N].mp4 is in public/
}

export const CheckSlide: React.FC<CheckSlideProps> = ({
  number,
  title,
  subtitle,
  highlight = false,
  scene,
  hasVideo = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── INSPECTOR WALK-IN (0–50 frames) ────────────────────────────────────
  const walkSpring = spring({
    frame,
    fps,
    config: { damping: 22, stiffness: 95 },
    durationInFrames: 50,
  });
  const inspectorX = interpolate(walkSpring, [0, 1], [1180, 590]);

  // Leg/arm swing while spring is moving
  const isWalking = frame < 54;
  const legAngle = isWalking ? Math.sin(frame * 0.32) * 24 : 0;
  const armSwing = isWalking ? Math.sin(frame * 0.32) * 16 : 0;

  // Walk bob (body rises mid-step)
  const walkBob = isWalking ? Math.abs(Math.sin(frame * 0.32)) * 10 : 0;

  // Idle breathing bob after stopping
  const idleBob = frame > 54 ? Math.sin(frame * 0.07) * 7 : 0;

  // ── DOG TAIL WAG ────────────────────────────────────────────────────────
  const tailWag = Math.sin(frame * 0.14) * 0.9;

  // ── CARD SLIDE-IN (spring, starts frame 46) ─────────────────────────────
  const cardSpring = spring({
    frame: Math.max(0, frame - 46),
    fps,
    config: { damping: 18, stiffness: 130 },
    durationInFrames: 30,
  });
  const cardX = interpolate(cardSpring, [0, 1], [-720, 0]);
  const cardOpacity = interpolate(frame, [46, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── CHECK LABEL (appears with card, frame 50) ────────────────────────────
  const labelOpacity = interpolate(frame, [50, 58], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── TITLE FADE-UP (frame 52–62) ──────────────────────────────────────────
  const titleOpacity = interpolate(frame, [52, 62], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [52, 62], [22, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── GOLD UNDERLINE WIPE (frame 62–74, 12 frames) ────────────────────────
  const underlineWidth = interpolate(frame, [62, 74], [0, 70], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── BODY COPY FADE-UP (8 frames after underline completes → frame 74–84) ─
  const bodyOpacity = interpolate(frame, [74, 84], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const bodyY = interpolate(frame, [74, 84], [16, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // ── GHOST NUMBER: spring scale from 0.7 → 1.0 (frame 58) ────────────────
  const numSpring = spring({
    frame: Math.max(0, frame - 58),
    fps,
    config: { damping: 9, stiffness: 220 },
    durationInFrames: 20,
  });
  const numberScale = interpolate(numSpring, [0, 1], [0.7, 1.0]);

  // Card theming
  const cardBg = highlight ? GOLD : WHITE;
  const cardBorder = highlight ? TEAL : GOLD;
  const titleColor = TEAL;
  const subtitleColor = highlight ? "rgba(0,62,69,0.75)" : "#374151";
  const checkLabelColor = highlight ? "rgba(0,62,69,0.55)" : GOLD;
  const watermarkColor = highlight ? "rgba(0,62,69,0.055)" : "rgba(255,168,0,0.07)";

  return (
    <AbsoluteFill>
      {/* Scene background — SVG illustration OR real photorealistic footage */}
      <VideoBackground scene={scene} hasVideo={hasVideo} />

      {/* Dog — left side, floor */}
      <div style={{ position: "absolute", left: 48, bottom: 326 }}>
        <DogCharacter tailWag={tailWag} />
      </div>

      {/* Inspector — walks in from right */}
      <div
        style={{
          position: "absolute",
          left: inspectorX,
          bottom: 330,
          transform: `translateY(${-walkBob - idleBob}px)`,
        }}
      >
        <InspectorCharacter legAngle={legAngle} armSwing={armSwing} />
      </div>

      {/* ── TEXT CARD ── */}
      <div
        style={{
          position: "absolute",
          left: 50,
          top: 130,
          width: 960,
          transform: `translateX(${cardX}px)`,
          opacity: cardOpacity,
        }}
      >
        <div
          style={{
            backgroundColor: cardBg,
            borderRadius: 32,
            paddingTop: 44,
            paddingBottom: 48,
            paddingLeft: 60,
            paddingRight: 60,
            boxShadow: "0 16px 56px rgba(0,0,0,0.13)",
            borderLeft: `18px solid ${cardBorder}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ghost watermark number — spring from 0.7→1.0 */}
          <div
            style={{
              position: "absolute",
              right: -14,
              top: -30,
              fontFamily: FONT_POPPINS,
              fontWeight: 800,
              fontSize: 300,
              lineHeight: 1,
              color: watermarkColor,
              userSelect: "none",
              transform: `scale(${numberScale})`,
              transformOrigin: "right top",
              pointerEvents: "none",
            }}
          >
            {number}
          </div>

          {/* CHECK #N label */}
          <div
            style={{
              opacity: labelOpacity,
              fontFamily: FONT_INTER,
              fontWeight: 700,
              fontSize: 26,
              color: checkLabelColor,
              letterSpacing: "4px",
              textTransform: "uppercase" as const,
              marginBottom: 16,
            }}
          >
            CHECK #{number}
          </div>

          {/* Title — fades up */}
          <div
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              fontFamily: FONT_POPPINS,
              fontWeight: 800,
              fontSize: 78,
              color: titleColor,
              lineHeight: 1.06,
              marginBottom: 20,
            }}
          >
            {title}
          </div>

          {/* Gold underline — wipes left to right over 12 frames */}
          <div
            style={{
              width: underlineWidth,
              height: 5,
              backgroundColor: cardBorder,
              borderRadius: 3,
              marginBottom: 24,
              transition: "none",
            }}
          />

          {/* Subtitle — fades up 8 frames after underline completes */}
          <div
            style={{
              opacity: bodyOpacity,
              transform: `translateY(${bodyY}px)`,
              fontFamily: FONT_INTER,
              fontWeight: 400,
              fontSize: 40,
              color: subtitleColor,
              lineHeight: 1.5,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
