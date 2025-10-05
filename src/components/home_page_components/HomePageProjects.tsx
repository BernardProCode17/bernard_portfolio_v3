import Link from "next/link";
import PageSections from "../minor components/PageSections";
import HomeProjectsDisplay from "./HomeProjectsDisplay";
import {ProjectsLottie} from "../minor components/lotties/lottie";

type PageDataProjects = {
    Title: string,
    Content: string,
    Link: string
}


export default function HomePageProjects({pageData}: { pageData: PageDataProjects }) {
    const {Title, Content, Link: Links} = pageData

    return (
        <PageSections cssClass="home_projects">
            <h2 className="home_projects-title">{Title}</h2>
            <p className="home_projects-content">{Content}</p>

            <ProjectsLottie/>
            <HomeProjectsDisplay/>

            <Link href='projects' className="link home_project-link">{Links}</Link>
        </PageSections>
    );
}