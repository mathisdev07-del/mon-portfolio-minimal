import type { IconType } from "react-icons";
import {
  SiBootstrap,
  SiCss,
  SiExpress,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Bot, Workflow } from "lucide-react";

export const techIconMap: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Supabase: SiSupabase,
  Figma: SiFigma,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  n8n: SiN8N,
  "React Native": SiReact,
  IA: SiOpenai,
  Automatisation: Workflow,
  "Agents IA": Bot,
  "Workflows automatisés": Workflow,
};

export const techColorMap: Record<string, string> = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  React: "#61DAFB",
  "Next.js": "#000000",
  "Node.js": "#339933",
  Express: "#000000",
  MongoDB: "#47A248",
  Supabase: "#3FCF8E",
  Figma: "#F24E1E",
  "Tailwind CSS": "#06B6D4",
  Bootstrap: "#7952B3",
  n8n: "#EA4B71",
  "React Native": "#61DAFB",
  IA: "#412991",
  Automatisation: "#6366F1",
  "Agents IA": "#8B5CF6",
  "Workflows automatisés": "#6366F1",
};

export function getTechIcon(name: string): IconType | null {
  return techIconMap[name] ?? null;
}

export function getTechColor(name: string): string {
  return techColorMap[name] ?? "#1E3A5F";
}
