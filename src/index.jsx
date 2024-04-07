import React from "react";
import { createRoot } from "react-dom/client";
import NotesApp from "./NotesApp";
import "./styles/style.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NotesApp />
  </BrowserRouter>
);
