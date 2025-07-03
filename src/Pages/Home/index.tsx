import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="App">
      <h1>Bienvenue</h1>
      <div className="mode-buttons">
        <Link to="/facture">
          <button>Facture</button>
        </Link>
        <Link to="/devis">
          <button>Devis</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
