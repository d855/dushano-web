import { formatDistanceToNow, parseISO } from 'date-fns';

/**
 * Formats a date as a human-friendly relative time string (e.g., "2 days ago")
 * @param dateString - ISO date string (e.g., "2025-04-10")
 * @returns A human-friendly relative time string
 */
export function formatRelativeDate(dateString: string): string {
  const date = parseISO(dateString);
  return formatDistanceToNow(date, { addSuffix: true });
}
