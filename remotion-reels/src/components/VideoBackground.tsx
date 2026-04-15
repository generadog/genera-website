import React from "react";
import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";
import { DaycareBackground } from "./DaycareBackground";

/**
 * VideoBackground — wraps each scene.
 *
 * If a real video file exists in public/ it plays as a fullscreen background.
 * If no video file is provided it falls back to the SVG illustrated scene.
 *
 * Video file naming convention (place in remotion-reels/public/):
 *   scene1.mp4  — Space requirements
 *   scene2.mp4  — Emergency protocols
 *   scene3.mp4  — Segregation procedures
 *   scene4.mp4  — Record keeping
 *   scene5.mp4  — Staff-to-dog ratios
 *
 * Generation spec: 9:16 (1080×1920), 5 seconds per scene, 30fps
 * Use OffthreadVideo so rendering is frame-accurate and never drops frames.
 */

interface VideoBackgroundProps {
  scene: 1 | 2 | 3 | 4 | 5;
  hasVideo?: boolean; // set true once you've dropped the generated clip in public/
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  scene,
  hasVideo = false,
}) => {
  if (!hasVideo) {
    // Fallback — SVG illustrated scene
    return <DaycareBackground scene={scene} />;
  }

  return (
    <AbsoluteFill>
      {/* Real photorealistic footage */}
      <OffthreadVideo
        src={staticFile(`scene${scene}.mp4`)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        // Loop so a clip shorter than 5s still fills the sequence
        loop
        // Mute — no location audio in the final render
        muted
      />

      {/* Subtle teal vignette to help text card legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,62,69,0.35) 0%, transparent 30%, transparent 65%, rgba(0,62,69,0.5) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Genera brand bar — always on top of footage */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 112,
          backgroundColor: "#003E45",
          display: "flex",
          alignItems: "center",
          paddingLeft: 60,
          paddingRight: 60,
        }}
      >
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: 52,
            color: "#FFFFFF",
            letterSpacing: "-0.5px",
          }}
        >
          genera<span style={{ color: "#FFA800" }}>.</span>
        </span>
        <div style={{ flex: 1 }} />
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: 26,
            color: "rgba(255,255,255,0.55)",
            letterSpacing: "1px",
          }}
        >
          DEFRA Series · Ep 3
        </span>
      </div>
    </AbsoluteFill>
  );
};
