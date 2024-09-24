"use client"

import HeadingSection from "@/components/minor components/HeadingSection";
import {client} from '@/sanity/lib/client';
import {fetchProjectQuery} from "@/functions/fetchFunctions";

async function getServerSideProps() {
    const projects = await client.fetch(fetchProjectQuery);
    // const projects1 = await projects.json()
    console.log("projects props side", projects);
    return {props: {projects}};
}
getServerSideProps()

export default function Project() {
    // const projectsResults = client.fetch(fetchProjectQuery);
    const projects = getServerSideProps()
    // console.log(projects);
    // console.log(projectsResults);

    return (
        <main>
            <HeadingSection cssClass="projects">
                <div className="projects_banner">
                    <h1 className="banner_title">Projects</h1>
                    <p className="banner_content">Highlighted projects</p>
                </div>
            </HeadingSection>

            <section>
                {projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </section>
        </main>
    )
};
