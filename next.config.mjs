const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/ecommerce/' : '',
  basePath: isProd ? '/ecommerce' : '',
  output: 'export',
};

export default nextConfig;
