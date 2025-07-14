import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Input from "../../components/Input";

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

    if (window.electronAPI?.saveClient) {
      window.electronAPI.saveClient(form);
    }

    navigate("/clients");
    window.location.reload();
  };

  const nav = (
    <>
      <a href="/">Dashboard</a>
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
            <Input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="entreprise">Entreprise</label>
            <Input
              type="text"
              name="entreprise"
              value={form.entreprise}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <Input
              type="tel"
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
