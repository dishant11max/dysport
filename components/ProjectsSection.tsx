"use client";

import ProjectShowcase, { ProjectShowcaseProps } from "./ProjectShowcase";

const projects: ProjectShowcaseProps[] = [
  {
    index: "01",
    category: "At A Glance",
    title: "DEVMAP",
    description:
      "AI-powered developer roadmap generator that creates structured learning paths for developers.",
    longDescription:
      "Generates custom learning roadmaps using AI, tailored to each developer's experience level, goals, and preferred technologies.",
    imageSrc: "/devmap.jpg",
    imageAlt: "Dev Map",
    link: "https://devmap-six.vercel.app/",
    imagePosition: "center center",
    imageFit: "contain",
    reversed: false,
    thumbnails: [],
  },
  {
    index: "02",
    category: "Experiment",
    title: "ETERNAL RECURRENCE",
    description:
      "A minimalist personal web experiment exploring philosophy, identity, and design.",
    imageSrc: "/recurrence.png",
    imageAlt: "Eternal Recurrence",
    link: "https://recurrence-omega.vercel.app/",
    reversed: true,
    thumbnails: [],
  },
  {
    index: "03",
    category: "Experiments",
    title: "AI EXPERIMENTS",
    description:
      "Collection of AI tools, micro projects and developer prototypes.",
    longDescription:
      "A living repository of AI-powered experiments — from generative tools to developer utilities and interactive prototypes.",
    imageSrc: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=92&auto=format&fit=crop",
    imageAlt: "AI Experiments",
    reversed: false,
    thumbnails: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=200&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1655720031554-a929595ffad7?w=200&q=72&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&q=72&auto=format&fit=crop",
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      style={{
        paddingTop: "clamp(120px, 15vw, 220px)",
        paddingBottom: "clamp(80px, 10vw, 140px)",
      }}
    >
      <div className="grid-container">
        {/* Section header */}
        <div
          style={{
            marginBottom: "clamp(80px, 10vw, 140px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "16px",
              }}
            >
              Selected Work
            </p>
            <h2
              className="section-title"
              style={{ fontSize: "clamp(40px, 4vw, 60px)" }}
            >
              Projects
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#555",
              textDecoration: "none",
              borderBottom: "1px solid #ccc",
              paddingBottom: "4px",
              transition: "color 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
              (e.target as HTMLAnchorElement).style.borderBottomColor = "#000";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#555";
              (e.target as HTMLAnchorElement).style.borderBottomColor = "#ccc";
            }}
          >
            View All →
          </a>
        </div>
      </div>

      {/* Project blocks with spacing */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(120px, 16vw, 240px)",
        }}
      >
        {projects.map((project) => (
          <ProjectShowcase key={project.index} {...project} />
        ))}
      </div>
    </section>
  );
}
