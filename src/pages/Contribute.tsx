import Layout from "@/components/layout/Layout";
import { ArrowRight, CheckCircle2, GitPullRequest, FolderPlus, FileCheck } from "lucide-react";

const steps = [
  { icon: GitPullRequest, title: "Fork repozitára", description: "Vytvorte fork repozitára MUSKSO na GitHub." },
  { icon: FolderPlus, title: "Pridajte JSON záznam", description: "Vytvorte súbor v src/content/projects, src/content/people alebo src/content/companies." },
  { icon: FileCheck, title: "Dodržte názov súboru", description: "Použite konvenciu YYYY-slug.json (alebo YYYY-MM-slug.json), kde slug = id v obsahu." },
  { icon: FileCheck, title: "Skontrolujte lokálne", description: "Spustite npm run validate:content, npm run lint, npm test a npm run build." },
  { icon: CheckCircle2, title: "Otvorte Pull Request", description: "Pošlite PR s krátkym popisom zdrojov a zmien. Po schválení sa záznam zobrazí v archíve." },
];

const checklist = [
  "Súbor je v správnom priečinku: projects / people / companies",
  "Názov súboru je YYYY-slug.json alebo YYYY-MM-slug.json",
  "Pole id sa zhoduje so slugom v názve súboru",
  "Sú vyplnené povinné polia podľa schémy",
  "Pri dlhom texte je použitý storyMarkdown (Markdown)",
  "Je uvedený aspoň 1 dôveryhodný zdroj",
  "Prešli skripty: validate:content, lint, test, build",
  "PR obsahuje stručný popis zmien a dôvod",
];

const Contribute = () => (
  <Layout>
    <section className="museum-section">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Komunita</span>
      <h1 className="font-display text-4xl font-semibold mt-2 mb-4">Prispieť do archívu</h1>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Poznáte slovenský softvér, ktorý by mal byť v archíve? Pridajte ho cez pull request. 
        Žiadne registrácie, žiadne formuláre – len GitHub.
      </p>

      {/* Steps */}
      <div className="space-y-0 mb-16">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-6 py-6 border-b border-border">
            <div className="w-10 h-10 border border-border flex items-center justify-center shrink-0 bg-card">
              <step.icon size={18} className="text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-muted-foreground">Krok {i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mt-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Checklist */}
      <div className="bg-card border border-border p-8 max-w-2xl">
        <h2 className="font-display text-2xl font-semibold mb-6">Checklist pre PR</h2>
        <div className="space-y-3">
          {checklist.map((item, i) => (
            <label key={i} className="flex items-start gap-3 text-sm">
              <input type="checkbox" className="mt-0.5 accent-primary" disabled />
              <span className="text-muted-foreground">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="museum-divider" />

      {/* Submission template link */}
      <div className="text-center py-8">
        <p className="text-muted-foreground mb-4">Potrebujete pomoc? Pozrite si dokumentáciu alebo použite šablónu.</p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/docs"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Dokumentácia <ArrowRight size={14} />
          </a>
          <a
            href="https://github.com/igisho/muskso"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-medium hover:bg-card transition-colors"
          >
            Šablóna na GitHub <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contribute;
