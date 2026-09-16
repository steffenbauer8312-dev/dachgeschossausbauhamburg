import type { APIRoute } from 'astro';
import { NEWS } from '@/data/news';

const SITE_URL = 'https://dachgeschossausbauhamburg.de';

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const newsItems = NEWS
    .slice()
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${newsItems
  .map((item) => {
    const newsPath = `/news/#${item.slug}`;
    const keywords = item.tags.join(', ');
    return `  <url>
    <loc>${escapeXml(SITE_URL + newsPath)}</loc>
    <news:news>
      <news:publication>
        <news:name>Dachgeschossausbau Hamburg</news:name>
        <news:language>de</news:language>
      </news:publication>
      <news:publication_date>${item.datePublished}</news:publication_date>
      <news:title>${escapeXml(item.title)}</news:title>
      <news:keywords>${escapeXml(keywords)}</news:keywords>
    </news:news>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};