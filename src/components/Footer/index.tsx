import { FileText } from "lucide-react";
import "./index.css";

export default function Footer() {
  return (
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
  );
}
