// sitemap-generator.js
const Sitemap = require('react-router-sitemap').default;

// Define routes as a plain JavaScript object
const routes = {
  path: '/',
  children: [
    {
      path: '',
      priority: 1.0,
      changefreq: 'daily'
    },
    {
      path: 'home',
      priority: 0.9,
      changefreq: 'daily'
    },
    {
      path: 'studiefag',
      priority: 0.8,
      changefreq: 'weekly'
    },
    {
      path: 'studiefag/*',
      priority: 0.7,
      changefreq: 'weekly'
    },
    {
      path: 'yrkesfag',
      priority: 0.8,
      changefreq: 'weekly'
    },
    {
      path: 'yrkesfag/*',
      priority: 0.7,
      changefreq: 'weekly'
    },
    {
      path: 'apply',
      priority: 0.6,
      changefreq: 'monthly'
    },
    {
      path: 'rapporter',
      priority: 0.6,
      changefreq: 'monthly'
    }
  ]
};

// Sitemap generator function
function generateSitemap() {
  return (
    new Sitemap(routes)
      .build('https://fravær.hermanerku.dev')
      .save('./public/sitemap.xml')
  );
}

// Run the generator
generateSitemap();