import HeadingSection from "@/components/minor components/HeadingSection";
import { client } from '@/sanity/lib/client';
import { fetchProjectQuery } from "@/functions/fetchFunctions";
import ProjectCard from "@/components/project_page_component/project_card";
import { ProjectCardProps } from "@/types/projectsTypes";
import { Key } from "react";

export default async function Project() {

    const option: { cache: string } = { cache: 'no-store' };
    const projectsResults = await client.fetch(fetchProjectQuery, {}, option);
    console.log(projectsResults)

    return (
        <main>
            <HeadingSection cssClass="projects">
                <div className="projects_banner">
                    <h1 className="banner_title">Projects</h1>
                    <p className="banner_content">Highlighted projects</p>
                </div>
            </HeadingSection>

            <div className="project_card_display">

                {projectsResults.map((project: ProjectCardProps, index: Key | null | undefined) => (
                    <ProjectCard key={index} project={project} />
                ))}

            </div>
        </main>
    )
};
