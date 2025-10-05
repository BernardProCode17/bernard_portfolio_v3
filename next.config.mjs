import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization settings - simplified
    images: {
        domains: ['cdn.sanity.io'], // Add the hostname here
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    
    // Output options for better performance
    compress: true,
};

// Only enable bundle analyzer when explicitly requested
const withBundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzerConfig(nextConfig);
