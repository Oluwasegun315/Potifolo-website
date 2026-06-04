import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7C3AED 0%, #C026D3 50%, #EC4899 100%)",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          IE
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: 28,
            fontWeight: 700,
            fontFamily: "monospace",
            marginTop: 8,
          }}
        >
          {"</>"}
        </div>
      </div>
    ),
    { ...size }
  );
}
