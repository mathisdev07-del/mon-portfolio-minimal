type ProjectLinks = {
  demo?: string;
  github?: string;
};

export const siteConfig = {
  name: "Mathis Ehouabolet",
  title: "Développeur Fullstack",
  description:
    "Portfolio de Mathis Ehouabolet, développeur fullstack passionné par React, Next.js et l'automatisation avec l'IA. Projets, compétences et contact.",
  url: "https://portfolio-minimal-template.vercel.app",
  locale: "fr_FR",
  keywords: [
    "portfolio",
    "développeur fullstack",
    "React",
    "Next.js",
    "Node.js",
    "automatisation IA",
    "Abidjan",
  ],
  author: {
    name: "Mathis Ehouabolet",
    email: "mathisehouabolet@gmail.com",
    phone: "+225 01 03 82 82 08",
    location: "Riviera Attobon, Abidjan",
    avatar: "/images/profile.jpg",
    avatarAlt: "Photo de Mathis Ehouabolet",
  },
  social: {} as Record<"github" | "linkedin" | "twitter", string>,
} as const;

export const socialLinks = [
  {
    platform: "gmail" as const,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.author.email}`,
  },
  {
    platform: "github" as const,
    href: "https://github.com/mathisehouabolet",
  },
  {
    platform: "linkedin" as const,
    href: "https://www.linkedin.com/in/mathis-ehouabolet-1735a0394",
  },
] as const;

export const skillCategoryColors: Record<string, string> = {
  Frontend: "var(--brand-blue)",
  Backend: "var(--brand-green)",
  "Base de données": "var(--brand-orange)",
  "UI / Design": "var(--brand-purple)",
  Automatisation: "var(--brand-pink)",
};

export const navigation = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "Bonjour, je suis",
  headline: "Mathis Ehouabolet",
  role: "Développeur Fullstack & IA Augmentée",
  tagline:
    "Jeune développeur fullstack passionné, orienté projets et pratique. Je crée des applications modernes avec React et Next.js, et j'explore l'automatisation avec l'IA.",
  availability: "Disponible pour des stages, missions et opportunités en développement web.",
  cta: {
    primary: { label: "Voir mes projets", href: "#projects" },
    secondary: { label: "Me contacter", href: "#contact" },
  },
} as const;

export const about = {
  title: "À propos",
  presentation: `Jeune développeur fullstack passionné, orienté projets et pratique.
Je crée des applications modernes avec React et Next.js, et j'explore l'automatisation
avec l'IA pour optimiser les workflows et gagner en efficacité.`,
  education: [
    {
      degree: "Bootcamp Développement Web",
      school: "GOMYCODE",
      period: "2026",
      description:
        "Formation intensive en développement web fullstack : React, Next.js, Node.js et bonnes pratiques de développement.",
    },
    {
      degree: "Baccalauréat série D",
      school: "Lycée Classique d'Abidjan",
      period: "2026",
      description:
        "Formation scientifique avec spécialisation en mathématiques et sciences de la vie et de la terre.",
    },
  ],
  experience: [
    {
      role: "Sites vitrines",
      company: "Projets personnels",
      period: "2026 — Présent",
      description:
        "Conception et développement de sites web modernes, responsives et orientés expérience utilisateur.",
      highlights: [
        "Création de sites vitrines avec React et Next.js",
        "Intégration de maquettes Figma avec Tailwind CSS",
      ],
    },
    {
      role: "Applications full-stack",
      company: "Projets personnels",
      period: "2026 — Présent",
      description:
        "Développement d'applications complètes avec frontend React et backend Node.js/Express.",
      highlights: [
        "API REST avec Node.js et Express",
        "Persistance des données avec MongoDB et Supabase",
      ],
    },
    {
      role: "Applications mobiles",
      company: "Projets personnels",
      period: "En cours",
      description:
        "Exploration du développement mobile avec React Native pour des applications cross-platform.",
      highlights: [
        "Projet mobile React Native en cours de développement",
      ],
    },
  ],
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Écrit et parlé" },
  ],
  interests: [
    "Automatisation & agents IA",
    "Dessin",
    "Judo",
    "Activités physiques",
  ],
} as const;

export const skills = {
  title: "Compétences",
  description:
    "Un socle technique fullstack, complété par une sensibilité UI/UX et une curiosité pour l'automatisation intelligente.",
  categories: [
    {
      name: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Express"],
    },
    {
      name: "Base de données",
      items: ["MongoDB", "Supabase"],
    },
    {
      name: "UI / Design",
      items: ["Figma", "Tailwind CSS", "Bootstrap"],
    },
    {
      name: "Automatisation",
      items: ["n8n", "Agents IA", "Workflows automatisés"],
    },
  ],
} as const;

export const projects = {
  title: "Projets",
  description:
    "Une sélection de réalisations qui illustrent mon approche : apprentissage par la pratique, simplicité et efficacité.",
  items: [
    {
      title: "Portfolio personnel",
      description:
        "Création d'un site portfolio moderne et responsive pour présenter mes compétences et projets.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/images/project-blog.svg",
      links: {} as ProjectLinks,
    },
    {
      title: "Nexus Task",
      description:
        "Application SaaS de gestion de tâches et de projets, avec tableau de bord moderne et interface intuitive.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      image: "/images/project-nexus-task.png",
      links: {
        demo: "https://nexus-task-ten.vercel.app/",
      } as ProjectLinks,
    },
    {
      title: "React Native App",
      description:
        "Projet mobile en cours de développement avec React Native.",
      technologies: ["React Native", "JavaScript"],
      image: "/images/project-weatherlite.svg",
      links: {} as ProjectLinks,
    },
    {
      title: "Automatisation n8n",
      description:
        "Workflows automatisés avec intégration d'agents IA pour optimiser des processus répétitifs.",
      technologies: ["n8n", "IA", "Automatisation"],
      image: "/images/project-taskflow.svg",
      links: {} as ProjectLinks,
    },
  ],
} as const;

export const contact = {
  title: "Contact",
  description:
    "Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter.",
  email: siteConfig.author.email,
  phone: siteConfig.author.phone,
  location: siteConfig.author.location,
  social: siteConfig.social,
  cta: "Envoyer un email",
} as const;

export const footer = {
  copyright: `© ${new Date().getFullYear()} ${siteConfig.author.name}. Tous droits réservés.`,
  note: "Conçu avec Next.js et Tailwind CSS.",
} as const;
