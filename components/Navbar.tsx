"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
              position: "relative",
              zIndex: 102
            }}
          >
            Dishant Savadia
          </Link>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex gap-10 items-center">
            <Link href="/#work" className="nav-link">
              Work
            </Link>
            <Link href="/passions" className="nav-link">
              Index
            </Link>
            <Link href="/notes" className="nav-link">
              Notes
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[102] relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`bg-black block transition-all duration-300 ease-out h-[1px] w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px]' : '-translate-y-1'}`}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-[1px] w-6 rounded-sm my-[3px] ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-black block transition-all duration-300 ease-out h-[1px] w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : 'translate-y-1'}`}></span>
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
            Index
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
