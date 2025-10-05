import {Metadata} from "next/types";
import "../styles/globals.css";
import Header from "@/components/header_footer/Header";
import VOTD from "@/components/VOTD/VOTD";
import Footer from "@/components/header_footer/Footer";
import {Suspense} from "react";
import Loading from "./loading";
import {SpeedInsights} from "@vercel/speed-insights/react";
import {Analytics} from "@vercel/analytics/react";
import { inter, poppins, roboto } from "@/styles/fonts";

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: "Bernard Clarke | Front-end Javascript React developer",
    description: "Bernard Clarke is a front-end Javascript React developer based in vancouver, BC. I have a passion for creating beautiful, responsive, and accessible web applications and website. I'm currently looking for an opportunity to work with react, typescript, and next.js to create amazing application and develop my skills to become a full stack developer.",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    metadataBase: new URL("https://bernardportfolio.vercel.app/"),
    openGraph: {
        title: "Bernard Clarke | Front-end Javascript React developer",
        description: "Front-end developer specializing in React and Next.js applications",
        url: "https://bernardportfolio.vercel.app",
        siteName: "Bernard Clarke Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bernard Clarke | Front-end Javascript React developer",
        description: "Front-end developer specializing in React and Next.js applications",
    },
    other: {
        "theme-color": "#ffffff",
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
    },
};


export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en" className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
        <head>
            {/* Preload key resources */}
            <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://cdn.sanity.io" />
            
            {/* Preload critical CSS */}
            <link 
              rel="preload" 
              href="/styles/globals.css" 
              as="style"
            />
            
            {/* Browser hints */}
            <meta name="color-scheme" content="light" />
            <meta name="theme-color" content="#ffffff" />
        </head>
        <body className="body">
        <Header/>
        <VOTD/>
        <Suspense fallback={<Loading/>}>
            {children}
            <SpeedInsights/>
            <Analytics/>
        </Suspense>
        <Footer/>
        </body>
        </html>
    );
}
