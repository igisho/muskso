import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { companies, heritageItems } from "@/data/repository";

const CompanyProfile = () => {
  const { id } = useParams();
  const company = companies.find((c) => c.id === id);

  if (!company) {
    return (
      <Layout>
        <div className="museum-section text-center py-24">
          <h1 className="font-display text-3xl font-semibold mb-4">Firma nenájdená</h1>
          <Link to="/companies" className="text-sm text-primary hover:underline">Späť na firmy</Link>
        </div>
      </Layout>
    );
  }

  const projects = heritageItems.filter((h) => company.projects.includes(h.id));

  return (
    <Layout>
      <section className="museum-section">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Domov</Link>
          <span>/</span>
          <Link to="/companies" className="hover:text-foreground transition-colors">Firmy</Link>
          <span>/</span>
          <span className="text-foreground">{company.name}</span>
        </nav>

        <h1 className="font-display text-4xl font-semibold mb-4">{company.name}</h1>
        <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mb-10">{company.overview}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Míľniky</h2>
            <div className="space-y-0 border-l-2 border-border pl-6">
              {company.milestones.map((m, i) => (
                <div key={i} className="relative pb-6 last:pb-0">
                  <div className="absolute -left-[31px] top-1 w-3 h-3 border-2 border-primary bg-background rounded-full" />
                  <span className="font-mono text-xs text-muted-foreground">{m.year}</span>
                  <p className="text-sm text-foreground mt-1">{m.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold mb-6">Projekty</h2>
            <div className="space-y-0">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="flex items-center gap-4 py-4 border-b border-border hover:bg-card/50 transition-colors group"
                >
                  <span className="font-mono text-xs text-muted-foreground w-12">{p.year_start}</span>
                  <span className="font-display text-lg font-medium group-hover:text-primary transition-colors">{p.title}</span>
                </Link>
              ))}
            </div>

            <div className="bg-card border border-border p-6 mt-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Info</h3>
              <div className="facts-row">
                <span className="facts-label">Založená</span>
                <span className="facts-value">{company.founded}</span>
              </div>
              {company.dissolved && (
                <div className="facts-row">
                  <span className="facts-label">Zanikla</span>
                  <span className="facts-value">{company.dissolved}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompanyProfile;
