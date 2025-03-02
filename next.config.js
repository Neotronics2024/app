const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  future: {
    webpack5: true
  },
  output: "export",  // <=== enables static exports
  basePath: "/app",
  assetPrefix: "/app/",
  images: {
    unoptimized: true, // Disables Next.js image optimization (GitHub Pages doesn't support it)
  },
  reactStrictMode: true,
};

module.exports = withPlugins([optimizedImages], nextConfiguration);

