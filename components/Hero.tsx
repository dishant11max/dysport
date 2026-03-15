"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const cornerImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set([titleRef.current, subtitleRef.current, captionRef.current, lineRef.current, cornerImageRef.current, taglineRef.current], {
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
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.7"
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
        )
        .to(
          cornerImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.5"
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
      <div className="grid-container" style={{ width: "100%", position: "relative" }}>
        <div 
          className="hero-layout-grid"
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 420px",
            gap: "clamp(60px, 8vw, 120px)",
            alignItems: "center",
            minHeight: "70vh"
          }}
        >
          {/* Left Column: Typography Content */}
          <div className="hero-text-col">
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

            <h1
              ref={titleRef}
              className="hero-title"
              style={{ marginBottom: "48px" }}
            >
              DISHANT
            </h1>

            <div
              ref={lineRef}
              className="divider"
              style={{ marginBottom: "40px", maxWidth: "480px" }}
            />

            <p
              ref={subtitleRef}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(16px, 1.4vw, 22px)",
                fontWeight: 300,
                color: "#555",
                maxWidth: "480px",
                lineHeight: "1.55",
                letterSpacing: "-0.01em",
              }}
            >
              Building digital products,
              <br />
              developer tools and internet experiments.
              
            </p>

            <p
              ref={taglineRef}
              style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.1vw, 16px)",
                fontWeight: 500,
                backgroundColor: "#1560BD", // Denim Blue highlight
                color: "#FFFFFF",
                marginTop: "20px",
                padding: "4px 10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Minimal. Powerful. Intentional.
            </p>
            
            <div
              style={{
                marginTop: "60px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div style={{ width: "32px", height: "1px", backgroundColor: "#000" }} />
              <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555" }}>
                Scroll
              </span>
            </div>

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
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.borderBottomColor = "#555")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.borderBottomColor = "transparent")}
              >
              VIEW GITHUB → github.com/dishant11max ↗
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Panel */}
          <div
            ref={cornerImageRef}
            className="hero-image-col"
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "center"
            }}
          >
            <div
              className="hero-visual-panel"
              style={{
                position: "relative",
                width: "420px",
                height: "clamp(400px, 75vh, 650px)",
                borderRadius: "12px",
                overflow: "hidden",
                marginRight: "-60px", // Premium overlap effect
                boxShadow: "0 40px 80px rgba(0,0,0,0.12)",
                transformOrigin: "right center"
              }}
            >
              <Image 
                src="/hero-blueprint.jpg" 
                alt="Artistic blueprint" 
                fill
                priority
                style={{ objectFit: "cover" }} 
              />
            </div>
          </div>
        </div>

        {/* Global Styles for the Overlap and Responsiveness */}
        <style jsx>{`
          .hero-layout-grid {
             width: 100%;
          }
          @media (max-width: 1200px) {
            .hero-layout-grid {
              grid-template-columns: 1fr 320px !important;
              gap: 60px !important;
            }
            .hero-visual-panel {
              width: 320px !important;
              margin-right: -30px !important;
            }
          }
          @media (max-width: 900px) {
            .hero-layout-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
            }
            .hero-visual-panel {
              width: 100% !important;
              height: 400px !important;
              margin-right: 0 !important;
              margin-top: 40px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
