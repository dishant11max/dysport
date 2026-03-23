import "./notes.css";
import { notes } from "@/data/notes";
import NotesList from "@/components/notes/NotesList";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Dishant",
  description: "A personal writing archive. Thoughts on building, thinking, and everything in between.",
};

export default function NotesPage() {
  return (
    <main className="notes-page-root">
      <div className="notes-page-container">
        <div className="notes-page-header">
          <p className="notes-page-kicker">Writing Archive</p>
          <h1 className="notes-page-heading">Notes</h1>
          <p className="notes-page-subtitle">
            Essays on building, clarity, and a quieter way of making things.
          </p>
        </div>

        <NotesList notes={notes} />
      </div>

      <Footer />
    </main>
  );
}
