import { urlFor } from "@/sanity/lib/image";
import { ProjectProp } from "@/types/projectsTypes";
import { Image } from "next-sanity/image";
import ProjectLink from "../minor components/Link";


export default function ProjectCard({ project }: ProjectProp): JSX.Element {
    const { title, short_des, project_image, project_image_alt } = project;

    //const imageSrcURL = project_image && urlFor(project_image).url()
    // const backupSrcURL = 'https://cdn.sanity.io/images/pf77n7pz/production/ddc4cdb432da5e0717d6cd9d5dd65b9ff44e617c-1919x914.png'
    //console.log('image URL',imageSrcURL)
    return (
        <article className="project_card">
            <div className="project_card_image">
                {/* <Image src={imageSrcURL && imageSrcURL} alt={project_image_alt}/> */}
                <Image src={project_image && urlFor(project_image).url()} alt={project_image_alt} width={300} height={300} />
            </div>
            <h3 className="project_card_title">{title && title || 'Project Title'}</h3>
            <p className="project_card_short_desc">{short_des && short_des || 'short description'}</p>
            <ProjectLink text="Learn More" href="/projects/project" cssClass="project_card_link"/>
        </article>
    )
}