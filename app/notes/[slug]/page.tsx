import "../notes.css";
import { notes } from "@/data/notes";
import NoteLayout from "@/components/notes/NoteLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Not Found | Dishant" };
  return {
    title: `${note.title} | Dishant`,
    description: note.content.split("\n\n")[0].slice(0, 155),
  };
}

export default async function NoteSlugPage({ params }: Props) {
  const { slug } = await params;
  const noteIndex = notes.findIndex((n) => n.slug === slug);
  if (noteIndex === -1) notFound();

  const note = notes[noteIndex];

  return (
    <main className="note-detail-root">
      <NoteLayout note={note} noteNumber={noteIndex + 1} />
    </main>
  );
}
