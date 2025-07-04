import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/Editor";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Clients from "./Pages/Clients";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lading-page" element={<LandingPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/facture" element={<EditorPage mode="facture" />} />
        <Route path="/devis" element={<EditorPage mode="devis" />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
};

export default App;
