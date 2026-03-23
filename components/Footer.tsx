"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000",
        color: "#fff",
        paddingTop: "clamp(80px, 10vw, 120px)",
        paddingBottom: "40px",
      }}
    >
      <div className="grid-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
          }}
        >
          {/* Top part: Big typography & links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(40px, 5vw, 68px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  marginBottom: "16px",
                  color: "#fff",
                }}
              >
                Let&apos;s build
                <br />
                something intentional.
              </h2>
              <a
                href="mailto:savadiadishan@gmail.com"
                style={{
                  fontSize: "13px",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#fff",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.3)",
                  paddingBottom: "4px",
                  transition: "border-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderBottomColor = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderBottomColor = "rgba(255,255,255,0.3)")
                }
              >
                savadiadishan@gmail.com
              </a>
            </div>

            {/* Links and Socials */}
            <div
              style={{
                display: "flex",
                gap: "clamp(40px, 8vw, 120px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "8px",
                  }}
                >
                  Sitemap
                </p>
                <Link
                  href="/#work"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}
                >
                  Work
                </Link>
                <Link
                  href="/about"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}
                >
                  About
                </Link>
                <Link
                  href="/passions"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}
                >
                  Passions
                </Link>
                <Link
                  href="/contact"
                  style={{ fontSize: "14px", fontWeight: 300, color: "#fff", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "8px",
                  }}
                >
                  Socials
                </p>
                {[
                  { name: "GitHub", url: "https://github.com/dishant11max" },
                  { name: "Twitter", url: "https://x.com/dishant10510925" },
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/dishant-savadia-b38b0a289/" },
                  { name: "Letterboxd", url: "https://letterboxd.com/Dishahahant/" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.opacity = "0.6")}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.opacity = "1")}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom attribution */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "32px",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              © {new Date().getFullYear()} Dishant. All rights reserved.
            </p>
            <p
              style={{
                fontSize: "12px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
