"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headlineRef.current,
            start: "top 90%", // Trigger slightly before it comes fully into view
          },
        }
      );
    }
  }, []);

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
                ref={headlineRef}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(40px, 5vw, 68px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  marginBottom: "16px",
                  color: "#fff",
                  willChange: "transform, opacity",
                }}
              >
                 Let&apos;s build something
                <br />
             worth talking about.
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
                gap: "clamp(80px, 12vw, 160px)", 
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
                    marginBottom: "8px",
                  }}
                >
                  Sitemap
                </p>
                {[
                  { name: "Work", url: "/#work", internal: true },
                  { name: "About", url: "/about", internal: true },
                  { name: "Passions", url: "/passions", internal: true },
                  { name: "Notes", url: "/notes", internal: true },
                  { name: "Contact", url: "/contact", internal: true },
                ].map((item) => (
                  item.internal ? (
                    <Link key={item.name} href={item.url} className="footer-nav-link">
                      {item.name} <span className="footer-arrow">→</span>
                    </Link>
                  ) : (
                    <a key={item.name} href={item.url} className="footer-nav-link">
                      {item.name} <span className="footer-arrow">→</span>
                    </a>
                  )
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.3)",
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
                    className="footer-nav-link"
                  >
                    {social.name} <span className="footer-arrow">→</span>
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
