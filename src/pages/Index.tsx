import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ExhibitCard from "@/components/museum/ExhibitCard";
import { heritageItems, timelineEvents } from "@/data/repository";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const featured = heritageItems.filter((h) => h.status === "verified").slice(0, 3);
  const latest = [...heritageItems]
    .sort((a, b) => b.year_start - a.year_start || a.title.localeCompare(b.title))
    .slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="museum-section text-center py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in">
          Digitálny archív
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Múzeum slovenského
          <br />
          softvéru
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Otvorený komunitný archív zachovávajúci digitálne dedičstvo Slovenska.
          Každý príspevok je pull request. Každý exponát je príbeh.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            placeholder="Hľadať v archíve..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border border-border pl-12 pr-4 py-3 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </section>

      <div className="museum-divider max-w-6xl mx-auto" />

      {/* Featured */}
      <section className="museum-section">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Výber kurátorov</span>
            <h2 className="font-display text-3xl font-semibold mt-2">Významné exponáty</h2>
          </div>
          <Link to="/archive" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Celý archív <ArrowRight size={14} />
          </Link>
        </div>
        <div className="museum-grid">
          {featured.map((item) => (
            <ExhibitCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <div className="museum-divider max-w-6xl mx-auto" />

      {/* Timeline teaser */}
      <section className="museum-section">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Časová os</span>
            <h2 className="font-display text-3xl font-semibold mt-2">Kľúčové momenty</h2>
          </div>
          <Link to="/timeline" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Celá časová os <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-0">
          {timelineEvents.slice(0, 4).map((event, i) => (
            <Link
              key={i}
              to={`/project/${event.id}`}
              className="flex items-baseline gap-6 py-4 border-b border-border group hover:bg-card/50 transition-colors px-2 -mx-2"
            >
              <span className="font-mono text-sm text-muted-foreground w-12 shrink-0">{event.year}</span>
              <span className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">{event.title}</span>
              <span className="text-sm text-muted-foreground hidden md:block">{event.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="museum-divider max-w-6xl mx-auto" />

      {/* Latest additions */}
      <section className="museum-section">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Posledné prírastky</span>
        <h2 className="font-display text-3xl font-semibold mt-2 mb-10">Nové v archíve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {latest.map((item) => (
            <Link
              key={item.id}
              to={`/project/${item.id}`}
              className="flex gap-5 p-5 border border-border hover:bg-card transition-colors group"
            >
              <div className="w-20 h-20 bg-muted shrink-0 flex items-center justify-center">
                <span className="font-mono text-xs text-muted-foreground">{item.year_start}</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{item.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="museum-section text-center bg-card border-y border-border">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Prispieť</span>
        <h2 className="font-display text-3xl font-semibold mt-2 mb-4">Poznáte slovenský softvér?</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Pridajte ho do archívu cez pull request. Každý príspevok pomáha zachovať digitálne dedičstvo Slovenska.
        </p>
        <Link
          to="/contribute"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Prispieť cez PR <ArrowRight size={14} />
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
