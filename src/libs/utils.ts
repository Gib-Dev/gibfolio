import { Locale, i18n } from "../config/i18n-config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes avec tailwind-merge et clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extrait la locale du pathname
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && i18n.locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return i18n.defaultLocale;
}

/**
 * Formate un nombre avec séparateur de milliers
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

/**
 * Calcule le temps de lecture d'un texte
 * @param text Le texte dont on veut calculer le temps de lecture
 * @param wordsPerMinute Nombre de mots lus par minute (défaut: 200)
 * @returns Le temps de lecture en minutes
 */
export function calculateReadingTime(
  text: string,
  wordsPerMinute = 200
): number {
  const wordCount = text.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  return readingTimeMinutes;
}

/**
 * Tronque un texte à une longueur donnée
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}
