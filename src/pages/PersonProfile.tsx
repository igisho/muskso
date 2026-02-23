import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { people, heritageItems } from "@/data/repository";

const PersonProfile = () => {
  const { id } = useParams();
  const person = people.find((p) => p.id === id);

  if (!person) {
    return (
      <Layout>
        <div className="museum-section text-center py-24">
          <h1 className="font-display text-3xl font-semibold mb-4">Osoba nenájdená</h1>
          <Link to="/people" className="text-sm text-primary hover:underline">Späť na ľudí</Link>
        </div>
      </Layout>
    );
  }

  const projects = heritageItems.filter((h) => person.projects.includes(h.id));

  return (
    <Layout>
      <section className="museum-section">
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Domov</Link>
          <span>/</span>
          <Link to="/people" className="hover:text-foreground transition-colors">Ľudia</Link>
          <span>/</span>
          <span className="text-foreground">{person.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl font-semibold mb-6">{person.name}</h1>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">{person.bio}</p>

            <h2 className="font-display text-2xl font-semibold mb-4">Prepojené projekty</h2>
            <div className="space-y-0">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="flex items-center gap-6 py-4 border-b border-border hover:bg-card/50 transition-colors group"
                >
                  <span className="font-mono text-xs text-muted-foreground w-12">{p.year_start}</span>
                  <span className="font-display text-lg font-medium group-hover:text-primary transition-colors">{p.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-card border border-border p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">Profil</h3>
              <div className="facts-row">
                <span className="facts-label">Roly</span>
                <span className="facts-value text-right">{person.roles.join(", ")}</span>
              </div>
              <div className="facts-row border-b-0">
                <span className="facts-label">Obdobie</span>
                <span className="facts-value">{person.periods.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PersonProfile;
