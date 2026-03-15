"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, captionRef.current, lineRef.current], {
        opacity: 0,
        y: 30,
      });

      // Cinematic staggered reveal
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.9"
        )
        .to(
          lineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .to(
          captionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div className="grid-container" style={{ width: "100%" }}>
        {/* Caption label above title */}
        <p
          ref={captionRef}
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "32px",
          }}
        >
          Developer / Builder / Student
        </p>

        {/* Main hero title */}
        <h1
          ref={titleRef}
          className="hero-title"
          style={{ marginBottom: "48px" }}
        >
          DISHANT
        </h1>

        {/* Horizontal rule */}
        <div
          ref={lineRef}
          className="divider"
          style={{ marginBottom: "40px", maxWidth: "680px" }}
        />

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(16px, 1.4vw, 22px)",
            fontWeight: 300,
            color: "#555",
            maxWidth: "520px",
            lineHeight: "1.55",
            letterSpacing: "-0.01em",
          }}
        >
          Building digital products,
          <br />
          developer tools and internet experiments.
        </p>

        {/* Scroll cue */}
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "#000",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#555",
            }}
          >
            Scroll
          </span>
        </div>

        {/* GitHub reference */}
        <div style={{ marginTop: "24px" }}>
          <a
            href="https://github.com/dishant11max"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#555",
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "border-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.borderBottomColor = "#555")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.borderBottomColor = "transparent")
            }
          >
            github.com/dishant11max ↗
          </a>
        </div>
      </div>
    </section>
  );
}
