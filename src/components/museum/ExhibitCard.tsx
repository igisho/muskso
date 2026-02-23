import { Link } from "react-router-dom";
import type { Heritage } from "@/data/types";
import StatusBadge from "./StatusBadge";

interface ExhibitCardProps {
  item: Heritage;
}

const ExhibitCard = ({ item }: ExhibitCardProps) => (
  <Link to={`/project/${item.id}`} className="exhibit-card group block">
    <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
      <div className="text-center p-6">
        <span className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </span>
      </div>
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-muted-foreground tracking-wider">
          {item.year_start}{item.year_end ? `–${item.year_end}` : ""}
        </span>
        <StatusBadge status={item.status} />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
        {item.summary}
      </p>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5">
          {item.platform}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5">
          {item.type}
        </span>
      </div>
    </div>
  </Link>
);

export default ExhibitCard;
