import {fetchFunction, fetchPageContent_projects, fetchProjectQuery} from "@/functions/fetchFunctions";
import HeadingSection from "@/components/minor components/HeadingSection";
import ProjectCard from "@/components/projects_page_component/project_card";
import Connection from "@/components/minor components/Connection";
import {ProjectCardProps} from "@/types/projectsTypes";
import {Key} from "react";
import {Metadata} from "next/types";

export const metadata: Metadata = {
    title: "Projects | Bernard Clarke | Front-end Javascript React developer",
    description: "Explore the projects of Bernard Clarke, a front-end JavaScript React developer based in Vancouver, BC. Discover beautifully crafted, responsive, and accessible web applications. Learn more about Bernard's journey towards becoming a full stack developer with React, TypeScript, and Next.js.",
}

export default async function Project() {
    // Fetching the projects
    const projectsResults = await fetchFunction(fetchProjectQuery)

    // Fetching the page content
    const projectsPageContent = await fetchFunction(fetchPageContent_projects)
    const {Title, content} = projectsPageContent[0].pageSection

    return (
        <main>
            <HeadingSection cssClass="projects">
                <div className="projects_banner">
                    <h1 className="banner_title">{Title}</h1>
                    <p className="banner_content">{content}</p>
                </div>
            </HeadingSection>

            <div className="project_card_display">

                {projectsResults.map((project: ProjectCardProps, index: Key | null | undefined) => (
                    <ProjectCard key={index} project={project}/>
                ))}
            </div>

            {/* Social Connection */}
            <Connection linkClass='project_social_link'/>
        </main>
    )
};
