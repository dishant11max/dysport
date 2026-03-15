"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TrainingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = elementsRef.current ? Array.from(elementsRef.current.children) : [];
      
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
      <div ref={elementsRef} style={{ width: "100%", maxWidth: "720px" }}>
        
        <div
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
          <span style={{ color: "#000" }}>03</span>
          <span>GYM</span>
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 3vw, 28px)",
            fontWeight: 400,
            color: "#000",
            marginBottom: "32px",
          }}
        >
          TRAINING
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: 300,
            color: "#555",
            maxWidth: "600px",
            marginBottom: "24px"
          }}
        >
          Training has been a consistent part of my routine for the past 1.5 years.
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: 300,
            color: "#555",
            maxWidth: "600px",
            marginBottom: "40px"
          }}
        >
          My focus is aesthetics, discipline, and showing up every day.
        </p>

        <div>
          <span style={{ 
            color: "#888", 
            textTransform: "uppercase", 
            letterSpacing: "0.1em", 
            fontSize: "11px", 
            fontWeight: 600, 
            display: "block", 
            marginBottom: "8px",
            fontFamily: "'Inter', sans-serif",
          }}>Favorite exercise</span>
          <span style={{ 
            color: "#333", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "14px", 
            fontWeight: 400 
          }}>Chest Press</span>
        </div>

      </div>
    </section>
  );
}
