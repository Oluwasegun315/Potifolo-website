import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 15,
            fontWeight: 800,
            letterSpacing: -0.5,
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          IE
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.92)",
            fontSize: 7,
            fontWeight: 700,
            fontFamily: "monospace",
            marginTop: 2,
          }}
        >
          {"</>"}
        </div>
      </div>
    ),
    { ...size }
  );
}
