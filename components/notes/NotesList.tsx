import NoteItem from "./NoteItem";
import { Note } from "@/data/notes";

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
  return (
    <div className="notes-list-grid">
      {notes.map((note, index) => (
        <NoteItem key={note.slug} note={note} index={index} />
      ))}
    </div>
  );
}
