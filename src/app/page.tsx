import BriefStatement from "@/components/home_page_components/BriefStatment";
import HomeAbout from "@/components/home_page_components/HomeAbout";
import { fetchFunction, fetchPageContent_home } from "@/functions/fetchFunctions";
import ServerHomeProjectsDisplay from "@/components/home_page_components/ServerHomeProjectsDisplay";

// Import client components with dynamic imports to ensure proper hydration
import { HomePageSkills, HomePageBanner } from "@/components/DynamicClientWrapper";
import Link from "next/link";

export default async function Home() {
    const homePageContentFetch = await fetchFunction(fetchPageContent_home)
    const {bannerSection, StatementSection, projectSection, skillSection, aboutSection} = homePageContentFetch[0]

    return (
        <main>
            {/* Home Page Banner Section */}
            <HomePageBanner pageData={bannerSection} />

            {/*  Brief Statement Section*/}
            <BriefStatement pageData={StatementSection}/>

            {/* Projects Section - Server Component */}
            <section className="section home_projects-section">
                <h2 className="home_projects-title">{projectSection.Title}</h2>
                <p className="home_projects-subtitle">{projectSection.Content}</p>
                
                {/* Using Server Component for Projects */}
                <ServerHomeProjectsDisplay />
                
                <Link href="/projects" className="home_projects-link">{projectSection.Link}</Link>
            </section>

            {/* Skills Section */}
            <HomePageSkills pageData={skillSection} />

            {/* skills section span border */}
            <span className="home_skills-span"></span>

            {/* About Section */}
            <HomeAbout pageData={aboutSection} />
        </main>
    );
}
