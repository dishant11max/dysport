import "./notes.css";
import { notes } from "@/data/notes";
import NotesList from "@/components/notes/NotesList";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Dishant",
  description: "A personal writing archive. Thoughts on building, thinking, and everything in between.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function NotesPage() {
  return (
    <main className="notes-page-root">
      <div className="notes-page-container">
        <div className="notes-page-header">
          <p className="notes-page-kicker">Writing Archive</p>
          <h1 className="notes-page-heading">Notes</h1>
          <p className="notes-page-subtitle">
            Short essays on building, clarity, and thinking for yourself.
          </p>
        </div>

        <NotesList notes={notes} />
      </div>

      <Footer />
    </main>
  );
}
