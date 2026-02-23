import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import FactsPanel from "@/components/museum/FactsPanel";
import ExhibitIdCard from "@/components/museum/ExhibitIdCard";
import ExhibitCard from "@/components/museum/ExhibitCard";
import { heritageItems } from "@/data/repository";

const ProjectDetail = () => {
  const { id } = useParams();
  const item = heritageItems.find((h) => h.id === id);

  if (!item) {
    return (
      <Layout>
        <div className="museum-section text-center py-24">
          <h1 className="font-display text-3xl font-semibold mb-4">Exponát nenájdený</h1>
          <Link to="/archive" className="text-sm text-primary hover:underline">Späť do archívu</Link>
        </div>
      </Layout>
    );
  }

  const related = heritageItems
    .filter((h) => h.id !== item.id && h.tags.some((t) => item.tags.includes(t)))
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Domov</Link>
          <span>/</span>
          <Link to="/archive" className="hover:text-foreground transition-colors">Archív</Link>
          <span>/</span>
          <span className="text-foreground">{item.title}</span>
        </nav>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: cover + gallery */}
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] bg-muted border border-border flex items-center justify-center mb-6">
              <span className="font-display text-4xl font-semibold text-muted-foreground/50">{item.title}</span>
            </div>

            {/* Exhibit ID Card */}
            <ExhibitIdCard item={item} />

            {/* Story */}
            <div className="mt-10 space-y-8">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">O projekte</h2>
                <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Tento exponát je súčasťou digitálneho archívu slovenského softvéru. Informácie boli zozbierané
                  z verejne dostupných zdrojov a príspevkov komunity.
                </p>
              </section>

              <div className="museum-divider" />

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Vplyv a význam</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {item.title} predstavuje dôležitý míľnik v histórii slovenského softvérového priemyslu. 
                  Projekt prispel k rozvoju technológií na Slovensku a inšpiroval ďalšie generácie vývojárov.
                </p>
              </section>

              <div className="museum-divider" />

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Technológie</h2>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs uppercase tracking-wider bg-muted text-muted-foreground px-3 py-1 border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>

              <div className="museum-divider" />

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Zdroje a proveniencia</h2>
                {item.sources.length > 0 ? (
                  <ul className="space-y-2">
                    {item.sources.map((source, i) => (
                      <li key={i}>
                        <a href={source} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline break-all">
                          {source}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Zatiaľ neboli pridané žiadne zdroje. Tento exponát je v stave „návrh".</p>
                )}
              </section>
            </div>
          </div>

          {/* Right: Facts panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <FactsPanel item={item} />
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <>
          <div className="museum-divider max-w-6xl mx-auto" />
          <section className="museum-section">
            <h2 className="font-display text-2xl font-semibold mb-8">Súvisiace exponáty</h2>
            <div className="museum-grid">
              {related.map((r) => (
                <ExhibitCard key={r.id} item={r} />
              ))}
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default ProjectDetail;
