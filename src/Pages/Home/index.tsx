import { FileText, Plus, Users, File, Clock, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Button from "../../components/Button";

export default function Home() {
  const navigate = useNavigate();

  const handleFactureDetails = () => {
    navigate("/facture");
  };

  const handleDevisDetails = () => {
    navigate("/devis");
  };
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <FileText size={32} />
            <span>Local Invoice</span>
          </div>
          <nav className="nav">
            <a href="#dashboard">Dashboard</a>
            <a href="#clients">Clients</a>
            <a href="#invoices">Factures</a>
            <a href="#settings">Paramètres</a>
          </nav>
        </div>
      </header>

      <main className="dashboard">
        <h1 className="section-title">Bienvenue dans votre espace</h1>

        <div className="dashboard-actions">
          <Button.Primary
            label="Nouvelle facture"
            onClick={handleFactureDetails}
          >
            <Plus size={20} />
          </Button.Primary>
          <Button.Secondary
            label="Nouveau devis"
            onClick={handleDevisDetails}
          />
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-icon">
              <File size={32} />
            </div>
            <h3>Total facturé ce mois</h3>
            <p className="dashboard-value">4 300,00 €</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">
              <Clock size={32} />
            </div>
            <h3>Factures en attente</h3>
            <p className="dashboard-value">2</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">
              <Users size={32} />
            </div>
            <h3>Clients actifs</h3>
            <p className="dashboard-value">12</p>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-icon">
              <BarChart3 size={32} />
            </div>
            <h3>Statistiques</h3>
            <p className="dashboard-value">Voir l’évolution</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <FileText size={24} />
            <span>Local Invoice</span>
          </div>
          <div className="footer-links">
            <a href="#privacy">Confidentialité</a>
            <a href="#terms">Conditions</a>
            <a href="#support">Support</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Local Invoice. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
