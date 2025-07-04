import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

export default function CreateClients() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    adresse: "",
    entreprise: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/clients");
  };

  const nav = (
    <>
      <a href="#dashboard">Dashboard</a>
      <a href="#clients">Clients</a>
      <a href="#invoices">Factures</a>
      <a href="#settings">Paramètres</a>
    </>
  );

  return (
    <div className="container">
      <Header navItems={nav} />

      <main className="dashboard">
        <h1 className="section-title">Ajouter un nouveau client</h1>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nom">Nom complet</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="entreprise">Entreprise</label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={form.entreprise}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="adresse">Adresse</label>
            <textarea
              id="adresse"
              name="adresse"
              rows={3}
              value={form.adresse}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-buttons">
            <Button.Secondary
              label="Annuler"
              onClick={() => navigate("/clients")}
            />
            <Button.Primary label="Créer le client" type="submit" />
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}
