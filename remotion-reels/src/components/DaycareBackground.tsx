import React from "react";
import { AbsoluteFill } from "remotion";
import { FONT_INTER, FONT_POPPINS } from "../fonts";

const TEAL = "#003E45";
const GOLD = "#FFA800";
const WHITE = "#FFFFFF";
const WALL_BG = "#F5F0EA";

const FLOOR_HEIGHT = 340;
const BASEBOARD_HEIGHT = 16;

// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────

const Window: React.FC<{ x: number; y: number; w: number; h: number }> = ({
  x, y, w, h,
}) => (
  <div
    style={{
      position: "absolute",
      left: x, top: y,
      width: w, height: h,
      backgroundColor: "#C4E8F5",
      borderRadius: 10,
      border: "10px solid #D9CCBA",
      overflow: "hidden",
      boxShadow: "inset 0 0 24px rgba(255,255,255,0.5)",
    }}
  >
    <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 10, backgroundColor: "#D9CCBA", transform: "translateY(-50%)" }} />
    <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 10, backgroundColor: "#D9CCBA", transform: "translateX(-50%)" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 60% 30%, rgba(255,255,255,0.45) 0%, transparent 65%)" }} />
  </div>
);

const PawPrint: React.FC<{ x: number; y: number; size?: number; opacity?: number; rotate?: number }> = ({
  x, y, size = 50, opacity = 0.07, rotate = 0,
}) => (
  <svg
    style={{ position: "absolute", left: x, top: y, opacity, transform: `rotate(${rotate}deg)` }}
    width={size} height={size} viewBox="0 0 60 60"
  >
    <ellipse cx="30" cy="40" rx="16" ry="13" fill={TEAL} />
    <circle cx="12" cy="22" r="8" fill={TEAL} />
    <circle cx="27" cy="14" r="8" fill={TEAL} />
    <circle cx="42" cy="16" r="8" fill={TEAL} />
    <circle cx="52" cy="28" r="7" fill={TEAL} />
  </svg>
);

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 1 — Space Requirements
// Open room, floor measurement grid, bright window, tape measure
// ─────────────────────────────────────────────────────────────────────────────
const Scene1Content: React.FC = () => (
  <>
    {/* Large bright window — centre-right */}
    <Window x={640} y={220} w={320} h={380} />
    {/* Extra glow behind window to imply light flooding in */}
    <div style={{
      position: "absolute",
      top: 200, left: 580,
      width: 440, height: 440,
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(255,255,220,0.35) 0%, transparent 70%)",
      pointerEvents: "none",
    }} />

    {/* Floor measurement grid — on top of base floor */}
    {[180, 360, 540, 720, 900].map((x) => (
      <div key={x} style={{
        position: "absolute", bottom: 0, left: x,
        width: 2, height: FLOOR_HEIGHT,
        backgroundColor: "rgba(0,62,69,0.22)",
      }} />
    ))}
    {[113, 226].map((fromBottom) => (
      <div key={fromBottom} style={{
        position: "absolute", bottom: fromBottom, left: 0, right: 0,
        height: 2,
        backgroundColor: "rgba(0,62,69,0.22)",
      }} />
    ))}

    {/* Tape measure on floor */}
    <svg
      style={{ position: "absolute", bottom: FLOOR_HEIGHT + BASEBOARD_HEIGHT + 6, left: "50%", transform: "translateX(-50%)" }}
      width={440} height={34} viewBox="0 0 440 34"
    >
      {/* Tape body */}
      <rect x="20" y="4" width="400" height="26" rx="6" fill="#FFF0C0" stroke="#D8C880" strokeWidth="2" />
      {/* Tick marks */}
      {Array.from({ length: 21 }, (_, i) => (
        <line
          key={i}
          x1={20 + i * 20} y1="4"
          x2={20 + i * 20} y2={i % 5 === 0 ? 22 : 16}
          stroke="#888" strokeWidth={i % 5 === 0 ? 2 : 1}
        />
      ))}
      {/* Housing cube */}
      <rect x="0" y="0" width="36" height="34" rx="7" fill="#E8A820" />
      <rect x="4" y="4" width="28" height="26" rx="4" fill="#F0B830" />
      {/* Tape reel circle inside housing */}
      <circle cx="18" cy="17" r="8" fill="#D89810" />
      <circle cx="18" cy="17" r="3" fill="#C08008" />
    </svg>

    {/* Dimension arrow on wall */}
    <svg
      style={{ position: "absolute", top: 650, left: 80 }}
      width={280} height={60} viewBox="0 0 280 60"
    >
      <line x1="20" y1="30" x2="260" y2="30" stroke={TEAL} strokeWidth="3" opacity="0.5" />
      <polygon points="20,22 4,30 20,38" fill={TEAL} opacity="0.5" />
      <polygon points="260,22 276,30 260,38" fill={TEAL} opacity="0.5" />
      <rect x="90" y="16" width="100" height="28" rx="6" fill={WALL_BG} />
      <text x="140" y="35" textAnchor="middle" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill={TEAL} opacity="0.6">MIN. SPACE</text>
    </svg>

    {/* Subtle paw prints */}
    <PawPrint x={130} y={600} size={54} opacity={0.06} rotate={-12} />
    <PawPrint x={400} y={780} size={46} opacity={0.05} rotate={8} />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 2 — Emergency Protocols
