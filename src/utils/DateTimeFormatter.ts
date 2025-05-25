/**
 * Formats a Date object or date string into "DD, MMMM YYYY" format
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string (e.g. "25, May 2025")
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    throw new Error("Invalid date provided");
  }

  const day = d.getDate().toString().padStart(2, "0");
  const month = d.toLocaleString("default", { month: "long" });
  const year = d.getFullYear();

  return `${day}, ${month} ${year}`;
}
