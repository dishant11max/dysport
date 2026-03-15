"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Java"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TailwindCSS", "ShadCN", "GSAP", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
  {
    title: "Design & Product",
    skills: ["Figma", "UI/UX Prototyping", "Product Thinking"],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const groupsRef = useRef<HTMLDivElement>(null);

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
       .fromTo(groupsRef.current?.children ? Array.from(groupsRef.current.children) : [], 
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
            marginBottom: "48px",
            display: "flex",
            alignItems: "center",
            gap: "12px"
          }}
        >
          <span style={{ color: "#000" }}>03</span>
          <span>SKILLS & TECHNOLOGIES</span>
        </div>

        <div ref={groupsRef} style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#000",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em"
                }}
              >
                {category.title}
              </h3>
              <div style={{ 
                display: "flex", 
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                color: "#555",
                gap: "8px",
                flexWrap: "wrap",
                alignItems: "center"
              }}>
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {skill}
                    {sIdx < category.skills.length - 1 && <span style={{ opacity: 0.2 }}>•</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
