/**
 * Calculates the estimated reading time for a given text
 * @param content - The content to calculate reading time for
 * @param wordsPerMinute - Average reading speed in words per minute (default: 200)
 * @returns Estimated reading time in minutes as a string (e.g., "3 min read")
 */
export function getReadingTime(content: string, wordsPerMinute: number = 200): string {
  // Remove HTML tags if present
  const text = content.replace(/<\/?[^>]+(>|$)/g, '');
  
  // Count words by splitting on whitespace
  const words = text.trim().split(/\s+/).length;
  
  // Calculate reading time in minutes
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  
  return `${minutes} min read`;
}
