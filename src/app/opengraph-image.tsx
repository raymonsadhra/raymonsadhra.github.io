import { ImageResponse } from "next/og";

export const alt = "Raymon Sadhra — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 78px", color: "#f0f0e9", background: "#11120f", fontFamily: "sans-serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -160, top: -180, width: 620, height: 620, border: "1px solid rgba(108,229,216,.25)", borderRadius: "50%", display: "flex" }} />
      <div style={{ position: "absolute", right: 75, top: 92, width: 18, height: 18, borderRadius: "50%", background: "#b7ff4a", boxShadow: "0 0 40px #b7ff4a" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 23, letterSpacing: 3, textTransform: "uppercase", color: "#a5a79b" }}><div style={{ width: 38, height: 1, background: "#a5a79b" }} />Built Worlds</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 86, letterSpacing: -5, lineHeight: .94, fontWeight: 650 }}>Raymon Sadhra</div><div style={{ marginTop: 24, fontSize: 34, color: "#b7ff4a" }}>Software Engineer · Researcher · Builder</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a5a79b" }}><span>Systems · AI/ML · Developer Tools · Research</span><span>California</span></div>
    </div>, size,
  );
}
