"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const statementRef = useRef<HTMLDivElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [labelRef.current, statementRef.current, pRef.current];
      
      gsap.fromTo(elements, 
        { 
          y: 12, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
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
            marginBottom: "40px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span style={{ color: "#000" }}>01</span>
          <span>PHILOSOPHY</span>
        </div>

        <div 
          ref={statementRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(24px, 3vw, 32px)",
            lineHeight: "1.2",
            fontWeight: 500,
            color: "#111",
            maxWidth: "600px",
            marginBottom: "32px",
            letterSpacing: "-0.02em"
          }}
        >
          Good software should feel<br />
          <span style={{ color: "#888" }}>simple,</span><br />
          intentional,<br />
          <span style={{ color: "#888" }}>and useful.</span>
        </div>

        <p
          ref={pRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: 300,
            color: "#555",
            maxWidth: "600px",
          }}
        >
          I believe that every line of code should serve a purpose. Most of my projects start as experiments,small ideas explored through code, iteration, and curiosity.
        </p>
      </div>
    </section>
  );
}
