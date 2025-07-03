import React, { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.css";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: ReactNode;
  label?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> & {
  Primary: React.FC<Omit<ButtonProps, "variant">>;
  Secondary: React.FC<Omit<ButtonProps, "variant">>;
  Tertiary: React.FC<Omit<ButtonProps, "variant">>;
} = ({
  variant = "primary",
  children,
  onClick,
  value,
  type = "button",
  disabled = false,
  label,
  ...rest
}) => {
  return (
    <button
      className={`button ${variant} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      type={type}
      value={value}
      disabled={disabled}
      {...rest}
    >
      {label}
      {children}
    </button>
  );
};

Button.Primary = (props) => <Button variant="primary" {...props} />;
Button.Secondary = (props) => <Button variant="secondary" {...props} />;
Button.Tertiary = (props) => <Button variant="tertiary" {...props} />;

export default Button;
