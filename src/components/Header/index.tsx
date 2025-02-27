import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Devis</a>
          </li>
          <li>
            <a href="#">Factures</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">Paramètres</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
