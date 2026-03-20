"use client";

import Link from "next/link";
import { Note } from "@/data/notes";

interface NoteItemProps {
  note: Note;
  index: number;
}

export default function NoteItem({ note, index }: NoteItemProps) {
  const num = String(index + 1).padStart(2, "0");
  const preview = note.content.replace(/\s+/g, " ").trim().slice(0, 165);

  return (
    <Link href={`/notes/${note.slug}`} className="note-item-link" aria-label={note.title}>
      <article className="note-item">
        <div className="note-item-inner">
          <span className="note-item-label">NOTE {num}</span>
          <h2 className="note-item-title">{note.title}</h2>
          <p className="note-item-excerpt">
            {preview}
            {note.content.length > 165 ? "..." : ""}
          </p>
          <div className="note-item-meta">
            <span className="note-item-date">{note.date}</span>
            <span className="note-item-separator" aria-hidden="true">/</span>
            <span className="note-item-read">Read note</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
