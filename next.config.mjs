const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/ecommerce/' : '',
  basePath: isProd ? '/ecommerce' : '',
  output: 'export',
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },

  devIndicators: {
    autoPrerender: false,
  },
};

export default nextConfig;
