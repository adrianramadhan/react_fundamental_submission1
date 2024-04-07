import React from "react";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (note.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">{note.createdAt}</p>
      <div className="detail-page__body">{note.body}</div>
    </div>
  );
}

export default DetailPage;
