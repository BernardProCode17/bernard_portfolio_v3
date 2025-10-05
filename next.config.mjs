import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add the hostname here
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    // Optimize bundle size by prioritizing modern browsers
    swcMinify: true,
    // Control asset size
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

// Enable bundle analyzer when ANALYZE=true
const withBundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzerConfig(nextConfig);
