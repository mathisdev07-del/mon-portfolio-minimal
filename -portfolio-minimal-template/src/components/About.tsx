import { about } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { cardClass, containerClass, sectionClass } from "@/lib/section";
import { Bot, Dumbbell, Languages, Palette, Sparkles } from "lucide-react";

const interestIcons: Record<string, typeof Sparkles> = {
  "Automatisation & agents IA": Bot,
  Dessin: Palette,
  Judo: Dumbbell,
  "Activités physiques": Dumbbell,
};

const interestColors = [
  "bg-brand-pink/15 text-brand-pink border-brand-pink/30",
  "bg-brand-purple/15 text-brand-purple border-brand-purple/30",
  "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
  "bg-brand-green/15 text-brand-green border-brand-green/30",
];

export function About() {
  return (
    <section
      id="about"
      className={sectionClass}
      aria-labelledby="about-heading"
    >
      <div className={containerClass}>
        <SectionHeading
          id="about-heading"
          title={about.title}
          description={about.presentation}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={80} direction="left">
            <div className={cardClass}>
              <h3 className="subheading-highlight text-lg">Parcours académique</h3>
              <ul className="mt-6 space-y-6" role="list">
                {about.education.map((item, index) => (
                  <li
                    key={`${item.school}-${item.period}`}
                    className="rounded-xl border border-border/60 bg-muted/30 p-4"
                    style={{
                      borderLeftWidth: "4px",
                      borderLeftColor:
                        index === 0 ? "var(--brand-yellow)" : "var(--brand-blue)",
                    }}
                  >
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="font-semibold text-brand-navy">{item.degree}</p>
                      <span className="inline-flex w-fit rounded-full border border-brand-navy/15 bg-white px-2.5 py-0.5 text-xs font-medium text-brand-navy">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      {item.school}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} direction="left">
            <div className={cardClass}>
              <h3 className="subheading-highlight text-lg">Expériences pratiques</h3>
              <ul className="mt-6 space-y-6" role="list">
                {about.experience.map((item, index) => {
                  const accentColors = [
                    "var(--brand-blue)",
                    "var(--brand-green)",
                    "var(--brand-pink)",
                  ];
                  return (
                    <li
                      key={`${item.role}-${item.period}`}
                      className="rounded-xl border border-border/60 bg-muted/30 p-4"
                      style={{
                        borderLeftWidth: "4px",
                        borderLeftColor: accentColors[index % accentColors.length],
                      }}
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <p className="font-semibold text-brand-navy">
                          {item.role}
                          <span className="font-normal text-muted-foreground">
                            {" "}
                            — {item.company}
                          </span>
                        </p>
                        <span className="inline-flex w-fit rounded-full border border-brand-navy/15 bg-white px-2.5 py-0.5 text-xs font-medium text-brand-navy">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      <ul className="mt-3 space-y-1" role="list">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-sm text-muted-foreground before:mr-2 before:font-bold before:text-brand-yellow before:content-['•']"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={240} direction="left">
            <div className={cardClass}>
              <h3 className="subheading-highlight flex items-center gap-2 text-lg">
                <Languages className="size-5 text-brand-blue" aria-hidden="true" />
                Langues
              </h3>
              <ul className="mt-6 space-y-3" role="list">
                {about.languages.map((language, index) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between rounded-xl border border-border/60 bg-white px-4 py-3"
                  >
                    <span className="font-semibold text-brand-navy">
                      {language.name}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        index === 0
                          ? "bg-brand-yellow/30 text-brand-navy"
                          : "bg-brand-blue/15 text-brand-blue"
                      }`}
                    >
                      {language.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={320} direction="left">
            <div className={cardClass}>
              <h3 className="subheading-highlight flex items-center gap-2 text-lg">
                <Sparkles className="size-5 text-brand-pink" aria-hidden="true" />
                Centres d&apos;intérêt
              </h3>
              <ul className="mt-6 flex flex-wrap gap-3" role="list">
                {about.interests.map((interest, index) => {
                  const Icon = interestIcons[interest] ?? Sparkles;
                  return (
                    <li
                      key={interest}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${interestColors[index % interestColors.length]}`}
                    >
                      <Icon className="size-4" aria-hidden="true" />
                      {interest}
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
