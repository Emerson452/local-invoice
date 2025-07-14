import React from "react";
import "./index.css";

interface SelectProps {
  label?: string;
  name: string;
  value: string | number;
  options: { label: string; value: string | number }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  error,
  required = false,
  disabled = false,
}) => {
  return (
    <div className={`select-field ${error ? "has-error" : ""}`}>
      {label && (
        <label htmlFor={name} className="select-label">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span className="select-error">{error}</span>}
    </div>
  );
};

export default Select;
