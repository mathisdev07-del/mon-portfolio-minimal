import type { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export type SocialPlatform = "github" | "linkedin" | "gmail" | "instagram";

export const socialIconMap: Record<SocialPlatform, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  gmail: SiGmail,
  instagram: FaInstagram,
};

export const socialColorMap: Record<SocialPlatform, string> = {
  github: "#181717",
  linkedin: "#0A66C2",
  gmail: "#EA4335",
  instagram: "#E4405F",
};

export const socialLabelMap: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  gmail: "Gmail",
  instagram: "Instagram",
};
