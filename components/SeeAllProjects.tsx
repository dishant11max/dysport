"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SeeAllProjects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        paddingTop: "clamp(100px, 15vw, 180px)",
        paddingBottom: "clamp(100px, 15vw, 180px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        marginTop: "clamp(80px, 12vw, 160px)",
      }}
    >
      <div className="grid-container" style={{ textAlign: "center" }}>
        <a
          href="#"
          style={{
            display: "inline-block",
            color: "#000",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onMouseEnter={() => {
            gsap.to(arrowRef.current, { x: 15, duration: 0.3, ease: "power2.out" });
          }}
          onMouseLeave={() => {
            gsap.to(arrowRef.current, { x: 0, duration: 0.3, ease: "power2.out" });
          }}
        >
          <h2
            ref={textRef}
            className="see-all-title"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              justifyContent: "center",
            }}
          >
            SEE ALL PROJECTS
            <span
              ref={arrowRef}
              style={{
                display: "inline-block",
              }}
            >
              →
            </span>
          </h2>
        </a>
      </div>
    </section>
  );
}
