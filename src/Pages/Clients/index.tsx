import { UserPlus, Users, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Clients() {
  const navigate = useNavigate();

  const nav = (
    <>
      <a href="#dashboard">Dashboard</a>
      <a href="#clients">Clients</a>
      <a href="#invoices">Factures</a>
      <a href="#settings">Paramètres</a>
    </>
  );

  const handleAddClient = () => {
    navigate("/ajouter-client");
  };

  return (
    <div className="container">
      <Header navItems={nav} />

      <main className="dashboard">
        <h1 className="section-title">Vos clients</h1>

        <div className="dashboard-actions">
          <Button.Primary label="Nouveau client" onClick={handleAddClient}>
            <UserPlus size={20} />
          </Button.Primary>
        </div>

        <div className="clients-grid">
          <div className="client-card">
            <div className="client-header">
              <div className="client-avatar">
                <Users size={28} />
              </div>
              <div>
                <h3>Marie Dupont</h3>
                <p className="client-company">Dupont Design</p>
              </div>
            </div>

            <div className="client-info">
              <div className="client-line">
                <Mail size={16} />
                <span>marie.dupont@email.com</span>
              </div>
              <div className="client-line">
                <Phone size={16} />
                <span>+33 6 12 34 56 78</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
