"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const explorations = [
  "AI APIs",
  "LLM applications",
  "Product experimentation",
  "Full-stack architecture"
];

export default function ExploringSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const g = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });

      g.fromTo(labelRef.current, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" })
       .fromTo(listRef.current?.children ? Array.from(listRef.current.children) : [], 
         { y: 12, opacity: 0 },
         { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
         "-=0.4"
       );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ width: "100%" }}>
        <div
          ref={labelRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span style={{ color: "#000" }}>04</span>
          <span>CURRENTLY EXPLORING</span>
        </div>

        <ul ref={listRef} style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
          {explorations.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(18px, 1.5vw, 22px)",
                  fontWeight: 300,
                  color: "#333",
                  letterSpacing: "-0.01em"
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
