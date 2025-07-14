import React from "react";
import "./index.css";

interface InputProps {
  label?: string;
  name: string;
  value: string | number;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder,
  onChange,
  error,
}) => (
  <div className="input-field">
    {label && <label htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

export default InputField;
