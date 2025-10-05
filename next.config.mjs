import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Image optimization settings
    images: {
        domains: ['cdn.sanity.io'], // Add the hostname here
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    
    // Output options for better performance
    output: 'standalone',
    
    // Compression for smaller bundles
    compress: true,
    
    // Strict mode for better development experience
    reactStrictMode: true,
    
    // Disable powered by header for security
    poweredByHeader: false,
    
    // Optimize memory usage
    onDemandEntries: {
        maxInactiveAge: 60 * 1000, // 1 minute
        pagesBufferLength: 5,
    },
};

// Only enable bundle analyzer when explicitly requested
const withBundleAnalyzerConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzerConfig(nextConfig);
