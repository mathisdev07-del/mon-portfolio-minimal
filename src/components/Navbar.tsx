"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/data/portfolio";
import { containerClass } from "@/lib/section";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-md">
      <nav
        className={cn(containerClass, "flex h-16 items-center justify-between")}
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.author.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<Link href="#contact" />}
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Contact
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border/60 bg-white md:hidden"
        >
          <ul className={cn(containerClass, "flex flex-col gap-1 py-4")}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand-yellow/20 hover:text-brand-navy"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                nativeButton={false}
                render={<Link href="#contact" />}
                className="w-full bg-brand-navy text-white hover:bg-brand-navy/90"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
