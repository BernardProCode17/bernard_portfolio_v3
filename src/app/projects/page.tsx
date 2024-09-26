import { client } from '@/sanity/lib/client';
import { fetchProjectQuery } from "@/functions/fetchFunctions";
import HeadingSection from "@/components/minor components/HeadingSection";
import ProjectCard from "@/components/project_page_component/project_card";
import Connection from "@/components/minor components/Connection";
import { ProjectCardProps } from "@/types/projectsTypes";
import { Key } from "react";

export default async function Project() {

    const option: { cache: string } = { cache: 'no-store' };
    const projectsResults: ProjectCardProps = await client.fetch(fetchProjectQuery, {}, option);

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

            {/* Social Connection */}
            <Connection />
        </main>
    )
};
