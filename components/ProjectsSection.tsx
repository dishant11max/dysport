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
      "Problem: choosing what to learn next is paralyzing. Approach: AI-generated roadmaps tailored to your goals, stack, and experience level — no generic curricula. Stack: Next.js, OpenAI, Vercel. Outcome: a tool that gives developers a clear starting point and ships a decision in under 60 seconds.",
    imageSrc: "/devmap.jpg",
    imageAlt: "Dev Map",
    link: "https://devmap-six.vercel.app/",
    imagePosition: "center center",
    imageFit: "cover",
    reversed: false,
    thumbnails: [],
    gradient: "from-[#0d2018] to-[#080808]",
    mobileImageSrc: "/media__1778845142582.jpg",
  },
  {
    index: "02",
    category: "Platform",
    title: "ECHO",
    description:
      "A developer-focused social platform built as a full-stack final year project.",
    longDescription:
      "Problem: developers lack a focused space to share progress and connect with peers beyond generic social feeds. Approach: full-stack social platform with auth, feeds, and real-time interactions. Stack: React, Node.js, Supabase. Outcome: a shipped, working platform that served as proof developers need their own social layer.",
    imageSrc: "/echo-project.jpg",
    imageAlt: "ECHO Platform",
    link: "https://github.com/dishant11max/ECHO",
    imagePosition: "center center",
    imageFit: "cover",
    reversed: true,
    thumbnails: [],
    ctaText: "View on GitHub",
    gradient: "from-[#0f1f3d] to-[#080808]",
    mobileImageSrc: "/media__1778845142665.jpg",
  },
  {
    index: "03",
    category: "Experiment",
    title: "ETERNAL RECURRENCE",
    description:
      "A question disguised as a website: would you choose this life again?",
    longDescription:
      "Problem: philosophy rarely ships as a product. Approach: strip Nietzsche's eternal recurrence thought experiment down to a single interactive question with no escape route. Stack: vanilla HTML, CSS, JS — no frameworks. Outcome: a contemplative experience that proves restraint is a design decision.",
    imageSrc: "/recurrence.png",
    imageAlt: "Eternal Recurrence",
    link: "https://recurrence-omega.vercel.app/",
    reversed: false,
    thumbnails: [],
    gradient: "from-[#1a0d2e] to-[#080808]",
    mobileImageSrc: "/media__1778845142678.jpg",
  },
  {
    index: "04",
    category: "Platform",
    title: "SPORTS PARTNER FINDER",
    description:
      "Built for the athlete who trains alone because they haven't found their match yet.",
    longDescription:
      "Problem: finding a consistent training partner in your area is surprisingly unsolved. Approach: location-aware matching platform connecting players for pickup games and accountability. Stack: React, Supabase, Mapbox. Outcome: actively in development — MVP scoped and in progress.",
    imageSrc: "/sports.jpg",
    imageAlt: "Sports Partner Finder",
    reversed: true,
    thumbnails: [],
    ctaText: "Currently Building",
    gradient: "from-[#2a1200] to-[#080808]",
    mobileImageSrc: "/media__1778846264080.jpg",
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
            href="/projects"
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
