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

  const description = note.content.split("\n\n")[0].replace(/\*\*/g, "").slice(0, 155);
  const imageUrl = note.image ?? "/hero-blueprint.jpg";

  return {
    title: `${note.title} | Dishant`,
    description,
    openGraph: {
      title: note.title,
      description,
      type: "article",
      publishedTime: note.date,
      url: `https://dishantx.vercel.app/notes/${note.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description,
      images: [imageUrl],
    },
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
