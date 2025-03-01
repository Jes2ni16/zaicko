import { writeFileSync } from 'fs';

const generateSitemap = async () => {
  const res = await fetch('https://zaiko-server.vercel.app/api/clients');
  if (!res.ok) {
    return [];
  }

  const clients = await res.json();
  
  const baseURL = "https://zaiko.website/client"; // Base URL

  // Generate the sitemap URLs dynamically in the required format
  const sitemap = clients.flatMap(client => {
    return client.projects.map(project => {
      return {
        url: `${baseURL}/${client.url}/featured/${project}`,
        changeFrequency: "monthly", 
        priority: 0.9,             
      };
    });
  });

  // Output the sitemap JSON (or save it to a file)
  console.log(sitemap);
  
  // Optional: Save the sitemap to a JSON file (if using Node.js)
  writeFileSync('sitemap.json', JSON.stringify(sitemap, null, 2));
}

generateSitemap();
