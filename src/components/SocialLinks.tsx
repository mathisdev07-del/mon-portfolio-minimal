import Link from "next/link";

import {
  socialColorMap,
  socialIconMap,
  socialLabelMap,
  type SocialPlatform,
} from "@/lib/social-icons";
import { cn } from "@/lib/utils";

type SocialLink = {
  platform: SocialPlatform;
  href: string;
};

type SocialLinksProps = {
  links: readonly SocialLink[];
  variant?: "pills" | "icons";
  className?: string;
};

export function SocialLinks({
  links,
  variant = "pills",
  className,
}: SocialLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul
      className={cn(
        "flex flex-wrap gap-3",
        variant === "icons" && "gap-4",
        className,
      )}
      role="list"
    >
      {links.map(({ platform, href }) => {
        const Icon = socialIconMap[platform];
        const color = socialColorMap[platform];
        const label = socialLabelMap[platform];

        if (variant === "icons") {
          return (
            <li key={platform}>
              <Link
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-xl bg-white text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: color }}
              >
                <Icon className="size-5" aria-hidden="true" />
              </Link>
            </li>
          );
        }

        return (
          <li key={platform}>
            <Link
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span
                className="flex size-7 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: color }}
              >
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
