"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "80px",
        backgroundColor: "rgba(244,244,244,0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="grid-container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Name */}
        <Link
          href="/"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            color: "#000",
            textDecoration: "none",
          }}
        >
          Dishant
        </Link>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          <a href="#work" className="nav-link">
            Work
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a
            href="mailto:dishant@example.com"
            className="nav-link"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
