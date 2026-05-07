"use client";

import type { ReactNode } from "react";
import {
  ConsentBanner,
  ConsentDialog,
  ConsentManagerProvider,
  policyPackPresets,
  type ConsentManagerOptions,
} from "@c15t/nextjs";

const consentCategories = [
  "necessary",
  "functionality",
  "experience",
  "measurement",
  "marketing",
] satisfies ConsentManagerOptions["consentCategories"];

function getConsentOptions(): ConsentManagerOptions {
  const backendURL = process.env.NEXT_PUBLIC_C15T_URL;

  const sharedOptions = {
    consentCategories,
  } satisfies Partial<ConsentManagerOptions>;

  if (backendURL) {
    return {
      ...sharedOptions,
      mode: "hosted",
      backendURL,
    };
  }

  return {
    ...sharedOptions,
    mode: "offline",
    offlinePolicy: {
      policyPacks: [
        policyPackPresets.europeOptIn(),
        policyPackPresets.californiaOptOut(),
        policyPackPresets.worldNoBanner(),
      ],
    },
  };
}

export default function ConsentManager({ children }: { children: ReactNode }) {
  return (
    <ConsentManagerProvider options={getConsentOptions()}>
      <ConsentBanner />
      <ConsentDialog />
      {children}
    </ConsentManagerProvider>
  );
}
