import React, { useState } from "react";
import InvoiceForm from "../../components/InvoiceForm";
import InvoicePreview from "../../components/InvoicePreview";

interface EditorPageProps {
  mode: "facture" | "devis";
}

const EditorPage: React.FC<EditorPageProps> = ({ mode }) => {
  const [invoiceData, setInvoiceData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setInvoiceData(data);
  };

  return (
    <div className="App">
      <h2>{mode === "facture" ? "Éditeur de Facture" : "Éditeur de Devis"}</h2>
      <div className="form-and-preview">
        <InvoiceForm mode={mode} onSubmit={handleFormSubmit} />
        {invoiceData && <InvoicePreview mode={mode} data={invoiceData} />}
      </div>
    </div>
  );
};

export default EditorPage;
