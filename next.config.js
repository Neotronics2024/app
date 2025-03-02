const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const isProd = process.env.NODE_ENV === 'production';
const nextConfiguration = {
  future: {
    webpack5: true
  },
  output: "export",  // <=== enables static exports
  basePath: isProd ? "/app" : "",
  assetPrefix: isProd ? "/app/" : "",  
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  reactStrictMode: true,
};

module.exports = withPlugins([optimizedImages], nextConfiguration);

