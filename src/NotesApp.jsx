import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddNotePage from "./pages/AddNotePage";
import NotFoundPage from "./pages/NotFoundPage";

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
          <Route path="/detailnotes/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddNotePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default NotesApp;
