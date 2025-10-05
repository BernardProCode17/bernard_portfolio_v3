/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add the hostname here
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;
