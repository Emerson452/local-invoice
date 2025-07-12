import { useEffect, useState } from "react";
import { UserPlus, Users, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "./index.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Clients() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<any[]>([]);

  const nav = (
    <>
      <a href="/">Dashboard</a>
      <a href="#clients">Clients</a>
      <a href="#invoices">Factures</a>
      <a href="#settings">Paramètres</a>
    </>
  );

  const handleAddClient = () => {
    navigate("/create-clients");
  };

  useEffect(() => {
    const load = async () => {
      if (window.electronAPI?.loadClients) {
        const loadedClients = await window.electronAPI.loadClients();
        setClients(loadedClients);
      }
    };
    load();
  }, []);

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
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <div className="client-header">
                <div className="client-avatar">
                  <Users size={28} />
                </div>
                <div>
                  <h3>{client.nom}</h3>
                  <p className="client-company">{client.entreprise}</p>
                </div>
              </div>

              <div className="client-info">
                <div className="client-line">
                  <Mail size={16} />
                  <span>{client.email}</span>
                </div>
                <div className="client-line">
                  <Phone size={16} />
                  <span>{client.telephone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
