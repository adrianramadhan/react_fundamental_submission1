import React from "react";
import PropTypes from "prop-types";

function DetailItem({ note }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">{note.createdAt}</p>
      <div className="detail-page__body">{note.body}</div>
    </div>
  );
}

DetailItem.propTypes = {
  note: PropTypes.object.isRequired,
};

export default DetailItem;
