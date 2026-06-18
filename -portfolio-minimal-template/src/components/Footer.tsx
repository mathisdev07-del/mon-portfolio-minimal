import { ScrollReveal } from "@/components/ScrollReveal";
import { SocialLinks } from "@/components/SocialLinks";
import { footer, socialLinks } from "@/data/portfolio";
import { containerClass } from "@/lib/section";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-white/80 py-10 backdrop-blur-sm">
      <div className={containerClass}>
        <ScrollReveal>
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-medium text-foreground">{footer.copyright}</p>
            <p className="mt-1 text-sm text-muted-foreground">{footer.note}</p>
          </div>
          <SocialLinks links={socialLinks} variant="icons" />
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
