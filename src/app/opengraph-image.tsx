import { ImageResponse } from "next/og";

export const alt = "Raymon Sadhra — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", color: "#F5F0E6", background: "#0B241F", fontFamily: "sans-serif", position: "relative", overflow: "hidden", border: "22px solid #123C32" }}>
      <div style={{ position: "absolute", right: 80, top: 72, width: 270, height: 270, borderRadius: "50%", background: "#F5F0E6", border: "18px dashed #A84542", boxShadow: "inset 0 0 0 12px #123C32, inset 0 0 0 18px #C5A46D", display: "flex", alignItems: "center", justifyContent: "center", color: "#123C32", fontSize: 78, fontWeight: 800 }}>RS</div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 19, letterSpacing: 3, textTransform: "uppercase", color: "#C5A46D" }}><div style={{ width: 38, height: 1, background: "#C5A46D" }} />Software engineering portfolio</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}><div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -6, lineHeight: .9 }}>Raymon Sadhra</div><div style={{ marginTop: 26, fontSize: 29, color: "#AEBAB4" }}>Backend systems · Developer tools · Applied AI</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 19, color: "#AEBAB4" }}><span>Projects · Experience · Research</span><span>California</span></div>
    </div>, size,
  );
}
