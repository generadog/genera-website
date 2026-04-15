import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { loadFonts } from "./fonts";
import { Intro } from "./components/Intro";
import { CheckSlide } from "./components/CheckSlide";
import { Outro } from "./components/Outro";
import { WipeTransition } from "./components/WipeTransition";

loadFonts();

// ── TIMING (900 frames @ 30fps = 30 seconds) ───────────────────────────────

const INTRO_START    = 0;
const INTRO_DURATION = 75;   // 2.5s

// Each check slide is 150 frames (5s)
const ITEM_5_START = 75;
const ITEM_4_START = 225;
const ITEM_3_START = 375;
const ITEM_2_START = 525;
const ITEM_1_START = 675;
const ITEM_DURATION = 150;

const OUTRO_START    = 825;
const OUTRO_DURATION = 75;   // 2.5s

// Wipes are 20 frames, centred on the boundary between each check
// Each wipe starts 10 frames before the boundary and ends 10 frames after
const WIPE_DURATION = 20;
const WIPE_5_TO_4 = ITEM_4_START - 10; // 215
const WIPE_4_TO_3 = ITEM_3_START - 10; // 365
const WIPE_3_TO_2 = ITEM_2_START - 10; // 515
const WIPE_2_TO_1 = ITEM_1_START - 10; // 665

// ── VIDEO READINESS ────────────────────────────────────────────────────────
// Once you generate a clip and drop it in remotion-reels/public/,
// flip the matching hasVideo flag below to true.
// The scene will instantly switch from the SVG illustration to real footage.
const VIDEO_READY = {
  scene1: false, // space requirements    → drop public/scene1.mp4 then set true
  scene2: false, // emergency protocols  → drop public/scene2.mp4 then set true
  scene3: false, // segregation          → drop public/scene3.mp4 then set true
  scene4: false, // record keeping       → drop public/scene4.mp4 then set true
  scene5: false, // staff-to-dog ratios  → drop public/scene5.mp4 then set true
};

const CHECKS = [
  {
    number: 5,
    title: "Staff-to-dog ratios",
    subtitle: "Are you meeting the ratio for your licence category?",
    highlight: false,
    scene: 5 as const,
    hasVideo: VIDEO_READY.scene5,
    start: ITEM_5_START,
  },
  {
    number: 4,
    title: "Vaccination records",
    subtitle: "Can you show proof for every dog on site today?",
    highlight: false,
    scene: 4 as const,
    hasVideo: VIDEO_READY.scene4,
    start: ITEM_4_START,
  },
  {
    number: 3,
    title: "Segregation procedures",
    subtitle: "Dogs separated by size, age & temperament?",
    highlight: false,
    scene: 3 as const,
    hasVideo: VIDEO_READY.scene3,
    start: ITEM_3_START,
  },
  {
    number: 2,
    title: "Emergency protocols",
    subtitle: "Vet contact + incident plan documented & visible?",
    highlight: false,
    scene: 2 as const,
    hasVideo: VIDEO_READY.scene2,
    start: ITEM_2_START,
  },
  {
    number: 1,
    title: "Space requirements",
    subtitle: "Minimum floor space per APHA guidance met?",
    highlight: true,
    scene: 1 as const,
    hasVideo: VIDEO_READY.scene1,
    start: ITEM_1_START,
  },
];

export const DefraEp3: React.FC = () => {
  return (
    <AbsoluteFill>
      {/* Title card */}
      <Sequence from={INTRO_START} durationInFrames={INTRO_DURATION}>
        <Intro />
      </Sequence>

      {/* Check slides — each has a distinct scene background */}
      {CHECKS.map((check) => (
        <Sequence key={check.number} from={check.start} durationInFrames={ITEM_DURATION}>
          <CheckSlide
            number={check.number}
            title={check.title}
            subtitle={check.subtitle}
            highlight={check.highlight}
            scene={check.scene}
            hasVideo={check.hasVideo}
          />
        </Sequence>
      ))}

      {/* Outro CTA */}
      <Sequence from={OUTRO_START} durationInFrames={OUTRO_DURATION}>
        <Outro />
      </Sequence>

      {/* ── WIPE TRANSITIONS ── rendered last so they sit on top of everything */}
      <Sequence from={WIPE_5_TO_4} durationInFrames={WIPE_DURATION}>
        <WipeTransition />
      </Sequence>
      <Sequence from={WIPE_4_TO_3} durationInFrames={WIPE_DURATION}>
        <WipeTransition />
      </Sequence>
      <Sequence from={WIPE_3_TO_2} durationInFrames={WIPE_DURATION}>
        <WipeTransition />
      </Sequence>
      <Sequence from={WIPE_2_TO_1} durationInFrames={WIPE_DURATION}>
        <WipeTransition />
      </Sequence>
    </AbsoluteFill>
  );
};
