const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  future: {
    webpack5: true
  },
  target: 'serverless',
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
