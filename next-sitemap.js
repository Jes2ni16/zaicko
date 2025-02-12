

  const sitemap = {
    siteUrl: 'https://zaiko.website', // Replace with your website URL
    generateRobotsTxt: true, // Optional: generates robots.txt
    changefreq: 'weekly', // Change frequency of your pages
    priority: 0.9, // Default priority of pages
    sitemapSize: 5000, // Maximum number of URLs per sitemap file
    exclude: ['/admin/**', '/private/**'], // Exclude paths
  }

  module.exports = sitemap