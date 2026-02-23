import type { Heritage } from "@/data/types";

interface StatusBadgeProps {
  status: Heritage["status"];
  size?: "sm" | "md";
}

const statusConfig = {
  verified: { label: "Overené", className: "bg-museum-verified/10 text-museum-verified border-museum-verified/30" },
  draft: { label: "Návrh", className: "bg-museum-draft/10 text-museum-draft border-museum-draft/30" },
  disputed: { label: "Sporné", className: "bg-museum-disputed/10 text-museum-disputed border-museum-disputed/30" },
};

const StatusBadge = ({ status, size = "sm" }: StatusBadgeProps) => {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center border font-mono uppercase tracking-wider ${
        size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-3 py-1"
      } ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
