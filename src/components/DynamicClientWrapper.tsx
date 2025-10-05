'use client'
import dynamic from 'next/dynamic';

// Enhanced placeholder component with skeleton loading
const LoadingPlaceholder = ({ height = '200px', width = '100%' }) => (
  <div style={{
    height,
    width,
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'pulse 1.5s ease-in-out infinite',
    borderRadius: '4px'
  }}>
    <style jsx>{`
      @keyframes pulse {
        0% { background-position: 0% 0; }
        100% { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

// Return to original react-lottie implementation to fix compatibility issues
export const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
  loading: () => <LoadingPlaceholder height="300px" />
});

// Dynamically import components with improved loading states and priority settings
export const HomePageProjects = dynamic(
    () => import("./home_page_components/HomePageProjects"),
    {
      ssr: false, // Changed back to false to avoid hydration issues
      loading: () => <LoadingPlaceholder height="400px" />
    }
);

export const HomePageSkills = dynamic(
    () => import("./home_page_components/HomePageSkills"),
    {
      ssr: false, // Changed back to false to avoid hydration issues
      loading: () => <LoadingPlaceholder height="300px" />
    }
);

export const HomePageBanner = dynamic(
    () => import("./home_page_components/HomePageBanner"),
    {
      ssr: false, // Changed back to false to avoid hydration issues
      loading: () => <LoadingPlaceholder height="500px" />
    }
);