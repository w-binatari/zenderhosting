import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Branded 1200×630 share card: navy background, white logo, title, and a teal rule. */
export async function brandedOgImage({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  const logo = await readFile(path.join(process.cwd(), "public", "logo_nav.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #031c66 0%, #052a6e 60%, #00bb76 160%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={179} height={72} style={{ objectFit: "contain", alignSelf: "flex-start" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div style={{ fontSize: 28, color: "#00bb76", fontWeight: 600, marginBottom: 20 }}>
              {eyebrow}
            </div>
          ) : null}
          <div style={{ fontSize: title.length > 60 ? 56 : 68, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 26, color: "rgba(255,255,255,0.75)" }}>
          <div style={{ display: "flex" }}>zenderfinance.com</div>
          <div style={{ display: "flex", width: 160, height: 6, background: "#00bb76", borderRadius: 3 }} />
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
