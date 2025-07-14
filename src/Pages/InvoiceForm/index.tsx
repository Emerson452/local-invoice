import React, { useState, useEffect } from "react";
import "./index.css";
import Input from "../../components/Input";

interface SelectFieldProps {
  label?: string;
  name: string;
  value: string | number;
  options: { label: string; value: string | number }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
}) => (
  <div className="select-field">
    {label && <label htmlFor={name}>{label}</label>}
    <select id={name} name={name} value={value} onChange={onChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
    {error && <span className="error">{error}</span>}
  </div>
);

interface InvoiceFormProps {
  onSubmit: (data: any) => void;
  mode: "facture" | "devis";
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit, mode }) => {
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatDateForDisplay = (date: string) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };

  const [formData, setFormData] = useState({
    companyLogo: "",
    companyName: "",
    companyAddress: "",
    companyPostalCode: "",
    companyCity: "",
    companySiret: "",
    invoiceYear: "",
    invoiceNumber: "",
    invoiceDate: getTodayDate(),
    dueDate: getTodayDate(),
    operationType: "",
    clientCompany: "",
    clientAddress: "",
    clientPostalCode: "",
    clientCity: "",
    clientSIRET: "",
    clientPhone: "",
    clientCode: "",
    categories: [
      {
        name: "",
        items: [
          {
            description: "",
            date: getTodayDate(),
            quantity: 0,
            unit: "jours",
            unitPrice: 0,
            vat: 0,
          },
        ],
      },
    ],
    paymentTerms: "0",
    delay: "",
    myPhone: "",
    myEmail: "",
  });

  const [logoUrl, setLogoUrl] = useState<string | null>(null);

  useEffect(() => {
    const invoiceDate = new Date(formData.invoiceDate);
    const paymentDays = parseInt(formData.paymentTerms, 10);
    invoiceDate.setDate(invoiceDate.getDate() + paymentDays);
    const dueDate = `${invoiceDate.getFullYear()}-${String(
      invoiceDate.getMonth() + 1
    ).padStart(2, "0")}-${String(invoiceDate.getDate()).padStart(2, "0")}`;
    setFormData((prevData) => ({
      ...prevData,
      dueDate,
    }));
  }, [formData.invoiceDate, formData.paymentTerms]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    categoryIndex?: number,
    itemIndex?: number
  ) => {
    const { name, value } = e.target;

    if (categoryIndex !== undefined && itemIndex !== undefined) {
      const updatedCategories = [...formData.categories];
      updatedCategories[categoryIndex].items[itemIndex] = {
        ...updatedCategories[categoryIndex].items[itemIndex],
        [name]: value,
      };
      setFormData({ ...formData, categories: updatedCategories });
    } else if (categoryIndex !== undefined) {
      const updatedCategories = [...formData.categories];
      updatedCategories[categoryIndex].name = value;
      setFormData({ ...formData, categories: updatedCategories });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, companyLogo: reader.result as string });
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = () => {
    setFormData({
      ...formData,
      categories: [
        ...formData.categories,
        {
          name: "",
          items: [
            {
              description: "",
              date: getTodayDate(),
              quantity: 0,
              unit: "jours",
              unitPrice: 0,
              vat: 0,
            },
          ],
        },
      ],
    });
  };

  const handleRemoveCategory = (categoryIndex: number) => {
    const updatedCategories = formData.categories.filter(
      (_, i) => i !== categoryIndex
    );
    setFormData({
      ...formData,
      categories: updatedCategories,
    });
  };

  const handleAddItem = (categoryIndex: number) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[categoryIndex].items.push({
      description: "",
      date: getTodayDate(),
      quantity: 0,
      unit: "jours",
      unitPrice: 0,
      vat: 0,
    });
    setFormData({ ...formData, categories: updatedCategories });
  };

  const handleRemoveItem = (categoryIndex: number, itemIndex: number) => {
    const updatedCategories = [...formData.categories];
    updatedCategories[categoryIndex].items = updatedCategories[
      categoryIndex
    ].items.filter((_, i) => i !== itemIndex);
    setFormData({ ...formData, categories: updatedCategories });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const invoiceName = `${mode === "facture" ? "Facture" : "Devis"}-${
      formData.invoiceYear
    }-${formData.invoiceNumber}`;

    const formattedData = {
      ...formData,
      invoiceDate: formatDateForDisplay(formData.invoiceDate),
      dueDate: formatDateForDisplay(formData.dueDate),
      categories: formData.categories.map((category) => ({
        ...category,
        items: category.items.map((item) => ({
          ...item,
          date: formatDateForDisplay(item.date),
        })),
      })),
      invoiceName,
    };

    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit} className="invoice-form">
      <div className="invoice-split">
        <div className="form-section">
          <h2>Détails de l'entreprise</h2>
          <div className="invoice-split">
            <div className="invoice-image">
              {logoUrl && <img src={logoUrl} alt="Logo de l'entreprise" />}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden-file-input"
              />
              <label htmlFor="fileInput" className="primary-input">
                Choisir une image
              </label>
            </div>
            <div className="input-container">
              <Input
                name="companyName"
                placeholder="Nom de l'entreprise"
                value={formData.companyName}
                onChange={handleChange}
              />
              <Input
                name="companySiret"
                placeholder="Siret"
                value={formData.companySiret}
                onChange={handleChange}
              />
              <Input
                name="companyAddress"
                placeholder="Adresse"
                value={formData.companyAddress}
                onChange={handleChange}
              />
              <Input
                name="companyPostalCode"
                placeholder="Code Postal"
                value={formData.companyPostalCode}
                onChange={handleChange}
              />
              <Input
                name="companyCity"
                placeholder="Ville"
                value={formData.companyCity}
                onChange={handleChange}
              />
              <Input
                name="myPhone"
                placeholder="Votre numéro de téléphone"
                value={formData.myPhone}
                onChange={handleChange}
              />
              <Input
                name="myEmail"
                placeholder="Votre email"
                type="email"
                value={formData.myEmail}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>
            {mode === "facture" ? "Détails de la facture" : "Détails du devis"}
          </h2>
          <div className="input-container">
            <Input
              name="invoiceYear"
              placeholder="Année de la facture"
              value={formData.invoiceYear}
              onChange={handleChange}
            />
            <Input
              name="invoiceNumber"
              placeholder="Numéro de facture"
              value={formData.invoiceNumber}
              onChange={handleChange}
            />
            <Input
              name="invoiceDate"
              type="date"
              value={formData.invoiceDate}
              onChange={handleChange}
            />
            <SelectField
              name="paymentTerms"
              value={formData.paymentTerms}
              onChange={handleChange}
              options={[
                { label: "0 jours", value: "0" },
                { label: "7 jours", value: "7" },
                { label: "14 jours", value: "14" },
                { label: "30 jours", value: "30" },
                { label: "60 jours", value: "60" },
                { label: "90 jours", value: "90" },
              ]}
            />
            <Input
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={() => {}}
            />
            <Input
              name="operationType"
              placeholder="Type d'opération"
              value={formData.operationType}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-section">
        <h2>Détails du client</h2>
        <div className="input-container">
          <Input
            name="clientCompany"
            placeholder="Nom de l'entreprise"
            value={formData.clientCompany}
            onChange={handleChange}
          />
          <Input
            name="clientAddress"
            placeholder="Adresse"
            value={formData.clientAddress}
            onChange={handleChange}
          />
          <Input
            name="clientPostalCode"
            placeholder="Code Postal"
            value={formData.clientPostalCode}
            onChange={handleChange}
          />
          <Input
            name="clientCity"
            placeholder="Ville"
            value={formData.clientCity}
            onChange={handleChange}
          />
          <Input
            name="clientSIRET"
            placeholder="Numéro de SIRET"
            value={formData.clientSIRET}
            onChange={handleChange}
          />
          <Input
            name="clientPhone"
            placeholder="Numéro de téléphone"
            value={formData.clientPhone}
            onChange={handleChange}
          />
          <Input
            name="clientCode"
            placeholder="Code client"
            value={formData.clientCode}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-section long">
        <h2>Catégories</h2>
        <div className="input-container">
          {formData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category">
              <input
                type="text"
                name="name"
                placeholder="Nom de la catégorie"
                value={category.name}
                onChange={(e) => handleChange(e, categoryIndex)}
              />
              <div className="items-container">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="item">
                    <input
                      type="text"
                      name="description"
                      placeholder="Description de l'article"
                      value={item.description}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    />
                    <input
                      type="date"
                      name="date"
                      value={item.date}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    />
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantité"
                      value={item.quantity}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    />
                    <select
                      name="unit"
                      value={item.unit}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    >
                      <option value="forfait">forfait</option>
                      <option value="jours">jours</option>
                      <option value="h">h</option>
                    </select>
                    <input
                      type="number"
                      name="unitPrice"
                      placeholder="Prix unitaire"
                      value={item.unitPrice}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    />
                    <input
                      type="number"
                      name="vat"
                      placeholder="TVA"
                      value={item.vat}
                      onChange={(e) =>
                        handleChange(e, categoryIndex, itemIndex)
                      }
                    />
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => handleRemoveItem(categoryIndex, itemIndex)}
                    >
                      Supprimer l'article
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => handleAddItem(categoryIndex)}
              >
                + Ajouter un article
              </button>
              <button
                type="button"
                onClick={() => handleRemoveCategory(categoryIndex)}
              >
                Supprimer la catégorie
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={handleAddCategory}>
          + Ajouter une catégorie
        </button>
      </div>

      <div className="form-section long">
        <h2>Texte de bas de page</h2>
        <div className="input-container">
          <textarea
            name="delay"
            placeholder="Texte de bas de page"
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="submit">Générer la Facture</button>
    </form>
  );
};

export default InvoiceForm;
