"use client";

import { useState } from "react";

const posters = [
  {
    src: "/media__1773609836737.jpg", // Darjeeling Limited
    alt: "The Darjeeling Limited",
    defaultTransform: "translate(-30px, -40px) rotate(-4deg)",
    hoverTransform: "translate(-80px, -60px) rotate(-10deg)",
    zIndex: 1,
    animationDelay: "0s",
  },
  {
    src: "/media__1773609818529.jpg", // Perks of Being a Wallflower
    alt: "The Perks of Being a Wallflower",
    defaultTransform: "translate(40px, -10px) rotate(3deg)",
    hoverTransform: "translate(90px, -30px) rotate(8deg)",
    zIndex: 2,
    animationDelay: "1.5s",
  },
  {
    src: "/media__1773609818549.jpg", // About Time
    alt: "About Time",
    defaultTransform: "translate(-20px, 100px) rotate(-2deg)",
    hoverTransform: "translate(-70px, 120px) rotate(-8deg)",
    zIndex: 3,
    animationDelay: "3s",
  },
  {
    src: "/media__1773609818663.jpg", // Good Will Hunting
    alt: "Good Will Hunting",
    defaultTransform: "translate(60px, 160px) rotate(5deg)",
    hoverTransform: "translate(110px, 180px) rotate(12deg)",
    zIndex: 4,
    animationDelay: "4.5s",
  },
];

export default function PosterStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isStackHovered, setIsStackHovered] = useState(false);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
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
          // Allow tapping the background container to toggle spread on mobile
          if (!hoveredIndex) {
             setIsStackHovered(!isStackHovered);
          }
        }}
        className="w-[320px] max-w-[100vw] h-[520px] relative cursor-pointer lg:cursor-default"
        style={{ 
          // Container width scales down slightly on very small screens to fit without overflowing
          transform: "scale(min(1, calc(100vw / 360)))",
          WebkitTapHighlightColor: "transparent"
        }}
      >
        {posters.map((poster, index) => {
          const isHovered = hoveredIndex === index;
          
          let currentTransform = isStackHovered ? poster.hoverTransform : poster.defaultTransform;
          if (isHovered) {
             // Further scale the specifically hovered poster
             currentTransform = `${poster.hoverTransform} scale(1.08)`;
          }

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => {
                if (hoveredIndex === index) {
                  setHoveredIndex(null);
                }
              }}
              onClick={(e) => {
                // On mobile, tapping a poster toggles it to the front
                e.stopPropagation();
                setIsStackHovered(true); // ensure stack is fanned out
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
                transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease, z-index 0s",
                zIndex: isHovered ? 10 : poster.zIndex,
                filter: isHovered ? "grayscale(0%)" : (isStackHovered ? "grayscale(30%)" : "grayscale(60%)"),
                cursor: "pointer",
                backgroundColor: "#e0e0e0",
                animation: isStackHovered ? "none" : `float 6s ease-in-out infinite`,
                animationDelay: poster.animationDelay,
              }}
            >
              <img 
                src={poster.src} 
                alt={poster.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://via.placeholder.com/220x320/dddddd/888888?text=${encodeURIComponent(poster.alt)}`;
                }}
              />
            </div>
          )
        })}
      </div>
    </>
  );
}
