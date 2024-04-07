import React from "react";
import NotesList from "../components/NotesList";
import { getAllNotes } from "../utils/local-data";

function HomePage() {
  const notes = getAllNotes();

  return (
    <div className="notes-list">
      <NotesList notes={notes} />
    </div>
  );
}

export default HomePage;
