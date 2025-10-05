'use client'
import dynamic from 'next/dynamic';

// Dynamically import the Lottie library with SSR disabled
export const Lottie = dynamic(() => import('react-lottie'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

// Dynamically import components that use browser APIs
export const HomePageProjects = dynamic(
    () => import("./home_page_components/HomePageProjects"),
    {ssr: false, loading: () => <div>Loading...</div>}
);

export const HomePageSkills = dynamic(
    () => import("./home_page_components/HomePageSkills"),
    {ssr: false, loading: () => <div>Loading...</div>}
);

export const HomePageBanner = dynamic(
    () => import("./home_page_components/HomePageBanner"),
    {ssr: false, loading: () => <div>Loading...</div>}
);