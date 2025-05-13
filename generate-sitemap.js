const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact-us', changefreq: 'monthly', priority: 0.8 },
  // Add all your routes
];

const sitemap = new SitemapStream({ hostname: 'https://asianfeeders.in' });
streamToPromise(sitemap).then(data =>
  require('fs').writeFileSync('./public/sitemap.xml', data.toString())
);

links.forEach(link => sitemap.write(link));
sitemap.end();
