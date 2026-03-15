"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const films = [
  "The Perks of Being a Wallflower",
  "Good Will Hunting",
  "About Time",
  "The Darjeeling Limited"
];

export default function FilmsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [
        labelRef.current, 
        headingRef.current, 
        ...(listRef.current?.children ? Array.from(listRef.current.children) : []),
        captionRef.current
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
          <span style={{ color: "#000" }}>01</span>
          <span>FILMS</span>
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
          FAVORITE FILMS
        </h2>

        <ul ref={listRef} style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
          {films.map((film, index) => (
            <li 
              key={index} 
              style={{ 
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "#111",
              }}
            >
              {film}
            </li>
          ))}
        </ul>

        <p
          ref={captionRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#888",
            maxWidth: "400px",
            lineHeight: "1.5"
          }}
        >
          Films that explore identity, human connection, and the quiet moments that shape who we become.
        </p>
      </div>
    </section>
  );
}
