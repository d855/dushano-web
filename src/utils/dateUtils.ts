import { formatDistanceToNow, parseISO, differenceInDays, format } from 'date-fns';

/**
 * @param dateString
 * @returns A formatted date string
 */
export function formatRelativeDate(dateString: string): string {
  const date = parseISO(dateString);
  const now = new Date();
  const daysDifference = differenceInDays(now, date);
  
  if (daysDifference > 3) {
    return format(date, 'd MMMM, yyyy');
  }
  
  return formatDistanceToNow(date, { addSuffix: true });
}
