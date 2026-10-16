import { ImageResponse } from "next/og";

export const alt = "Raymon Sadhra — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "70px 78px", color: "#202621", background: "#F6F2E8", fontFamily: "serif", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: 120, bottom: -70, width: 18, height: 420, background: "#173C2D", borderRadius: 20, transform: "rotate(10deg)", display: "flex" }} />
      <div style={{ position: "absolute", right: 45, top: 65, width: 210, height: 92, background: "#91A88C", borderRadius: "100% 0 100% 0", transform: "rotate(20deg)", display: "flex" }} />
      <div style={{ position: "absolute", right: 180, top: 190, width: 175, height: 76, background: "#C6D59C", borderRadius: "0 100% 0 100%", transform: "rotate(-12deg)", display: "flex" }} />
      <div style={{ position: "absolute", right: 18, bottom: 100, width: 190, height: 82, background: "#BF7957", opacity: .65, borderRadius: "100% 0 100% 0", transform: "rotate(28deg)", display: "flex" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "sans-serif", fontSize: 20, letterSpacing: 3, textTransform: "uppercase", color: "#245A42" }}><div style={{ width: 38, height: 1, background: "#245A42" }} />Rooted in curiosity</div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 820 }}><div style={{ fontSize: 92, letterSpacing: -6, lineHeight: .9 }}>Raymon Sadhra</div><div style={{ marginTop: 26, fontFamily: "sans-serif", fontSize: 31, color: "#245A42" }}>Software engineer · researcher · builder</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "sans-serif", fontSize: 20, color: "#697269" }}><span>Systems · AI/ML · Developer Tools · Research</span><span>California</span></div>
    </div>, size,
  );
}
