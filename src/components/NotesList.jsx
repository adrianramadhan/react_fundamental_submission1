import React from "react";
import NoteItem from "./NoteItem";
import { getAllNotes } from "../utils/local-data";

const notes = getAllNotes();

function NotesList() {
  if (notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
      ))}
    </div>
  );
}

export default NotesList;
