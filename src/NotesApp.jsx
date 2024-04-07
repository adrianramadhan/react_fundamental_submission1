import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function NotesApp() {
  return (
    <div className="app-container">
      <header>
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailnotes" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
