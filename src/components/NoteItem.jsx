import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";

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

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItem;
