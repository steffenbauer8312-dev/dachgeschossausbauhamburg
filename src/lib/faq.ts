/**
 * FAQ utilities for individual FAQ pages.
 * Generates slugs and retrieves FAQ data by slug.
 */

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')        // Remove special chars
    .replace(/\s+/g, '-')                 // Spaces → hyphens
    .replace(/-+/g, '-')                  // Multiple hyphens → single
    .trim();
}

export function generateFaqSlug(question: string): string {
  const slug = slugify(question);
  // Ensure slug is not empty
  if (!slug) return 'frage';
  // Limit length to avoid overly long URLs
  return slug.length > 80 ? slug.slice(0, 80) : slug;
}