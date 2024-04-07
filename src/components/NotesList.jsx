import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes }) {
  console.log(notes);
  if (notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          createdAt={note.createdAt}
          body={note.body}
        />
      ))}
    </>
  );
}

export default NotesList;
