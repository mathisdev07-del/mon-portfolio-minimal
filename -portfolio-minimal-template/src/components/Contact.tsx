import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiGmail } from "react-icons/si";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";
import { contact, socialLinks } from "@/data/portfolio";
import { cardClass, containerClass, sectionClass } from "@/lib/section";

const gmailComposeUrl = socialLinks.find((link) => link.platform === "gmail")!.href;

const contactItems = [
  {
    label: "Email",
    value: contact.email,
    href: gmailComposeUrl,
    icon: Mail,
    color: "bg-[#EA4335]",
  },  {
    label: "Téléphone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    icon: Phone,
    color: "bg-brand-green",
  },
  {
    label: "Localisation",
    value: contact.location,
    href: undefined,
    icon: MapPin,
    color: "bg-brand-blue",
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className={sectionClass}
      aria-labelledby="contact-heading"
    >
      <div className={containerClass}>
        <SectionHeading
          id="contact-heading"
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={80} direction="left">
            <div className={cardClass}>
            <h3 className="subheading-highlight text-lg">Coordonnées</h3>
            <ul className="mt-6 space-y-4" role="list">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-white ${item.color}`}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-brand-navy">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.label === "Email"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex items-center gap-4 rounded-xl border border-border/60 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-xl border border-border/60 bg-white p-4">
                        {content}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <Button
                nativeButton={false}
                render={
                  <Link
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="w-full bg-brand-navy text-white shadow-md hover:bg-brand-navy/90 sm:w-auto"
              >
                <SiGmail className="size-4" aria-hidden="true" />
                {contact.cta}
              </Button>
            </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160} direction="left">
            <div className={cardClass}>
            <h3 className="subheading-highlight text-lg">Réseaux sociaux</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Retrouvez-moi sur les plateformes ci-dessous pour suivre mes projets
              et échanger.
            </p>
            <div className="mt-8">
              <SocialLinks links={socialLinks} variant="pills" />
            </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
