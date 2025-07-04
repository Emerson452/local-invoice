import { FileText, Zap, Shield, Download, Check, Star } from "lucide-react";
import "./index.css";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const nav = (
    <>
      <a href="#features">Fonctionnalités</a>
      <a href="#download">Télécharger</a>
      <a href="#contact">Contact</a>
    </>
  );

  return (
    <div className="container">
      <Header navItems={nav} />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Créez vos factures et devis
              <span className="highlight"> en toute simplicité</span>
            </h1>
            <p className="hero-subtitle">
              Local Invoice vous permet de générer des factures et devis
              professionnels directement sur votre ordinateur. Aucun cloud,
              aucun abonnement, juste une solution simple et efficace.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <Check size={20} />
                <span>100% Local</span>
              </div>
              <div className="hero-feature">
                <Check size={20} />
                <span>Gratuit</span>
              </div>
              <div className="hero-feature">
                <Check size={20} />
                <span>Rapide</span>
              </div>
              <div className="hero-feature">
                <Check size={20} />
                <span>Sécurisé</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Button.Primary label="Télécharger gratuitement">
                <Download size={20} />
              </Button.Primary>

              <Button.Secondary label="Voir la démo" />
            </div>
          </div>
          <div className="hero-image">
            <div className="mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="mockup-content">
                <div className="invoice-preview">
                  <div className="invoice-header">
                    <h3>FACTURE #2024-001</h3>
                    <div className="invoice-date">15/01/2024</div>
                  </div>
                  <div className="invoice-details">
                    <div className="invoice-line">
                      <span>Développement web</span>
                      <span>1 500,00 €</span>
                    </div>
                    <div className="invoice-line">
                      <span>Design UI/UX</span>
                      <span>800,00 €</span>
                    </div>
                    <div className="invoice-total">
                      <span>Total HT: 2 300,00 €</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="features-content">
          <h2 className="section-title">Pourquoi choisir Local Invoice ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>100% Local</h3>
              <p>
                Vos données restent sur votre ordinateur. Aucune synchronisation
                cloud, aucun risque de fuite de données.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Ultra Rapide</h3>
              <p>
                Créez une facture en moins de 2 minutes. Interface intuitive et
                workflow optimisé pour votre productivité.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FileText size={32} />
              </div>
              <h3>Factures & Devis</h3>
              <p>
                Générez des factures et devis professionnels avec calculs
                automatiques de TVA et totaux.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Download size={32} />
              </div>
              <h3>Export PDF</h3>
              <p>
                Exportez vos documents au format PDF haute qualité, prêts à être
                envoyés à vos clients.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>Gratuit</h3>
              <p>
                Aucun abonnement, aucun coût caché. Téléchargez et utilisez
                Local Invoice gratuitement.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Check size={32} />
              </div>
              <h3>Simple d'usage</h3>
              <p>
                Interface claire et intuitive. Pas besoin de formation,
                commencez à créer vos factures immédiatement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="cta">
        <div className="cta-content">
          <h2>Prêt à simplifier votre facturation ?</h2>
          <p>
            Rejoignez des milliers d'entrepreneurs qui font confiance à Local
            Invoice
          </p>

          <Button.Secondary label="Télécharger Local Invoice">
            <Download size={24} />
          </Button.Secondary>
          <div className="cta-info">
            <span>✓ Compatible Windows, Mac & Linux</span>
            <span>✓ Installation en 1 clic</span>
            <span>✓ Aucune inscription requise</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
