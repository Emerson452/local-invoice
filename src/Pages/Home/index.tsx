import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Local Invoice</h1>
        <p>Créez vos factures et devis en toute simplicité, localement.</p>
        <div className="cta-buttons">
          <Link to="/facture">
            <button className="primary-btn">Créer une facture</button>
          </Link>
          <Link to="/devis">
            <button className="secondary-btn">Créer un devis</button>
          </Link>
        </div>
      </header>

      <section className="features">
        <div className="feature-list">
          <div className="feature-card">
            <h3>100% local</h3>
            <p>
              Vos données restent sur votre appareil. Pas de cloud, pas de
              risques.
            </p>
          </div>
          <div className="feature-card">
            <h3>Ultra rapide</h3>
            <p>
              Créez vos documents en quelques clics, sans temps de chargement.
            </p>
          </div>
          <div className="feature-card">
            <h3>PDF automatique</h3>
            <p>
              Générez automatiquement vos PDF de factures ou devis prêts à
              l’envoi.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Local Invoice - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Home;
