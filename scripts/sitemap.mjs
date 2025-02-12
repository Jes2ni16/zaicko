import { writeFileSync } from 'fs';


const generateSitemap = async () => {

const res = await fetch('https://zaiko-server.vercel.app/api/clients');
if (!res.ok) {
  return [];
}

const clients = await res.json();
  
const baseURL = "https://zaiko.website/client"; // Base URL
// Generate the sitemap URLs dynamically
const sitemap = clients.flatMap(client => {
  return client.projects.map(project => {
    return {
      url: `${baseURL}/${client.url}/featured/${project}`,
      priority: "0.9",  
      changefreq: "monthly" ,
      lastmod:"2025-02-11"
    };
  });
});
// Generate the XML sitemap structure with priority and changefreq
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemap.map(({ url,lastmod, priority, changefreq }) => {
      return `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${priority}</priority>
        <changefreq>${changefreq}</changefreq>
      </url>`;
    }).join('')}
  </urlset>`;
// Output the sitemap XML to the console (or save to a file)
console.log(sitemapXML);
// Optional: Save the sitemap XML to a file (if using Node.js)

writeFileSync('sitemap.xml', sitemapXML);

}

generateSitemap();