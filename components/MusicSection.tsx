"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const songs = [
  "500 Miles - Peter, Paul & Mary",
  "Do I Wanna know - Arctic Monkeys",
  "Chains - Fleetwood Mac",
  "Wish you were here - Pink Floyd",
];

const genres = ["Rock", "Pop", "Indie"];

export default function MusicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        labelRef.current, 
        headingRef.current, 
        ...(listRef.current?.children ? Array.from(listRef.current.children) : []),
        detailsRef.current
      ];
      
      gsap.fromTo(elements, 
        { y: 12, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "720px" }}>
        <div
          ref={labelRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span style={{ color: "#000" }}>02</span>
          <span>MUSIC</span>
        </div>

        <h2
          ref={headingRef}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 3vw, 28px)",
            fontWeight: 400,
            color: "#000",
            marginBottom: "32px",
          }}
        >
          MUSIC I RETURN TO
        </h2>

        <ul ref={listRef} style={{ listStyle: "none", padding: 0, margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
          {songs.map((song, index) => (
            <li 
              key={index} 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#111",
              }}
            >
              {song}
            </li>
          ))}
        </ul>

        <div ref={detailsRef}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#666",
              marginBottom: "24px",
              lineHeight: "1.5"
            }}
          >
            Usually playing while building, writing, or thinking.
          </p>

          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", fontFamily: "'Inter', sans-serif", fontSize: "14px" }}>
            <div>
              <span style={{ color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px", fontWeight: 600, display: "block", marginBottom: "8px" }}>Preferred genres</span>
              <div style={{ color: "#333", display: "flex", flexDirection: "column", gap: "4px" }}>
                {genres.map(genre => <span key={genre}>{genre}</span>)}
              </div>
            </div>
            <div>
              <span style={{ color: "#888", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "11px", fontWeight: 600, display: "block", marginBottom: "8px" }}>Music platform</span>
              <span style={{ color: "#333" }}>YouTube Music</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
