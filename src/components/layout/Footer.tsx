import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-auto">
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg font-semibold mb-3">Múzeum slovenského softvéru</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Otvorený komunitný archív zachovávajúci digitálne dedičstvo Slovenska. 
            Každý príspevok ide cez pull request.
          </p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Navigácia</h4>
          <div className="space-y-2">
            <Link to="/archive" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Archív</Link>
            <Link to="/timeline" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Časová os</Link>
            <Link to="/contribute" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Prispieť</Link>
            <Link to="/docs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Dokumentácia</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">Projekt</h4>
          <div className="space-y-2">
            <a href="https://muskso.sk" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">muskso.sk</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <Link to="/docs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pre prispievateľov</Link>
            <Link to="/docs" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Pre agentov</Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} Slovak Software Museum · Obsah pod CC BY-SA 4.0 · Kód pod MIT
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
