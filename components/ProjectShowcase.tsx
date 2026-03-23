"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectShowcaseProps {
  index: string;          // e.g. "01"
  category: string;       // e.g. "AT A GLANCE"
  title: string;
  description: string;
  longDescription?: string;
  imageSrc: string;
  imageAlt: string;
  link?: string;
  imagePosition?: string;
  imageFit?: "cover" | "contain";
  reversed?: boolean;     // image on left, text on right
  thumbnails?: string[];
  ctaText?: string;
}

export default function ProjectShowcase({
  index,
  category,
  title,
  description,
  longDescription,
  imageSrc,
  imageAlt,
  link = "#",
  imagePosition = "center",
  imageFit = "cover",
  reversed = false,
  thumbnails = [],
  ctaText = "View Full Project",
}: ProjectShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    const ctx = gsap.context(() => {
      // Text reveal
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Image fade in
      gsap.fromTo(
        imageWrapRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Parallax only on desktop — mobile scroll is throttled and causes jank
      if (isDesktop && imgRef.current && imageFit === "cover") {
        gsap.to(imgRef.current, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [imageFit]);

  return (
    <div ref={sectionRef} id="work">
      <div className="grid-container">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[clamp(40px,5vw,80px)]"
        >
          {/* ── Text Block ── */}
          <div
            ref={textRef}
            className={`flex flex-col order-2 ${reversed ? "lg:order-2 lg:pl-[40px]" : "lg:order-1 lg:pr-[40px]"}`}
          >
            <p className="project-index" style={{ marginBottom: "20px" }}>
              {index}
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(11px, 0.85vw, 13px)",
                fontWeight: 400,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "24px",
              }}
            >
              {category}
            </p>

            <h2 className="section-title" style={{ marginBottom: "28px" }}>
              {title}
            </h2>

            <p
              style={{
                fontSize: "clamp(14px, 1.1vw, 17px)",
                fontWeight: 300,
                color: "#555",
                lineHeight: "1.65",
                maxWidth: "440px",
                marginBottom: "16px",
              }}
            >
              {description}
            </p>

            {longDescription && (
              <p
                style={{
                  fontSize: "clamp(13px, 1vw, 15px)",
                  fontWeight: 300,
                  color: "#888",
                  lineHeight: "1.6",
                  maxWidth: "420px",
                  marginBottom: "40px",
                }}
              >
                {longDescription}
              </p>
            )}

            {!longDescription && <div style={{ marginBottom: "40px" }} />}

            <a href={link} target="_blank" rel="noopener noreferrer" className="cta-btn">
              {ctaText}{" "}
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                }}
                className="arrow-icon"
              >
                →
              </span>
            </a>

            {/* Thumbnail strip */}
            {thumbnails.length > 0 && (
              <div className="thumb-strip" style={{ marginTop: "36px" }}>
                {thumbnails.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Preview ${i + 1}`}
                    width={60}
                    height={80}
                    className="thumb"
                    style={{ objectFit: "cover" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Image Block ── */}
          <div
            ref={imageWrapRef}
            className={`relative h-[clamp(420px,55vw,700px)] order-1 ${reversed ? "lg:order-1 lg:ml-[-40px] lg:mr-[40px]" : "lg:order-2 lg:ml-[40px] lg:mr-[-40px]"}`}
          >
            <div
              className="parallax-img-wrap"
              style={{
                height: "100%",
                borderRadius: "2px",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <Image
                ref={imgRef}
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  objectFit: imageFit,
                  objectPosition: imagePosition,
                  willChange: "transform",
                  filter: "contrast(1.06) brightness(0.97)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
