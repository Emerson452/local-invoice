import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/Editor";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facture" element={<EditorPage mode="facture" />} />
        <Route path="/devis" element={<EditorPage mode="devis" />} />
      </Routes>
    </Router>
  );
};

export default App;
