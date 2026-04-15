import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { loadFonts } from "./fonts";
import { TEAL } from "./components/genera-ad/constants";
import { Scene1BrandOpen } from "./components/genera-ad/Scene1BrandOpen";
import { Scene2Dashboard } from "./components/genera-ad/Scene2Dashboard";
import { Scene3Bookings } from "./components/genera-ad/Scene3Bookings";
import { Scene4AddBooking } from "./components/genera-ad/Scene4AddBooking";
import { Scene5Invoice } from "./components/genera-ad/Scene5Invoice";
import { Scene6CTA } from "./components/genera-ad/Scene6CTA";

// Load fonts at module evaluation (idempotent)
loadFonts();

export const GeneraAd: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: TEAL }}>
      {/* Scene 1: Brand Open — 0–4s (0–120f) */}
      <Sequence from={0} durationInFrames={120}>
        <Scene1BrandOpen />
      </Sequence>

      {/* Scene 2: Dashboard Hero — 4–10s (120–300f) */}
      <Sequence from={120} durationInFrames={180}>
        <Scene2Dashboard />
      </Sequence>

      {/* Scene 3: Bookings Drill-down — 10–16s (300–480f) */}
      <Sequence from={300} durationInFrames={180}>
        <Scene3Bookings />
      </Sequence>

      {/* Scene 4: Add Booking Flow — 16–22s (480–660f) */}
      <Sequence from={480} durationInFrames={180}>
        <Scene4AddBooking />
      </Sequence>

      {/* Scene 5: Invoice — 22–26s (660–780f) */}
      <Sequence from={660} durationInFrames={120}>
        <Scene5Invoice />
      </Sequence>

      {/* Scene 6: CTA Close — 26–30s (780–900f) */}
      <Sequence from={780} durationInFrames={120}>
        <Scene6CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
