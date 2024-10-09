'use client'
import BriefStatement from "@/components/home_page_components/BriefStatment";
import HomeAbout from "@/components/home_page_components/HomeAbout";
import HomePageProjects from "@/components/home_page_components/HomePageProjects";
import HomePageSkills from "@/components/home_page_components/HomePageSkills";
import HomePageBanner from "@/components/home_page_components/HomePageBanner";
import { pageContentFetchfunction, fetchPageContent_home } from "@/functions/fetchFunctions";


export default async function Home() {

    const homePageContentFetch = await pageContentFetchfunction(fetchPageContent_home)
    console.table('Home Page Fetch', homePageContentFetch)

    const [bannerSection, ...rest] = homePageContentFetch[0]
    console.log(bannerSection)
    return (
        <main>

            {/* Home Page Banner Section */}
            <HomePageBanner />

            {/*  Brief Statement Section*/}
            <BriefStatement />

            {/* Projects Section */}
            <HomePageProjects />

            {/* Skills Section */}
            <HomePageSkills />

            {/* skills section span border */}
            <span className="home_skills-span"></span>

            {/* About Section */}
            <HomeAbout />
        </main>
    );
}
