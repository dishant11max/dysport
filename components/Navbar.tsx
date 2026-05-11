"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Scroll-based nav shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 110,
          height: scrolled ? "64px" : "80px",
          backgroundColor: "rgba(244,244,244,0.92)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          opacity: scrolled ? 0.95 : 1,
          transition: "height 0.3s ease, opacity 0.3s ease",
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
            className="nav-brand"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "#000",
              textDecoration: "none",
              position: "relative",
              zIndex: 102
            }}
          >
            Dishant savadia
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex gap-10 items-center">
            <Link href="/#work" className="nav-link" style={{ borderBottom: pathname === "/" ? "1px solid #000" : undefined, paddingBottom: "2px" }}>
              Work
            </Link>
            <Link href="/passions" className="nav-link" style={{ borderBottom: pathname === "/passions" ? "1px solid #000" : undefined, paddingBottom: "2px" }}>
              Interests
            </Link>
            <Link href="/notes" className="nav-link" style={{ borderBottom: pathname === "/notes" || pathname.startsWith("/notes/") ? "1px solid #000" : undefined, paddingBottom: "2px" }}>
              Notes
            </Link>
            <Link href="/about" className="nav-link" style={{ borderBottom: pathname === "/about" ? "1px solid #000" : undefined, paddingBottom: "2px" }}>
              About
            </Link>
            <Link href="/contact" className="nav-link" style={{ borderBottom: pathname === "/contact" ? "1px solid #000" : undefined, paddingBottom: "2px" }}>
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden w-8 h-8 z-[102] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 mx-auto">
              <span className={`absolute left-0 w-full h-[1px] bg-black transition-all duration-300 ease-out ${isMobileMenuOpen ? 'top-[9px] rotate-45' : 'top-0'}`}></span>
              <span className={`absolute left-0 top-[9px] w-full h-[1px] bg-black transition-all duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 w-full h-[1px] bg-black transition-all duration-300 ease-out ${isMobileMenuOpen ? 'bottom-[10px] -rotate-45' : 'bottom-0'}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F4F4F4] z-[101] flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-8 items-center text-center">
          <Link href="/#work" className="font-playfair text-4xl text-black hover:opacity-60 transition-opacity">
            Work
          </Link>
          <Link href="/passions" className="font-playfair text-4xl text-black hover:opacity-60 transition-opacity">
            Interests
          </Link>
          <Link href="/notes" className="font-playfair text-4xl text-black hover:opacity-60 transition-opacity">
            Notes
          </Link>
          <Link href="/about" className="font-playfair text-4xl text-black hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="font-playfair text-4xl text-black hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}
