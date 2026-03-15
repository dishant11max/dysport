"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IdeasSection() {
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
          <span style={{ color: "#000" }}>04</span>
          <span>IDEAS & INFLUENCE</span>
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(24px, 3vw, 28px)",
            fontWeight: 400,
            color: "#000",
            marginBottom: "40px",
          }}
        >
          IDEAS THAT INSPIRE ME
        </h2>

        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", marginBottom: "40px", fontFamily: "'Inter', sans-serif" }}>
          
          <div>
            <span style={{ 
              color: "#888", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em", 
              fontSize: "11px", 
              fontWeight: 600, 
              display: "block", 
              marginBottom: "16px" 
            }}>People</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", color: "#111", fontWeight: 400 }}>
              <span>Naval Ravikant</span>
              <span>Travis Kalanick</span>
              <span>Anthony Bourdain</span>
            </div>
          </div>

          <div>
            <span style={{ 
              color: "#888", 
              textTransform: "uppercase", 
              letterSpacing: "0.1em", 
              fontSize: "11px", 
              fontWeight: 600, 
              display: "block", 
              marginBottom: "16px" 
            }}>Interests</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", color: "#111", fontWeight: 400 }}>
              <span>Philosophy</span>
              <span>Design</span>
              <span>Films</span>
              <span>Storytelling</span>
            </div>
          </div>

        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: "1.6",
            fontWeight: 300,
            color: "#888",
            maxWidth: "500px"
          }}
        >
          Ideas and perspectives that shape how I think about building products and navigating the internet.
        </p>

      </div>
    </section>
  );
}
