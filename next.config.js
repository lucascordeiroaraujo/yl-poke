const withPlugins = require('next-compose-plugins');

const withImages = require('next-images');

const withFonts = require('next-fonts');

const withCSS = require('@zeit/next-css');

const nextConfig = {
  webpack: config => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
    domains: ['localhost', 'raw.githubusercontent.com'],
  },
};

module.exports = withPlugins(
  [[withImages], [withFonts], [withCSS]],
  nextConfig,
);
