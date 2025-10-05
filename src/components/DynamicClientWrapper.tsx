'use client'
import dynamic from 'next/dynamic';

export const HomePageProjects = dynamic(
    () => import("./home_page_components/HomePageProjects"),
    {loading: () => <div>Loading...</div>}
);

export const HomePageSkills = dynamic(
    () => import("./home_page_components/HomePageSkills"),
    {loading: () => <div>Loading...</div>}
);

export const HomePageBanner = dynamic(
    () => import("./home_page_components/HomePageBanner"),
    {loading: () => <div>Loading...</div>}
);