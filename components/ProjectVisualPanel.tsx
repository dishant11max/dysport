import React from 'react';

interface ProjectVisualPanelProps {
  gradient: string;
  index: string;
  tag: string;
}

export default function ProjectVisualPanel({ gradient, index, tag }: ProjectVisualPanelProps) {
  return (
    <div className={`block md:hidden aspect-video relative overflow-hidden bg-[#0a0a0a] bg-gradient-to-br ${gradient} ring-1 ring-white/5 group`}>
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.03] transition-all duration-300 pointer-events-none" />

      {/* SVG Noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)"/>
      </svg>

      {/* Project Label */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1">
        <span className="text-xs font-mono text-white/20">{index}</span>
        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">{tag}</span>
      </div>
    </div>
  );
}
