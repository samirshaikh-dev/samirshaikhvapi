/**
 * Utility functions for class name merging and formatting.
 */

/**
 * Combines conditional class names into a single string.
 * @param  {...(string|boolean|undefined|null)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a date string to a localized readable format.
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}
