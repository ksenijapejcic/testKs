/**
 * Safely truncates a string to a maximum length.
 * Handles null/undefined inputs gracefully (AC-3).
 */
export const truncateString = (text: string | null | undefined, maxLength: number): string => {
  // Input validation (AC-3)
  if (!text || typeof text !== 'string') {
    return "";
  }

  // No truncation needed
  if (text.length <= maxLength) {
    return text;
  }

  // Truncate and add ellipsis (AC-1, AC-2)
  return `${text.slice(0, maxLength).trim()}...`;
};
