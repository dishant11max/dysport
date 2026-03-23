"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Note } from "@/data/notes";

interface NoteLayoutProps {
  note: Note;
  noteNumber: number;
}

function getReadingTime(content: string): string {
  const words = content.replace(/\n/g, " ").split(/\s+/).filter(Boolean).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default function NoteLayout({ note, noteNumber }: NoteLayoutProps) {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const num = String(noteNumber).padStart(2, "0");
  const readingTime = getReadingTime(note.content);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const full = el.scrollHeight - el.clientHeight;
      setProgress(full > 0 ? Math.min(100, (top / full) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const paragraphs = note.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  const lastIndex = paragraphs.length - 1;

  return (
    <>
      <div className="note-progress-bar" style={{ width: `${progress}%` }} aria-hidden="true" />

      <div className="note-layout">
        <div ref={layoutRef} className="note-essay-container">

          {/* Top back link */}
          <Link href="/notes" className="note-back-link">
            Back to Notes
          </Link>

          {/* Header */}
          <p className="note-post-label">NOTE {num}</p>
          <h1 className="note-post-title">{note.title}</h1>
          <p className="note-post-meta">
            <span>{note.date}</span>
            <span className="note-post-meta-dot" aria-hidden="true">/</span>
            <span>{readingTime}</span>
          </p>

          {/* Short custom divider */}
          <div className="note-post-divider" />

          {/* Essay body */}
          <div className="note-essay-body">
            {paragraphs.map((paragraph, index) => {
              const isIntro = index === 0;
              const isFinal = index === lastIndex;

              const classes = [
                "note-essay-para",
                isIntro ? "note-essay-intro" : "",
                isFinal ? "note-essay-final" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <p key={index} className={classes}>
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Bottom back link */}
          <div className="note-post-footer">
            <Link href="/notes" className="note-back-link">
              Back to Notes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
