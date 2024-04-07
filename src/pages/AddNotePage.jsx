import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddNotePage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Judul dan isi catatan tidak boleh kosong.");
      return;
    }

    addNote({ title, body });
    navigate("/");
  };

  return (
    <div className="add-note-form">
      <h2>Tambah Catatan Baru</h2>
      <form onSubmit={handleSubmit} className="add-new-page__input">
        <label htmlFor="title">Judul:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="add-new-page__input__title"
        />
        <br />
        <br />
        <label htmlFor="body">Isi Catatan:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="add-new-page__input__body"
        ></textarea>
        <button className="btn-submit" type="submit">
          Simpan
        </button>
      </form>
    </div>
  );
}

export default AddNotePage;