// Noticeboard with pinned documents + vet contact, first aid box on wall
// ─────────────────────────────────────────────────────────────────────────────
const Scene2Content: React.FC = () => (
  <>
    {/* Small window far left */}
    <Window x={60} y={280} w={160} h={210} />

    {/* Cork noticeboard — centre wall */}
    <div style={{
      position: "absolute",
      top: 180, left: 310,
      width: 440, height: 540,
      backgroundColor: "#C4945A",
      borderRadius: 12,
      border: "14px solid #8B6030",
      boxShadow: "0 6px 28px rgba(0,0,0,0.18)",
      overflow: "hidden",
    }}>
      {/* Cork texture dots */}
      {[
        {x:30,y:40},{x:90,y:80},{x:160,y:30},{x:220,y:70},{x:290,y:40},
        {x:50,y:140},{x:130,y:180},{x:200,y:130},{x:310,y:160},{x:380,y:90},
        {x:70,y:260},{x:180,y:300},{x:260,y:270},{x:340,y:320},{x:400,y:260},
      ].map((dot, i) => (
        <div key={i} style={{
          position: "absolute", left: dot.x, top: dot.y,
          width: 10, height: 10, borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.08)",
        }} />
      ))}

      {/* Paper 1 — VET CONTACT (top left) */}
      <div style={{
        position: "absolute", top: 30, left: 20,
        width: 168, height: 200,
        backgroundColor: "#FFFEF5",
        borderRadius: 4,
        padding: "12px 14px",
        transform: "rotate(-2deg)",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.15)",
      }}>
        {/* Red pin */}
        <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, borderRadius: "50%", backgroundColor: "#E84545" }} />
        <div style={{ fontFamily: FONT_POPPINS, fontWeight: 700, fontSize: 13, color: TEAL, marginBottom: 6, borderBottom: `2px solid ${TEAL}`, paddingBottom: 4 }}>VET CONTACT</div>
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{ height: 2, backgroundColor: "#DDD", borderRadius: 1, marginBottom: 8 }} />
        ))}
        <div style={{ fontFamily: FONT_INTER, fontWeight: 700, fontSize: 12, color: "#E84545", marginTop: 8 }}>📞 Emergency</div>
      </div>

      {/* Paper 2 — Incident Form (top right) */}
      <div style={{
        position: "absolute", top: 22, left: 220,
        width: 156, height: 180,
        backgroundColor: "#FFFEF0",
        borderRadius: 4,
        padding: "12px 14px",
        transform: "rotate(1.5deg)",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.15)",
      }}>
        <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, borderRadius: "50%", backgroundColor: GOLD }} />
        <div style={{ fontFamily: FONT_POPPINS, fontWeight: 700, fontSize: 12, color: TEAL, marginBottom: 6, borderBottom: `2px solid ${GOLD}`, paddingBottom: 4 }}>INCIDENT FORM</div>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ height: 2, backgroundColor: "#DDD", borderRadius: 1, marginBottom: 7 }} />
        ))}
      </div>

      {/* Paper 3 — Evacuation Plan (bottom centre) */}
      <div style={{
        position: "absolute", bottom: 30, left: "50%", transform: "translateX(-50%) rotate(-1deg)",
        width: 200, height: 160,
        backgroundColor: "#F0FFEF",
        borderRadius: 4,
        padding: "12px 14px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.15)",
      }}>
        <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, borderRadius: "50%", backgroundColor: "#2E8B4A" }} />
        <div style={{ fontFamily: FONT_POPPINS, fontWeight: 700, fontSize: 12, color: "#2E8B4A", marginBottom: 6, borderBottom: "2px solid #2E8B4A", paddingBottom: 4 }}>EVACUATION PLAN</div>
        {/* Simple floor plan sketch */}
        <svg width="170" height="100" viewBox="0 0 170 100">
          <rect x="10" y="10" width="150" height="80" rx="4" fill="none" stroke="#CCC" strokeWidth="2" />
          <rect x="20" y="20" width="50" height="30" rx="3" fill="none" stroke="#AAA" strokeWidth="1.5" />
          <rect x="90" y="20" width="50" height="30" rx="3" fill="none" stroke="#AAA" strokeWidth="1.5" />
          {/* Exit arrow */}
          <path d="M80,60 L80,85 L60,85" stroke="#2E8B4A" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="50,81 60,85 50,89" fill="#2E8B4A" />
          <text x="72" y="78" fontSize="10" fill="#2E8B4A" fontFamily="sans-serif">EXIT</text>
        </svg>
      </div>
    </div>

    {/* First aid box — right wall */}
    <div style={{ position: "absolute", top: 330, right: 80 }}>
      <svg width="130" height="114" viewBox="0 0 130 114">
        {/* Shadow */}
        <ellipse cx="65" cy="110" rx="52" ry="8" fill="rgba(0,0,0,0.1)" />
        {/* Handle */}
        <rect x="42" y="0" width="46" height="20" rx="7" fill="#267A3E" />
        <rect x="46" y="4" width="38" height="12" rx="4" fill="#1E6030" />
        {/* Box body */}
        <rect x="0" y="14" width="130" height="96" rx="12" fill="#2E8B4A" />
        {/* Cross — vertical */}
        <rect x="56" y="28" width="18" height="68" rx="5" fill={WHITE} />
        {/* Cross — horizontal */}
        <rect x="26" y="58" width="78" height="18" rx="5" fill={WHITE} />
        {/* Latch */}
        <rect x="50" y="105" width="30" height="10" rx="4" fill="#1E6030" />
      </svg>
    </div>

    {/* Subtle paw prints */}
    <PawPrint x={780} y={780} size={50} opacity={0.05} rotate={18} />
    <PawPrint x={180} y={900} size={46} opacity={0.05} rotate={-8} />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 3 — Segregation Procedures
