import HeadingSection from "@/components/minor components/HeadingSection";
import { client } from '@/sanity/lib/client';
import { fetchProjectQuery } from "@/functions/fetchFunctions";
import ProjectCard from "@/components/project_page_component/project_card";

export default async function Project() {
    const projectsResults = await client.fetch(fetchProjectQuery, { cache: 'no-cache' });
    console.log(projectsResults)

    return (
        <main>
            <HeadingSection cssClass="projects">
                <div className="projects_banner">
                    <h1 className="banner_title">Projects</h1>
                    <p className="banner_content">Highlighted projects</p>
                </div>
            </HeadingSection>
            {projectsResults.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            <section>

            </section>
        </main>
    )
};
