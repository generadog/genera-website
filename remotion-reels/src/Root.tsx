import React from "react";
import { Composition } from "remotion";
import { DefraEp3 } from "./DefraEp3";
import { GeneraAd } from "./GeneraAd";
import { DefraRecordsSplit } from "./DefraRecordsSplit";
import { POVDaycareReel } from "./POVDaycareReel";
import { StressReel } from "./StressReel";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="DefraEp3"
        component={DefraEp3}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="GeneraAd"
        component={GeneraAd}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DefraRecordsSplit"
        component={DefraRecordsSplit}
        durationInFrames={150}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="POVDaycareReel"
        component={POVDaycareReel}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="StressReel"
        component={StressReel}
        durationInFrames={270}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
