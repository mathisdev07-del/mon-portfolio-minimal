# Portfolio Minimal Template

Template de portfolio professionnel minimaliste, construit avec Next.js (App Router), TypeScript, Tailwind CSS et shadcn/ui.

Conçu pour les étudiants, développeurs juniors, consultants débutants et freelances qui souhaitent un site rapide, élégant et facile à personnaliser.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Button, Card)
- **pnpm**
- **ESLint** + **Prettier**

## Installation

```bash
# Cloner le dépôt
git clone <votre-repo> portfolio-minimal-template
cd portfolio-minimal-template

# Installer les dépendances
pnpm install
```

## Personnalisation

Toutes les données du portfolio sont centralisées dans un seul fichier :

```
src/data/portfolio.ts
```

Modifiez ce fichier pour mettre à jour :

- Informations personnelles et SEO
- Navigation
- Section Hero
- À propos (présentation, formation, expériences)
- Compétences
- Projets
- Contact et réseaux sociaux

Remplacez les images de projets dans `public/images/` par vos propres visuels.

## Lancement en local

```bash
# Serveur de développement
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

```bash
# Build de production
pnpm build

# Démarrer le serveur de production
pnpm start
```

## Scripts disponibles

| Commande           | Description                        |
| ------------------ | ---------------------------------- |
| `pnpm dev`         | Lance le serveur de développement  |
| `pnpm build`       | Génère le build de production      |
| `pnpm start`       | Démarre le serveur de production   |
| `pnpm lint`        | Vérifie le code avec ESLint        |
| `pnpm format`      | Formate le code avec Prettier      |
| `pnpm format:check`| Vérifie le formatage Prettier      |

## Structure du projet

```
src/
├── app/
│   ├── page.tsx          # Page d'accueil
│   ├── layout.tsx        # Layout racine + métadonnées SEO
│   └── globals.css       # Styles globaux Tailwind
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx        # Client Component (menu mobile)
│   ├── Footer.tsx
│   └── ui/               # Composants shadcn/ui
├── data/
│   └── portfolio.ts      # Données centralisées
├── lib/
│   ├── utils.ts
│   └── section.ts
public/
└── images/               # Images des projets
```

## Déploiement sur Vercel

Ce template est optimisé pour un déploiement sur [Vercel](https://vercel.com).

### Option 1 — Interface Vercel (recommandée)

1. Poussez votre code sur GitHub, GitLab ou Bitbucket.
2. Connectez-vous à [vercel.com](https://vercel.com) et cliquez sur **Add New Project**.
3. Importez votre dépôt.
4. Vercel détecte automatiquement Next.js. Laissez les paramètres par défaut :
   - **Framework Preset** : Next.js
   - **Build Command** : `pnpm build`
   - **Install Command** : `pnpm install`
5. Cliquez sur **Deploy**.

### Option 2 — CLI Vercel

```bash
# Installer la CLI Vercel
pnpm add -g vercel

# Déployer
vercel
```

### Après le déploiement

Mettez à jour l'URL dans `src/data/portfolio.ts` :

```ts
export const siteConfig = {
  url: "https://votre-domaine.vercel.app",
  // ...
};
```

## Architecture

- **Server Components** par défaut pour des performances optimales.
- **Client Components** uniquement là où c'est nécessaire (`Navbar` pour le menu mobile).
- Données centralisées pour une maintenance simple.
- Design mobile-first, accessible et responsive.

## Licence

Libre d'utilisation pour vos projets personnels et professionnels.
"# -portfolio-minimal-template" 
"# -portfolio-minimal-template" 
"# -portfolio-minimal-template" 
"# -portfolio-minimal-template" 
"# -portfolio-minimal-template" 
