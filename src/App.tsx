import React, { useState } from "react";
import InvoiceForm from "./components/InvoiceForm";
import InvoicePreview from "./components/InvoicePreview";
import "./App.css";

const App: React.FC = () => {
  const [invoiceData, setInvoiceData] = useState<any>(null);

  const handleFormSubmit = (data: any) => {
    setInvoiceData(data);
  };

  return (
    <div className="App">
      <InvoiceForm mode="devis" onSubmit={handleFormSubmit} />
      {invoiceData && <InvoicePreview mode="devis" data={invoiceData} />}
    </div>
  );
};

export default App;
