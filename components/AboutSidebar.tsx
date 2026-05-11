"use client";

export default function AboutSidebar() {
  const stackItemStyle = {
    transition: "all 0.25s ease",
    cursor: "default"
  };

  return (
    <aside
      style={{
        position: "sticky",
        top: "120px",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "48px"
      }}
    >
      {/* Identity */}
      <div>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "26px",
            fontWeight: 400,
            color: "#000",
            marginBottom: "6px"
          }}
        >
          Dishant
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            color: "#777",
            textTransform: "uppercase",
            letterSpacing: "0.15em"
          }}
        >
          Code. Films. Gym.
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "60px",
          height: "1px",
          background: "#e5e5e5"
        }}
      />

      {/* Projects Built */}
      <div>
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "16px"
          }}
        >
          Projects Built
        </h3>

        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "84px",
            fontWeight: 400,
            lineHeight: "1",
            color: "#000"
          }}
        >
          08+
        </p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "60px",
          height: "1px",
          background: "#e5e5e5"
        }}
      />

      {/* Core Stack */}
      <div>
        <h3
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            color: "#000",
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            marginBottom: "20px"
          }}
        >
          Core Stack
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#555",
            fontWeight: 400
          }}
        >
          {["Next.js", "TypeScript", "Node.js", "Supabase"].map((tech) => (
            <span
              key={tech}
              style={stackItemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(6px)";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0px)";
                e.currentTarget.style.color = "#555";
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Personality Line */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "13px",
          color: "#888",
          maxWidth: "220px",
          lineHeight: "1.6"
        }}
      >
        whatever it takes to be the best.
      </p>

      {/* Resume Download */}
      <a
        href="/resume.pdf"
        download
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#111",
          textDecoration: "none",
          borderBottom: "1px solid #000",
          paddingBottom: "2px",
          transition: "opacity 0.3s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      >
        Download Resume →
      </a>
    </aside>
  );
}