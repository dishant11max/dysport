"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const textRef2 = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = [titleRef.current, lineRef.current, textRef.current, textRef2.current];
      
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
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      style={{
        paddingTop: "clamp(60px, 8vh, 100px)",
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(80px, 8vw, 120px)",
            fontWeight: 400,
            lineHeight: "0.9",
            letterSpacing: "-0.04em",
            color: "#000",
            margin: "0 0 16px 0",
            textTransform: "uppercase"
          }}
        >
          ABOUT
        </h1>
        
        <div 
          ref={lineRef}
          style={{ 
            width: "100%", 
            height: "1px", 
            backgroundColor: "rgba(0,0,0,0.1)",
            marginBottom: "60px" 
          }}
        />

        <p
          ref={textRef}
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
         Hi, I’m Dishant a developer focused on building digital products, developer tools, and internet experiments.
        </p>

        <p
          ref={textRef2}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "18px",
            lineHeight: "1.6",
            fontWeight: 300,
            color: "#555",
            maxWidth: "600px"
          }}
        >
          Most of my work revolves around exploring ideas through code, shipping small projects and designing minimal digital experiences.
        </p>
      </div>
    </section>
  );
}
