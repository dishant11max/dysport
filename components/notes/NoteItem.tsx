"use client";

import Link from "next/link";
import { Note } from "@/data/notes";

interface NoteItemProps {
  note: Note;
  index: number;
}

function getReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export default function NoteItem({ note }: NoteItemProps) {
  const readingTime = getReadingTime(note.content);
  return (
    <Link href={`/notes/${note.slug}`} className="note-item-link" aria-label={note.title}>
      <article className="note-item">
        <div className="note-item-inner">
          <h2 className="note-item-title">{note.title}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span className="note-item-date">{note.date}</span>
            <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{readingTime}</span>
            <span className="note-item-arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
