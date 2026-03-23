"use client";

import ProjectShowcase, { ProjectShowcaseProps } from "./ProjectShowcase";

const projects: ProjectShowcaseProps[] = [
  {
    index: "01",
    category: "At A Glance",
    title: "DEVMAP",
    description:
      "Built to remove decision paralysis for developers learning new tech.",
    longDescription:
      "AI-powered roadmap generator that creates structured paths based on your goals, stack, and experience level.",
    imageSrc: "/devmap.jpg",
    imageAlt: "Dev Map",
    link: "https://devmap-six.vercel.app/",
    imagePosition: "center center",
    imageFit: "cover",
    reversed: false,
    thumbnails: [],
  },
  {
    index: "02",
    category: "Experiment",
    title: "ETERNAL RECURRENCE",
    description:
      "A question disguised as a website: would you choose this life again?",
    longDescription:
      "Minimalist experiment in philosophy and identity. No frameworks, no noise. Just the question.",
    imageSrc: "/recurrence.png",
    imageAlt: "Eternal Recurrence",
    link: "https://recurrence-omega.vercel.app/",
    reversed: true,
    thumbnails: [],
  },
  {
    index: "03",
    category: "Platform",
    title: "SPORTS PARTNER FINDER",
    description:
      "Built for the athlete who trains alone because they haven't found their match yet.",
    longDescription:
      "A platform connecting players with nearby partners for training, pickup games, and accountability.",
    imageSrc: "/sports.jpg",
    imageAlt: "Sports Partner Finder",
    reversed: false,
    thumbnails: [],
    ctaText: "Currently Building",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="work"
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
