import Link from "next/link";
import PageSections from "../minor components/PageSections";
import { ProjectsLottie } from "../minor components/lotties/lottie";
import HomeProjectsDisplay from "./HomeProjectsDisplay";

export default function HomePageProjects() {

    return (
        <PageSections cssClass="home_projects">
            <h2 className="home_projects-title">Projects</h2>
            <p className="home_projects-content"> Here you can explore some of the I have worked on. Take a look and get inspired!
            </p>

            <ProjectsLottie display='removeLottie'/>
            <HomeProjectsDisplay />

            <Link href='projects' className="link home_project-link">View Projects</Link>
        </PageSections>
    );
}