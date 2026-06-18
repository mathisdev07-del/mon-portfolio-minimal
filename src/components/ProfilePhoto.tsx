import Image from "next/image";

import { siteConfig } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProfilePhotoProps = {
  size?: "md" | "lg";
  className?: string;
};

const sizeClasses = {
  md: "size-36 md:size-40",
  lg: "size-44 md:size-52",
};

export function ProfilePhoto({ size = "lg", className }: ProfilePhotoProps) {
  const { avatar, avatarAlt, name } = siteConfig.author;

  return (
    <div className={cn("relative mx-auto w-fit shrink-0 md:mx-0", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border bg-muted shadow-sm",
          sizeClasses[size],
        )}
      >
        <Image
          src={avatar}
          alt={avatarAlt ?? `Photo de ${name}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 176px, 208px"
          priority
        />
      </div>
    </div>
  );
}
