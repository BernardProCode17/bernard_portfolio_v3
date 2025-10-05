import BriefStatement from "@/components/home_page_components/BriefStatment";
import HomeAbout from "@/components/home_page_components/HomeAbout";
// import HomePageProjects from "@/components/home_page_components/HomePageProjects";
// import HomePageSkills from "@/components/home_page_components/HomePageSkills";
// import HomePageBanner from "@/components/home_page_components/HomePageBanner";
import {fetchFunction, fetchPageContent_home} from "@/functions/fetchFunctions";
import dynamic from 'next/dynamic';

const HomePageProjects = dynamic(
    () => import("@/components/home_page_components/HomePageProjects"),
    {ssr: false}
);

const HomePageSkills = dynamic(
    () => import("@/components/home_page_components/HomePageSkills"),
    {ssr: false}
);

const HomePageBanner = dynamic(
    () => import("@/components/home_page_components/HomePageBanner"),
    {ssr: false}
);


export default async function Home() {

    const homePageContentFetch = await fetchFunction(fetchPageContent_home)

    const {bannerSection, StatementSection, projectSection, skillSection, aboutSection} = homePageContentFetch[0]

    return (
        <main>

            {/* Home Page Banner Section */}
            <HomePageBanner pageData={bannerSection}/>

            {/*  Brief Statement Section*/}
            <BriefStatement pageData={StatementSection}/>

            {/* Projects Section */}
            <HomePageProjects pageData={projectSection}/>

            {/* Skills Section */}
            <HomePageSkills pageData={skillSection}/>

            {/* skills section span border */}
            <span className="home_skills-span"></span>

            {/* About Section */}
            <HomeAbout pageData={aboutSection}/>
        </main>
    );
}
