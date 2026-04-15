import React from "react";
import { FONT_POPPINS } from "../../fonts";
import { GOLD, TEAL, WHITE } from "./constants";

interface GeneraLogoProps {
  size?: number;
}

export const GeneraLogo: React.FC<GeneraLogoProps> = ({ size = 180 }) => {
  const pawSize = size;
  const textSize = size * 0.38;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.12,
      }}
    >
      {/* Paw print with G overlay */}
      <div style={{ position: "relative", width: pawSize, height: pawSize }}>
        <svg
          width={pawSize}
          height={pawSize}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main pad — large central shape */}
          <ellipse cx="100" cy="120" rx="52" ry="44" fill={GOLD} />

          {/* Top-left toe */}
          <ellipse
            cx="52"
            cy="68"
            rx="20"
            ry="24"
            transform="rotate(-20 52 68)"
            fill={GOLD}
          />
          {/* Top-right toe */}
          <ellipse
            cx="148"
            cy="68"
            rx="20"
            ry="24"
            transform="rotate(20 148 68)"
            fill={GOLD}
          />
          {/* Center-left toe */}
          <ellipse
            cx="72"
            cy="54"
            rx="17"
            ry="21"
            transform="rotate(-10 72 54)"
            fill={GOLD}
          />
          {/* Center-right toe */}
          <ellipse
            cx="128"
            cy="54"
            rx="17"
            ry="21"
            transform="rotate(10 128 54)"
            fill={GOLD}
          />

          {/* Teal "G" overlaid on pad */}
          <text
            x="100"
            y="134"
            textAnchor="middle"
            fontFamily="Poppins, sans-serif"
            fontWeight="800"
            fontSize="62"
            fill={TEAL}
          >
            G
          </text>
        </svg>
      </div>

      {/* Wordmark */}
      <div
        style={{
          fontFamily: FONT_POPPINS,
          fontWeight: 700,
          fontSize: textSize,
          color: WHITE,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        genera
        <span style={{ color: GOLD }}>.</span>
      </div>
    </div>
  );
};
