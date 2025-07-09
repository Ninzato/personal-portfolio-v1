import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 80; // Account for fixed navbar height
    const elementPosition = element.offsetTop - navHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}