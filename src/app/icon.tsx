import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          background: "#FF6B35",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <path d="M7 24V8H11L19 18.5V8H25V24H21L13 13.5V24H7Z" fill="#1E293B" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
