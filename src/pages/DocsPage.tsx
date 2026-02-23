import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { BookOpen, Bot, FileText, Shield, Users, Scale } from "lucide-react";

const humanDocs = [
  { icon: FileText, title: "README", description: "Čo je projekt a ako ho používať", path: "/docs/readme" },
  { icon: Users, title: "Ako prispieť", description: "Krok za krokom postup pre prispievateľov", path: "/contribute" },
  { icon: Shield, title: "Code of Conduct", description: "Pravidlá správania v komunite", path: "/docs/conduct" },
  { icon: Scale, title: "Licencia", description: "Licenčné podmienky pre obsah a kód", path: "/docs/license" },
];

const agentDocs = [
  { title: "00 – Prehľad", description: "Účel projektu, definície pojmov", id: "overview" },
  { title: "01 – Submission workflow", description: "Fork → branch → JSON záznam → PR → checklist", id: "submission" },
  { title: "02 – Content schema", description: "Povinné polia JSON záznamov a väzby cez id", id: "schema" },
  { title: "03 – Naming convention", description: "YYYY-slug.json a validácia názvov", id: "naming" },
  { title: "04 – Práva a licencie", description: "Čo hostovať, čo len linkovať", id: "rights" },
  { title: "05 – Review playbook", description: "Ako posudzovať PR", id: "review" },
  { title: "06 – Troubleshooting", description: "Najčastejšie chyby pri validate:content", id: "troubleshooting" },
  { title: "07 – Taxonómia", description: "Kontrolovaný slovník tagov a typov", id: "taxonomy" },
];

const DocsPage = () => (
  <Layout>
    <section className="museum-section">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Referencia</span>
      <h1 className="font-display text-4xl font-semibold mt-2 mb-4">Dokumentácia</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Všetko, čo potrebujete vedieť – či ste človek alebo AI agent.
      </p>

      {/* Human docs */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen size={20} className="text-primary" />
          <h2 className="font-display text-2xl font-semibold">Pre ľudí</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {humanDocs.map((doc) => (
            <Link
              key={doc.path}
              to={doc.path}
              className="flex items-start gap-4 p-5 border border-border hover:bg-card transition-colors group"
            >
              <doc.icon size={20} className="text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display text-base font-medium group-hover:text-primary transition-colors">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="museum-divider" />

      {/* Agent docs */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Bot size={20} className="text-museum-gold" />
          <h2 className="font-display text-2xl font-semibold">Pre agentov (Skills)</h2>
        </div>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          Tieto dokumenty sú optimalizované pre AI agentov. Nájdete ich v repozitári v priečinku <code className="font-mono text-xs bg-muted px-1.5 py-0.5">skills/</code>.
        </p>
        <div className="space-y-0">
          {agentDocs.map((doc) => (
            <div
              key={doc.id}
              className="flex items-center gap-6 py-4 border-b border-border"
            >
              <span className="font-mono text-xs text-muted-foreground w-32 shrink-0">{doc.title.split(" – ")[0]}</span>
              <div>
                <h3 className="font-body text-sm font-medium">{doc.title.split(" – ")[1]}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default DocsPage;
