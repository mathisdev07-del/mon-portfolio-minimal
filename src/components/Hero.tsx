import Link from "next/link";

import { ProfilePhoto } from "@/components/ProfilePhoto";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/portfolio";
import { containerClass } from "@/lib/section";

export function Hero() {
  const [firstName, ...lastNameParts] = hero.headline.split(" ");
  const lastName = lastNameParts.join(" ");

  return (
    <section
      className="flex min-h-[calc(100svh-4rem)] items-center py-20 md:py-28"
      aria-labelledby="hero-heading"
    >
      <div className={containerClass}>
        <ScrollReveal direction="left">
          <div className="card-surface p-8 md:p-12">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              <span className="size-1.5 rounded-full bg-brand-green" aria-hidden="true" />
              Disponible
            </p>

            <div className="mt-8 grid items-center gap-10 md:grid-cols-[auto_1fr]">
              <ProfilePhoto />

              <div>
                  <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {hero.greeting}
                  </p>

                  <h1
                    id="hero-heading"
                    className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl"
                  >
                    {firstName}{" "}
                    {lastName && (
                      <span className="text-foreground/80">{lastName}</span>
                    )}
                  </h1>

                  <p className="mt-4 text-xl font-medium text-foreground/75 md:text-2xl">
                    {hero.role}
                  </p>

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {hero.tagline}
                  </p>

                  <p className="mt-4 text-sm text-muted-foreground">
                    {hero.availability}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      nativeButton={false}
                      render={<Link href={hero.cta.primary.href} />}
                      size="lg"
                      className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                    >
                      {hero.cta.primary.label}
                    </Button>
                    <Button
                      nativeButton={false}
                      render={<Link href={hero.cta.secondary.href} />}
                      variant="outline"
                      size="lg"
                      className="rounded-full border-border bg-card hover:bg-muted"
                    >
                      {hero.cta.secondary.label}
                    </Button>
                  </div>
                </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
