import React from "react";
import { getNote, deleteNote } from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import DetailItem from "../components/DetailItem";
import { FaTrash } from "react-icons/fa";

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  if (note.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>Tidak ada catatan</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <DetailItem note={note} />
      </div>
      <div className="btn-wrapper">
        <button className="btn-delete" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </>
  );
}

export default DetailPage;
