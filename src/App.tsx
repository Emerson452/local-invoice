import React, { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import "./App.css";

const App: React.FC = () => {
  const [mode, setMode] = useState<"facture" | "devis">("devis");
  const [invoiceData, setInvoiceData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setInvoiceData(data);
  };

  const handleModeChange = (selectedMode: "facture" | "devis") => {
    setMode(selectedMode);
    setInvoiceData(null);
  };

  return (
    <div className="App">
      <div className="mode-buttons">
        <button onClick={() => handleModeChange("facture")}>Facture</button>
        <button onClick={() => handleModeChange("devis")}>Devis</button>
      </div>

      <div className="form-and-preview">
        <InvoiceForm mode={mode} onSubmit={handleFormSubmit} />
        {invoiceData && <InvoicePreview mode={mode} data={invoiceData} />}
      </div>
    </div>
  );
};

export default App;
