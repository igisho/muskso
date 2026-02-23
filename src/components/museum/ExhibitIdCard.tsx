import type { Heritage } from "@/data/types";
import StatusBadge from "./StatusBadge";

interface ExhibitIdCardProps {
  item: Heritage;
}

const ExhibitIdCard = ({ item }: ExhibitIdCardProps) => (
  <div className="museum-label">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h4 className="font-display text-base font-semibold normal-case tracking-normal text-foreground">
          {item.title}
        </h4>
        <p className="mt-1 text-muted-foreground normal-case tracking-normal text-xs">
          {item.authors.join(", ")} · {item.year_start}
          {item.year_end ? `–${item.year_end}` : ""}
        </p>
      </div>
      <StatusBadge status={item.status} />
    </div>
    <div className="mt-3 pt-3 border-t border-border flex items-center gap-3">
      <span>{item.platform}</span>
      <span>·</span>
      <span className="capitalize">{item.type}</span>
      <span>·</span>
      <span>{item.id}</span>
    </div>
  </div>
);

export default ExhibitIdCard;
