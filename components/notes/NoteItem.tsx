"use client";

import Link from "next/link";
import { Note } from "@/data/notes";

interface NoteItemProps {
  note: Note;
  index: number;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <Link href={`/notes/${note.slug}`} className="note-item-link" aria-label={note.title}>
      <article className="note-item">
        <div className="note-item-inner">
          <h2 className="note-item-title">{note.title}</h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className="note-item-date">{note.date}</span>
            <span className="note-item-arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
