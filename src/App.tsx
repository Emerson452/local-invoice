import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import EditorPage from "./Pages/Editor";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Clients from "./Pages/Clients";
import CreateClients from "./Pages/CreateClients";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />

        <Route path="/" element={<Home />} />
        <Route path="/facture" element={<EditorPage mode="facture" />} />
        <Route path="/devis" element={<EditorPage mode="devis" />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/create-clients" element={<CreateClients />} />
      </Routes>
    </Router>
  );
};

export default App;
