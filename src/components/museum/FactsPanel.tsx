import type { Heritage } from "@/data/types";
import StatusBadge from "./StatusBadge";

interface FactsPanelProps {
  item: Heritage;
}

const FactsPanel = ({ item }: FactsPanelProps) => (
  <div className="bg-card border border-border p-6">
    <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
      Údaje exponátu
    </h3>

    <div className="space-y-0">
      <div className="facts-row">
        <span className="facts-label">Rok</span>
        <span className="facts-value">{item.year_start}{item.year_end ? `–${item.year_end}` : ""}</span>
      </div>
      <div className="facts-row">
        <span className="facts-label">Typ</span>
        <span className="facts-value capitalize">{item.type}</span>
      </div>
      <div className="facts-row">
        <span className="facts-label">Platforma</span>
        <span className="facts-value">{item.platform}</span>
      </div>
      <div className="facts-row">
        <span className="facts-label">Autori</span>
        <span className="facts-value">{item.authors.join(", ")}</span>
      </div>
      <div className="facts-row">
        <span className="facts-label">Status</span>
        <StatusBadge status={item.status} size="md" />
      </div>
      <div className="facts-row border-b-0">
        <span className="facts-label">Tagy</span>
        <div className="flex flex-wrap gap-1 justify-end">
          {item.tags.map((tag) => (
            <span key={tag} className="font-mono text-[10px] uppercase tracking-wider bg-muted text-muted-foreground px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>

    {item.sources.length > 0 && (
      <div className="mt-6 pt-4 border-t border-border">
        <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Zdroje</h4>
        <div className="space-y-1">
          {item.sources.map((source, i) => (
            <a
              key={i}
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xs text-primary hover:underline truncate"
            >
              {source}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default FactsPanel;
