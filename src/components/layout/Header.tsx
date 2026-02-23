import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Archív", path: "/archive" },
  { label: "Ľudia", path: "/people" },
  { label: "Firmy", path: "/companies" },
  { label: "Časová os", path: "/timeline" },
  { label: "Prispieť", path: "/contribute" },
  { label: "Dokumentácia", path: "/docs" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
            <span className="font-display text-sm font-bold text-primary">MS</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-base font-semibold text-foreground tracking-tight">
              Múzeum SK Softvéru
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 text-sm font-body transition-colors ${
                location.pathname === item.path
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3 py-2 text-sm font-body transition-colors ${
                location.pathname === item.path
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
