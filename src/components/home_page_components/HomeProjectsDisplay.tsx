import {ProjectCardProps} from "@/types/projectsTypes";
import {Key} from "react";
import ProjectCard from "@/components/projects_page_component/project_card";
import {fetchFunction, fetchProjectQuery} from "@/functions/fetchFunctions";


export default async function HomeProjectsDisplay() {
    // Renders the project display from sanity

    // Fetching the projects
    const projectsResults = await fetchFunction(fetchProjectQuery)

    return (
        <div className="home_project_display addDisplay">

            {projectsResults.map((project: ProjectCardProps, index: Key | null | undefined) => (
                <ProjectCard key={index} project={project}/>
            ))}

        </div>
    )
}