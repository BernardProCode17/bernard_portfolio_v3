import Link from "next/link";
import PageSections from "../minor components/PageSections";
import HomeProjectsDisplay from "./HomeProjectsDisplay";

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

            {/*<ProjectsLottie display='removeLottie'/>*/}
            <HomeProjectsDisplay/>

            <Link href='projects' className="link home_project-link">{Links}</Link>
        </PageSections>
    );
}