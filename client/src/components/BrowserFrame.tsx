/**
 * BrowserFrame — wraps a screenshot in a realistic macOS-style browser chrome.
 *
 * Specs (from user):
 *  - Light grey top bar (#f3f4f6) with 1px solid #e5e7eb bottom border
 *  - Three dots: red #ff5f57, amber #febc2e, green #28c840 — 10px, 6px gap
 *  - Address bar: bg #e9eaec, border-radius 6px, h-[22px], 11px light grey text
 *  - Frame: rounded-xl, border 1.5px solid #e5e7eb, shadow-lg
 *  - Screenshot fills below bar, full width, no padding, display block
 */

interface BrowserFrameProps {
  src: string;
  alt: string;
  url: string;
}

export default function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        borderRadius: 12,
        border: "1.5px solid #e5e7eb",
        boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
      }}
    >
      {/* Top bar */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{
          background: "#f3f4f6",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Traffic light dots */}
        <div className="flex items-center" style={{ gap: 6 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#ff5f57",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#febc2e",
              display: "inline-block",
            }}
          />
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#28c840",
              display: "inline-block",
            }}
          />
        </div>

        {/* Address bar */}
        <div
          className="flex-1 flex items-center justify-center"
          style={{
            background: "#e9eaec",
            borderRadius: 6,
            height: 22,
            paddingLeft: 12,
            paddingRight: 12,
          }}
        >
          <span
            style={{
              fontSize: 11,
              color: "#9ca3af",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {url}
          </span>
        </div>
      </div>

      {/* Screenshot — full width, no padding, no alterations */}
      <img
        src={src}
        alt={alt}
        className="w-full block"
        style={{ display: "block" }}
        loading="lazy"
      />
    </div>
  );
}
