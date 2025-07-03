import { FileText } from "lucide-react";
import { ReactNode } from "react";
import "./index.css";

type HeaderProps = {
  navItems?: ReactNode;
};

export default function Header({ navItems }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <FileText size={32} />
          <span>Local Invoice</span>
        </div>
        <nav className="nav">{navItems}</nav>
      </div>
    </header>
  );
}
