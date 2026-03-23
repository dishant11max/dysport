"use client";

import { useState } from "react";
import Image from "next/image";

const posters = [
  {
    src: "/media__1773609836737.jpg",
    alt: "The Darjeeling Limited",
    defaultTransform: "translate(-30px, -40px) rotate(-4deg)",
    hoverTransform: "translate(-80px, -60px) rotate(-10deg)",
    zIndex: 1,
    animationDelay: "0s",
  },
  {
    src: "/media__1773609818529.jpg",
    alt: "The Perks of Being a Wallflower",
    defaultTransform: "translate(40px, -10px) rotate(3deg)",
    hoverTransform: "translate(90px, -30px) rotate(8deg)",
    zIndex: 2,
    animationDelay: "1.6s",
  },
  {
    src: "/media__1773609818549.jpg",
    alt: "About Time",
    defaultTransform: "translate(-20px, 100px) rotate(-2deg)",
    hoverTransform: "translate(-70px, 120px) rotate(-8deg)",
    zIndex: 3,
    animationDelay: "3.2s",
  },
  {
    src: "/media__1773609818663.jpg",
    alt: "Good Will Hunting",
    defaultTransform: "translate(60px, 160px) rotate(5deg)",
    hoverTransform: "translate(110px, 180px) rotate(12deg)",
    zIndex: 4,
    animationDelay: "4.8s",
  },
];

export default function PosterStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStackHovered, setIsStackHovered] = useState(false);

  return (
    <>
      {/* Float keyframes defined once — animation-fill-mode: backwards prevents the
          frame-zero flash during animation-delay. */}
      <style>{`
        @keyframes posterFloat {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      <div
        onMouseEnter={() => setIsStackHovered(true)}
        onMouseLeave={() => {
          setIsStackHovered(false);
          setHoveredIndex(null);
        }}
        onClick={() => {
          if (!hoveredIndex) setIsStackHovered(!isStackHovered);
        }}
        className="w-[320px] max-w-[100vw] h-[520px] relative cursor-pointer lg:cursor-default"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {posters.map((poster, index) => {
          const isHovered = hoveredIndex === index;

          let currentTransform = isStackHovered
            ? poster.hoverTransform
            : poster.defaultTransform;
          if (isHovered) {
            currentTransform = `${poster.hoverTransform} scale(1.08)`;
          }

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                if (hoveredIndex === index) setHoveredIndex(null);
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsStackHovered(true);
                setHoveredIndex(hoveredIndex === index ? null : index);
              }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "220px",
                height: "320px",
                borderRadius: "6px",
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                transform: currentTransform,
                transition:
                  "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.4s ease",
                zIndex: isHovered ? 10 : poster.zIndex,
                filter: isHovered
                  ? "grayscale(0%)"
                  : isStackHovered
                  ? "grayscale(30%)"
                  : "grayscale(60%)",
                cursor: "pointer",
                backgroundColor: "#e0e0e0",
                willChange: "transform",
                // Stop floating when stack is interacted with.
                // animation-fill-mode: backwards ensures the poster stays at its
                // defaultTransform (not the 0% float keyframe) during the delay period,
                // which eliminates the frame-one glitch/jump on page load.
                animation: isStackHovered
                  ? "none"
                  : `posterFloat 6s ease-in-out ${poster.animationDelay} infinite backwards`,
              }}
            >
              <Image
                src={poster.src}
                alt={poster.alt}
                fill
                sizes="220px"
                style={{ objectFit: "cover", display: "block" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
