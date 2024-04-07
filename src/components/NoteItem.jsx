import React from "react";
import { Link } from "react-router-dom";

function NoteItem({ id, title, createdAt, body }) {
  return (
    <div className="note-item">
      <Link to={"detailnotes/" + id}>
        <h2 className="note-item__title">{title}</h2>
      </Link>

      <p className="note-item__createdAt">{createdAt}</p>
      <div className="note-item__body">{body}</div>
    </div>
  );
}

export default NoteItem;
