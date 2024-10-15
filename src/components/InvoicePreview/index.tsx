import React from "react";
import "./index.css";

interface InvoiceItem {
  description: string;
  date: string;
  price: number;
  quantity: number;
  unit: string;
  unitPrice: number;
  vat: number;
}

interface InvoiceData {
  companyLogo: string;
  companyName: string;
  companyAddress: string;
  companyPostalCode: string;
  companyCity: string;
  myPhone: string;
  myEmail: string;
  invoiceName: string;
  invoiceDate: string;
  dueDate: string;
  operationType: string;
  clientName: string;
  clientCompany: string;
  clientAddress: string;
  clientPostalCode: string;
  clientCity: string;
  clientSIRET: string;
  clientPhone: string;
  clientCode: string;
  items: InvoiceItem[];
  paymentTerms: string;
  delay: string;
}

interface InvoicePreviewProps {
  data: InvoiceData;
}

const InvoicePreview: React.FC<InvoicePreviewProps> = ({ data }) => {
  const {
    companyLogo,
    companyName,
    companyAddress,
    companyPostalCode,
    companyCity,
    myPhone,
    myEmail,
    invoiceName,
    invoiceDate,
    dueDate,
    operationType,
    clientCompany,
    clientAddress,
    clientPostalCode,
    clientCity,
    clientSIRET,
    clientPhone,
    clientCode,
    items,
    paymentTerms,
    delay,
  } = data;

  const calculateTotalHT = (): number => {
    return items.reduce((total: number, item: InvoiceItem) => {
      return total + item.unitPrice * item.quantity;
    }, 0);
  };

  const calculateTotalVAT = (): number => {
    return items.reduce((total: number, item: InvoiceItem) => {
      return total + (item.unitPrice * item.quantity * item.vat) / 100;
    }, 0);
  };

  const calculateTotalTTC = (): number => {
    return calculateTotalHT() + calculateTotalVAT();
  };

  return (
    <div className="invoice-preview">
      <div className="invoice-top">
        {companyLogo && (
          <img src={companyLogo} alt="Logo de l'entreprise" className="logo" />
        )}
        <div className="invoice-details">
          <h2>{invoiceName}</h2>
          <div>Date de facturation: {invoiceDate}</div>
          <div>Échéance: {dueDate}</div>
          <div>Type d'opération: {operationType}</div>
        </div>
      </div>

      <div className="invoice-actors">
        <div className="author">
          <ul>
            <li className="strong">{companyName}</li>
            <li>{companyAddress}</li>
            <li>
              {companyPostalCode} {companyCity}
            </li>
            <li className="strong">Tél: {myPhone}</li>
            <li className="strong">Email: {myEmail}</li>
          </ul>
        </div>
        <h4>Facturé à:</h4>
        <div className="client">
          <ul>
            <li className="strong">{clientCompany}</li>
            <li>{clientAddress}</li>
            <li>
              {clientPostalCode} {clientCity}
            </li>
            <li className="strong">Tél: {clientPhone}</li>
            <li className="strong">Code client: {clientCode}</li>
            <li className="siret">
              <span className="strong">Numéro de SIRET:</span> {clientSIRET}
            </li>
          </ul>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="description-cell">Description</th>
            <th>Date</th>
            <th>Quantité</th>
            <th>Unité</th>
            <th>Prix Unitaire</th>
            <th>TVA (%)</th>
            <th>Montant</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.unitPrice}</td>
              <td>{item.vat} %</td>
              <td>
                {(
                  item.unitPrice *
                  item.quantity *
                  (1 + item.vat / 100)
                ).toFixed(2)}{" "}
                €
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="container-price">
        <div className="price-details">
          <p>
            <span>Total HT:</span>
            <span>{calculateTotalHT().toFixed(2)} €</span>
          </p>
          <p>
            <span>TVA {items[0]?.vat}%:</span>
            <span>{calculateTotalVAT().toFixed(2)} €</span>
          </p>
          <hr />
          <h3 className="total-ttc">
            <span>Total TTC:</span>
            <span>{calculateTotalTTC().toFixed(2)} €</span>
          </h3>
        </div>
      </div>

      <div className="invoice-conditions">
        <p className="strong">Conditions de paiement:</p>
        <p>{paymentTerms} jours</p>
      </div>

      <div className="invoice-delay">{delay}</div>
      <div className="personal-information"></div>
    </div>
  );
};

export default InvoicePreview;
