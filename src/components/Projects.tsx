import Image from "next/image";
import Link from "next/link";
import { Code, ExternalLink } from "lucide-react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { containerClass, sectionClass } from "@/lib/section";

export function Projects() {
  return (
    <section
      id="projects"
      className={sectionClass}
      aria-labelledby="projects-heading"
    >
      <div className={containerClass}>
        <SectionHeading
          id="projects-heading"
          title={projects.title}
          description={projects.description}
        />

        <ul className="mt-12 grid gap-8 lg:grid-cols-2" role="list">
          {projects.items.map((project, index) => (
            <li key={project.title}>
              <ScrollReveal delay={80 + index * 100} direction="left">
                <Card className="h-full overflow-hidden rounded-3xl border-border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`Aperçu du projet ${project.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <TechBadge name={tech} size="sm" />
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {(project.links.demo || project.links.github) && (
                  <CardFooter className="gap-2 border-t-0 bg-transparent">
                    {project.links.demo && (
                      <Button
                        nativeButton={false}
                        render={
                          <Link
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        variant="outline"
                        size="sm"
                        className="border-brand-navy/20"
                      >
                        <ExternalLink aria-hidden="true" />
                        Démo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        nativeButton={false}
                        render={
                          <Link
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        variant="ghost"
                        size="sm"
                      >
                        <Code aria-hidden="true" />
                        Code
                      </Button>
                    )}
                  </CardFooter>
                )}
                </Card>
              </ScrollReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