// Room split by central gate/divider, teal zone left, gold zone right
// ─────────────────────────────────────────────────────────────────────────────
const Scene3Content: React.FC = () => (
  <>
    {/* Zone floor tints — rendered below everything else visually */}
    {/* Left zone (teal) */}
    <div style={{
      position: "absolute", bottom: 0, left: 0,
      width: 492, height: FLOOR_HEIGHT + BASEBOARD_HEIGHT + 60,
      backgroundColor: "rgba(0,62,69,0.12)",
      pointerEvents: "none",
    }} />
    {/* Right zone (gold) */}
    <div style={{
      position: "absolute", bottom: 0, right: 0,
      width: 540, height: FLOOR_HEIGHT + BASEBOARD_HEIGHT + 60,
      backgroundColor: "rgba(255,168,0,0.10)",
      pointerEvents: "none",
    }} />

    {/* Gate / divider — centre of wall from brand bar to floor */}
    <svg
      style={{ position: "absolute", left: 474, top: 112 }}
      width={132}
      height={1452}
      viewBox="0 0 132 1452"
    >
      {/* Gate fill — frosted panel */}
      <rect x="10" y="0" width="112" height="1452" rx="4" fill="rgba(180,195,220,0.18)" />
      {/* Left post */}
      <rect x="0" y="0" width="20" height="1452" rx="8" fill="#8899BB" />
      {/* Right post */}
      <rect x="112" y="0" width="20" height="1452" rx="8" fill="#8899BB" />
      {/* Top rail */}
      <rect x="0" y="0" width="132" height="14" rx="5" fill="#7788AA" />
      {/* Bottom rail */}
      <rect x="0" y="1438" width="132" height="14" rx="5" fill="#7788AA" />
      {/* Mid rail (waist height) */}
      <rect x="0" y="700" width="132" height="12" rx="4" fill="#7788AA" />
      {/* Vertical bars between posts (9 bars, evenly spaced) */}
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={22 + i * 10} y="0" width="7" height="1452" rx="3" fill="#9AAABB" />
      ))}
      {/* Gate latch */}
      <rect x="44" y="680" width="44" height="28" rx="8" fill="#999" />
      <circle cx="66" cy="694" r="9" fill="#BBB" />
      <circle cx="66" cy="694" r="4" fill="#888" />
    </svg>

    {/* Zone A badge — left wall */}
    <div style={{
      position: "absolute", top: 210, left: 90,
      backgroundColor: TEAL, borderRadius: 14,
      padding: "14px 30px", textAlign: "center",
      boxShadow: "0 4px 16px rgba(0,62,69,0.25)",
    }}>
      <div style={{ fontFamily: FONT_POPPINS, fontWeight: 800, fontSize: 52, color: WHITE, lineHeight: 1 }}>A</div>
      <div style={{ fontFamily: FONT_INTER, fontWeight: 600, fontSize: 18, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>ZONE</div>
    </div>

    {/* Zone B badge — right wall */}
    <div style={{
      position: "absolute", top: 210, right: 90,
      backgroundColor: GOLD, borderRadius: 14,
      padding: "14px 30px", textAlign: "center",
      boxShadow: "0 4px 16px rgba(255,168,0,0.3)",
    }}>
      <div style={{ fontFamily: FONT_POPPINS, fontWeight: 800, fontSize: 52, color: TEAL, lineHeight: 1 }}>B</div>
      <div style={{ fontFamily: FONT_INTER, fontWeight: 600, fontSize: 18, color: "rgba(0,62,69,0.65)", marginTop: 4 }}>ZONE</div>
    </div>

    {/* Segregation label strip */}
    <div style={{
      position: "absolute", top: 560, left: "50%", transform: "translateX(-50%)",
      backgroundColor: "rgba(255,255,255,0.85)", borderRadius: 10,
      padding: "10px 22px",
      border: `3px solid #CCC`,
    }}>
      <div style={{ fontFamily: FONT_INTER, fontWeight: 700, fontSize: 20, color: "#666", whiteSpace: "nowrap" }}>
        BY SIZE · AGE · TEMPERAMENT
      </div>
    </div>

    {/* Small window — far left */}
    <Window x={70} y={320} w={160} h={200} />

    {/* Paw prints — one each side */}
    <PawPrint x={200} y={820} size={50} opacity={0.07} rotate={-10} />
    <PawPrint x={740} y={780} size={50} opacity={0.07} rotate={12} />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 4 — Record Keeping
// Shelving unit (left), reception desk with computer + logbook (right)
// ─────────────────────────────────────────────────────────────────────────────
const Scene4Content: React.FC = () => (
  <>
    {/* ── BOOKSHELF — left wall ── */}
    <svg
      style={{ position: "absolute", top: 170, left: 42 }}
      width={270} height={820} viewBox="0 0 270 820"
    >
      {/* Cabinet back panel */}
      <rect x="0" y="0" width="270" height="820" rx="10" fill="#C8B090" />
      {/* Top and sides (darker) */}
      <rect x="0" y="0" width="270" height="14" rx="5" fill="#A89070" />
      <rect x="0" y="0" width="14" height="820" rx="5" fill="#A89070" />
      <rect x="256" y="0" width="14" height="820" rx="5" fill="#A89070" />

      {/* Shelf 1 (y=120) */}
      <rect x="0" y="120" width="270" height="12" fill="#A89070" />
      {/* Binders on shelf 1 */}
      <rect x="18" y="18" width="30" height="100" rx="3" fill={TEAL} />
      <rect x="52" y="22" width="30" height="96" rx="3" fill={GOLD} />
      <rect x="86" y="16" width="30" height="102" rx="3" fill="#C04040" />
      <rect x="120" y="20" width="30" height="98" rx="3" fill={TEAL} />
      <rect x="154" y="18" width="30" height="100" rx="3" fill="#888" />
      <rect x="188" y="24" width="30" height="94" rx="3" fill={GOLD} />
      <rect x="222" y="18" width="30" height="100" rx="3" fill={TEAL} />
      {/* White label strips on binders */}
      {[18,52,86,120,154,188,222].map(x => (
        <rect key={x} x={x+5} y="88" width="20" height="24" rx="2" fill="rgba(255,255,255,0.8)" />
      ))}

      {/* Shelf 2 (y=260) */}
      <rect x="0" y="260" width="270" height="12" fill="#A89070" />
      {/* Binders on shelf 2 */}
      <rect x="18" y="136" width="30" height="122" rx="3" fill={GOLD} />
      <rect x="52" y="140" width="30" height="118" rx="3" fill={TEAL} />
      <rect x="86" y="136" width="30" height="122" rx="3" fill="#888" />
      <rect x="120" y="142" width="30" height="116" rx="3" fill="#C04040" />
      <rect x="154" y="138" width="30" height="120" rx="3" fill={TEAL} />
      <rect x="188" y="136" width="30" height="122" rx="3" fill={GOLD} />
      <rect x="222" y="140" width="30" height="118" rx="3" fill={TEAL} />
      {[18,52,86,120,154,188,222].map(x => (
        <rect key={x} x={x+5} y="234" width="20" height="22" rx="2" fill="rgba(255,255,255,0.8)" />
      ))}

      {/* Shelf 3 (y=400) */}
      <rect x="0" y="400" width="270" height="12" fill="#A89070" />
      {/* Mix of binders + box files on shelf 3 */}
      <rect x="18" y="274" width="50" height="124" rx="3" fill="#C04040" />
      <rect x="72" y="274" width="50" height="124" rx="3" fill={TEAL} />
      <rect x="126" y="274" width="50" height="124" rx="3" fill={GOLD} />
      <rect x="180" y="278" width="50" height="120" rx="3" fill="#888" />
      {/* Labels */}
      <rect x="23" y="360" width="40" height="28" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="77" y="360" width="40" height="28" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="131" y="360" width="40" height="28" rx="2" fill="rgba(255,255,255,0.85)" />
      <rect x="185" y="360" width="40" height="28" rx="2" fill="rgba(255,255,255,0.85)" />

      {/* Shelf 4 (y=540) */}
      <rect x="0" y="540" width="270" height="12" fill="#A89070" />
      {/* Smaller items — folders */}
      {[18,52,86,120,154,188,222].map((x, i) => (
        <rect key={x} x={x} y="414" width="28" height="124" rx="3" fill={[TEAL,GOLD,"#C04040","#888",TEAL,GOLD,TEAL][i]} />
      ))}

      {/* Shelf 5 bottom — misc */}
      <rect x="18" y="555" width="90" height="60" rx="4" fill="#D4B880" />
      <rect x="120" y="558" width="60" height="56" rx="4" fill="#E8E0D0" />

      {/* Label plate at bottom */}
      <rect x="60" y="776" width="150" height="36" rx="6" fill={GOLD} />
    </svg>

    {/* Label text on shelf */}
    <div style={{
      position: "absolute",
      top: 945, left: 96,
      fontFamily: FONT_POPPINS, fontWeight: 700, fontSize: 16,
      color: TEAL, whiteSpace: "nowrap",
    }}>
      DAYCARE RECORDS
    </div>

    {/* ── COMPUTER MONITOR — upper right ── */}
    <svg
      style={{ position: "absolute", top: 240, right: 90 }}
      width={280} height={310} viewBox="0 0 280 310"
    >
      {/* Monitor screen */}
      <rect x="0" y="0" width="280" height="210" rx="14" fill="#1A2B38" />
      <rect x="8" y="8" width="264" height="194" rx="10" fill="#0D2030" />
      {/* Glowing screen content */}
      <rect x="8" y="8" width="264" height="194" rx="10" fill="url(#screenGlow)" opacity="0.9" />
      <defs>
        <radialGradient id="screenGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#003E4588" />
          <stop offset="100%" stopColor="#001A20" />
        </radialGradient>
      </defs>
      {/* Screen content lines (like a spreadsheet / records page) */}
      <rect x="16" y="16" width="248" height="22" rx="4" fill={TEAL} opacity="0.7" />
      {[48,72,96,120,144,168].map(y => (
        <rect key={y} x="16" y={y} width="248" height="14" rx="2" fill="rgba(255,255,255,0.06)" />
      ))}
      {[16,90,162].map(x => (
        <rect key={x} x={x} y="40" width="1" height="152" fill="rgba(255,255,255,0.1)" />
      ))}
      {/* Status light */}
      <circle cx="140" cy="200" r="5" fill={GOLD} opacity="0.8" />
      {/* Monitor stand */}
      <rect x="118" y="210" width="44" height="32" rx="4" fill="#1A2B38" />
      <rect x="80" y="238" width="120" height="14" rx="6" fill="#1A2B38" />
      {/* Monitor shadow */}
      <ellipse cx="140" cy="306" rx="80" ry="10" fill="rgba(0,0,0,0.12)" />
    </svg>

    {/* ── OPEN LOGBOOK — desk surface area ── */}
    <svg
      style={{ position: "absolute", top: 980, left: 360 }}
      width={320} height={200} viewBox="0 0 320 200"
    >
      {/* Book shadow */}
      <ellipse cx="160" cy="196" rx="150" ry="12" fill="rgba(0,0,0,0.1)" />
      {/* Left page */}
      <path d="M10,10 Q160,0 160,180 Q80,185 10,180 Z" fill="#FFFEF5" stroke="#DDD" strokeWidth="2" />
      {/* Right page */}
      <path d="M310,10 Q160,0 160,180 Q240,185 310,180 Z" fill="#FFFEF0" stroke="#DDD" strokeWidth="2" />
      {/* Binding */}
      <rect x="154" y="2" width="12" height="178" rx="6" fill="#C8A880" />
      {/* Lines on left page */}
      {[35,55,75,95,115,135,155].map(y => (
        <line key={y} x1="24" y1={y} x2="148" y2={y} stroke="#E0D8C8" strokeWidth="1.5" />
      ))}
      {/* Lines on right page */}
      {[35,55,75,95,115,135,155].map(y => (
        <line key={y} x1="172" y1={y} x2="296" y2={y} stroke="#E0D8C8" strokeWidth="1.5" />
      ))}
      {/* Header line left */}
      <rect x="20" y="16" width="130" height="12" rx="3" fill="#E8E0D0" />
      {/* Header line right */}
      <rect x="170" y="16" width="130" height="12" rx="3" fill="#E8E0D0" />
    </svg>

    {/* Subtle paw print */}
    <PawPrint x={800} y={900} size={50} opacity={0.05} rotate={20} />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// SCENE 5 — Staff-to-Dog Ratios
// Wide play area, dog silhouettes on wall, "1:4" ratio sign
// ─────────────────────────────────────────────────────────────────────────────
const DogSilhouette: React.FC<{ x: number; y: number; scale?: number; opacity?: number; flip?: boolean }> = ({
  x, y, scale = 1, opacity = 0.12, flip = false,
}) => (
  <g
    transform={`translate(${x}, ${y}) scale(${flip ? -scale : scale}, ${scale})`}
    style={{ opacity }}
  >
    {/* Body */}
    <ellipse cx="55" cy="58" rx="45" ry="32" fill={TEAL} />
    {/* Head */}
    <circle cx="92" cy="46" r="28" fill={TEAL} />
    {/* Left ear */}
    <ellipse cx="80" cy="24" rx="13" ry="20" fill={TEAL} transform="rotate(-18, 80, 24)" />
    {/* Right ear */}
    <ellipse cx="106" cy="22" rx="13" ry="20" fill={TEAL} transform="rotate(15, 106, 22)" />
    {/* Tail */}
    <path d="M98,44 Q124,26 118,8" stroke={TEAL} strokeWidth="11" fill="none" strokeLinecap="round" />
    {/* Legs */}
    <rect x="20" y="76" width="18" height="36" rx="8" fill={TEAL} />
    <rect x="44" y="76" width="18" height="36" rx="8" fill={TEAL} />
    <rect x="68" y="76" width="18" height="34" rx="8" fill={TEAL} />
    <rect x="88" y="76" width="18" height="32" rx="8" fill={TEAL} />
  </g>
);

const Scene5Content: React.FC = () => (
  <>
    {/* Window — right side */}
    <Window x={680} y={230} w={270} h={320} />

    {/* "1:4" ratio sign — left wall */}
    <div style={{
      position: "absolute",
      top: 200, left: 80,
      backgroundColor: WHITE,
      border: `8px solid ${TEAL}`,
      borderRadius: 18,
      padding: "24px 42px",
      textAlign: "center",
      boxShadow: "0 6px 24px rgba(0,62,69,0.18)",
    }}>
      <div style={{ fontFamily: FONT_POPPINS, fontWeight: 800, fontSize: 112, color: TEAL, lineHeight: 1 }}>1:4</div>
      <div style={{ fontFamily: FONT_INTER, fontWeight: 600, fontSize: 24, color: "#555", marginTop: 8 }}>staff-to-dog ratio</div>
      <div style={{
        marginTop: 10,
        backgroundColor: TEAL,
        borderRadius: 8,
        padding: "6px 14px",
        display: "inline-block",
        fontFamily: FONT_INTER, fontWeight: 600, fontSize: 18, color: WHITE,
      }}>per licence category</div>
    </div>

    {/* Dog silhouettes on wall — scattered like a mural */}
    <svg style={{ position: "absolute", top: 130, left: 0, width: 1080, height: 1450 }} viewBox="0 0 1080 1450">
      <DogSilhouette x={370} y={200} scale={0.55} opacity={0.10} />
      <DogSilhouette x={500} y={280} scale={0.45} opacity={0.09} flip />
      <DogSilhouette x={620} y={180} scale={0.50} opacity={0.08} />
      <DogSilhouette x={420} y={520} scale={0.40} opacity={0.07} flip />
      <DogSilhouette x={560} y={580} scale={0.48} opacity={0.09} />
      <DogSilhouette x={200} y={700} scale={0.38} opacity={0.06} />
      <DogSilhouette x={680} y={680} scale={0.42} opacity={0.07} flip />
      <DogSilhouette x={820} y={500} scale={0.36} opacity={0.07} />
      <DogSilhouette x={380} y={880} scale={0.44} opacity={0.06} flip />
    </svg>

    {/* Subtle paw prints scattered */}
    <PawPrint x={300} y={680} size={52} opacity={0.06} rotate={-14} />
    <PawPrint x={730} y={820} size={46} opacity={0.06} rotate={16} />
  </>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main DaycareBackground component
// ─────────────────────────────────────────────────────────────────────────────
interface DaycareBackgroundProps {
  scene: 1 | 2 | 3 | 4 | 5;
}

export const DaycareBackground: React.FC<DaycareBackgroundProps> = ({ scene }) => {
  return (
    <AbsoluteFill>
      {/* ── BASE WALL ── */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        bottom: FLOOR_HEIGHT + BASEBOARD_HEIGHT,
        backgroundColor: WALL_BG,
      }} />

      {/* ── BASEBOARD ── */}
      <div style={{
        position: "absolute",
        bottom: FLOOR_HEIGHT, left: 0, right: 0,
        height: BASEBOARD_HEIGHT,
        backgroundColor: "#D9CCBA",
      }} />

      {/* ── FLOOR ── */}
      <div style={{
        position: "absolute",
        bottom: 0, left: 0, right: 0,
        height: FLOOR_HEIGHT,
        backgroundColor: "#E8CE82",
      }} />
      {/* Floor wood grain planks */}
      {[0, 110, 220, 330, 440, 550, 660, 770, 880, 990].map((x) => (
        <div key={x} style={{
          position: "absolute", bottom: 0, left: x,
          width: 2, height: FLOOR_HEIGHT,
          backgroundColor: "rgba(0,0,0,0.04)",
        }} />
      ))}
      {/* Sheen near baseboard */}
      <div style={{
        position: "absolute",
        bottom: FLOOR_HEIGHT - 20, left: 0, right: 0, height: 20,
        background: "linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)",
      }} />

      {/* ── SCENE-SPECIFIC CONTENT ── */}
      {scene === 1 && <Scene1Content />}
      {scene === 2 && <Scene2Content />}
      {scene === 3 && <Scene3Content />}
      {scene === 4 && <Scene4Content />}
      {scene === 5 && <Scene5Content />}

      {/* ── SHARED FLOOR OBJECTS (all scenes) ── */}
      {/* Water bowl */}
      <svg style={{ position: "absolute", bottom: FLOOR_HEIGHT + BASEBOARD_HEIGHT - 10, left: 110 }} width={100} height={58} viewBox="0 0 100 58">
        <ellipse cx="50" cy="52" rx="46" ry="10" fill="rgba(0,0,0,0.1)" />
        <path d="M8,28 Q50,52 92,28 L88,14 Q50,40 12,14 Z" fill="#C4793A" />
        <ellipse cx="50" cy="24" rx="42" ry="14" fill="#D4883C" />
        <ellipse cx="50" cy="22" rx="34" ry="10" fill="#7ABFD4" />
        <ellipse cx="45" cy="20" rx="14" ry="4" fill="rgba(255,255,255,0.35)" />
      </svg>
      {/* Toy ball */}
      <svg style={{ position: "absolute", bottom: FLOOR_HEIGHT + BASEBOARD_HEIGHT - 8, right: 130 }} width={72} height={72} viewBox="0 0 72 72">
        <ellipse cx="36" cy="66" rx="26" ry="8" fill="rgba(0,0,0,0.12)" />
        <circle cx="36" cy="36" r="32" fill="#E84545" />
        <path d="M8,36 Q36,8 64,36" stroke={WHITE} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85" />
        <path d="M8,36 Q36,64 64,36" stroke={WHITE} strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.85" />
        <circle cx="26" cy="22" r="8" fill="rgba(255,255,255,0.25)" />
      </svg>

      {/* ── BRAND BAR (always on top) ── */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 112,
        backgroundColor: TEAL,
        display: "flex", alignItems: "center",
        paddingLeft: 60, paddingRight: 60,
      }}>
        <span style={{ fontFamily: FONT_POPPINS, fontWeight: 700, fontSize: 52, color: WHITE, letterSpacing: "-0.5px" }}>
          genera<span style={{ color: GOLD }}>.</span>
        </span>
        <div style={{ flex: 1 }} />
        <span style={{ fontFamily: FONT_POPPINS, fontWeight: 600, fontSize: 26, color: "rgba(255,255,255,0.55)", letterSpacing: "1px" }}>
          DEFRA Series · Ep 3
        </span>
      </div>
    </AbsoluteFill>
  );
};
