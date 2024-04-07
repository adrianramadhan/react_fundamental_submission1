import React from "react";

function NoteItem({ title, createdAt, body }) {
  return (
    <div className="note-item">
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__createdAt">{createdAt}</p>
      <div className="note-item__body">{body}</div>
    </div>
  );
}

export default NoteItem;
