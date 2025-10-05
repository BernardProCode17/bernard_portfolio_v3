import BriefStatement from "@/components/home_page_components/BriefStatment";
import HomeAbout from "@/components/home_page_components/HomeAbout";
import { fetchFunction, fetchPageContent_home } from "@/functions/fetchFunctions";

// Import client components with dynamic imports to ensure proper hydration
import { HomePageProjects, HomePageSkills, HomePageBanner } from "@/components/DynamicClientWrapper";


export default async function Home() {

    const homePageContentFetch = await fetchFunction(fetchPageContent_home)

    const {bannerSection, StatementSection, projectSection, skillSection, aboutSection} = homePageContentFetch[0]

    return (
        <main>

            {/* Home Page Banner Section */}
            <HomePageBanner pageData={bannerSection} />

            {/*  Brief Statement Section*/}
            <BriefStatement pageData={StatementSection}/>

            {/* Projects Section */}
            <HomePageProjects pageData={projectSection}/>

            {/* Skills Section */}
            <HomePageSkills pageData={skillSection} />

            {/* skills section span border */}
            <span className="home_skills-span"></span>

            {/* About Section */}
            <HomeAbout pageData={aboutSection} />
        </main>
    );
}
