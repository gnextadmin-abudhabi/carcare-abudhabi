// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://carcareabudhabi.com',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/api/'),
      changefreq: 'weekly',
      serialize(item) {
        // Dynamic priority: homepage highest, deep combo pages lowest
        const depth = item.url.replace('https://carcarabudhabi.com/', '').split('/').filter(Boolean).length;
        if (depth === 0) item.priority = 1.0;           // homepage
        else if (depth === 1) item.priority = 0.9;       // /services/, /areas/, /contact/
        else if (depth === 2) item.priority = 0.7;       // /services/car-ac-repair/
        else item.priority = 0.5;                        // /services/mussafah/car-ac-repair/
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  adapter: cloudflare(),
});
