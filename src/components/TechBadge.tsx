import { getTechColor, getTechIcon } from "@/lib/tech-icons";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
  name: string;
  size?: "sm" | "md";
  className?: string;
};

export function TechBadge({ name, size = "md", className }: TechBadgeProps) {
  const Icon = getTechIcon(name);
  const color = getTechColor(name);

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-3 py-1.5 text-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md",
        size === "sm" && "px-2.5 py-1 text-xs",
        className,
      )}
    >
      {Icon ? (
        <Icon
          className={cn("shrink-0", size === "sm" ? "size-3.5" : "size-4")}
          style={{ color }}
          aria-hidden="true"
        />
      ) : (
        <span
          className={cn(
            "shrink-0 rounded-full",
            size === "sm" ? "size-2" : "size-2.5",
          )}
          style={{ backgroundColor: color }}
          aria-hidden="true"
        />
      )}
      <span className={cn("font-medium", size === "sm" && "text-xs")}>
        {name}
      </span>
    </span>
  );
}
