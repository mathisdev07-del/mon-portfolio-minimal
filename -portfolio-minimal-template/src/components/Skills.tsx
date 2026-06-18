import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechBadge";
import { skillCategoryColors, skills } from "@/data/portfolio";
import { cardClass, containerClass, sectionClass } from "@/lib/section";

export function Skills() {
  return (
    <section
      id="skills"
      className={sectionClass}
      aria-labelledby="skills-heading"
    >
      <div className={containerClass}>
        <SectionHeading
          id="skills-heading"
          title={skills.title}
          description={skills.description}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skills.categories.map((category, index) => {
            const accent =
              skillCategoryColors[category.name] ?? "var(--brand-navy)";

            return (
              <ScrollReveal key={category.name} delay={80 + index * 80} direction="left">
                <div
                  className={cardClass}
                  style={{ borderTopWidth: "4px", borderTopColor: accent }}
                >
                <h3
                  className="text-sm font-bold tracking-wide uppercase"
                  style={{ color: accent }}
                >
                  {category.name}
                </h3>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  role="list"
                  aria-label={category.name}
                >
                  {category.items.map((skill) => (
                    <li key={skill}>
                      <TechBadge name={skill} />
                    </li>
                  ))}
                </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
