import { client } from '@/sanity/lib/client';
import {fetchPageContent_projects,fetchFunction, fetchProjectQuery} from "@/functions/fetchFunctions";
import HeadingSection from "@/components/minor components/HeadingSection";
import ProjectCard from "@/components/projects_page_component/project_card";
import Connection from "@/components/minor components/Connection";
import { ProjectCardProps } from "@/types/projectsTypes";
import { Key } from "react";

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
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

            {/* Social Connection */}
            <Connection linkClass='project_social_link'/>
        </main>
    )
};
