import { urlFor } from "@/sanity/lib/image";
import { ProjectProp } from "@/types/projectsTypes";
import { Image } from "next-sanity/image";
import ProjectLink from "../minor components/Link";


export default function ProjectCard({ project }: ProjectProp): JSX.Element {

    const { title, short_des, project_image, project_image_alt, slug, ...rest } = project;

    return (
        <article className='project_card'>

            <div className="project_card_image-container">
                <Image src={project_image && urlFor(project_image).url()} alt={project_image_alt} width={200} height={200} className="project_card_image" />
            </div>

            <div className="project_card_content-container">
                <h3 className="project_card_title">{title && title || 'Project Title'}</h3>
                <p className="project_card_short_desc">{short_des && short_des || 'short description'}</p>
                <ProjectLink text="Learn More" href={`/project/${slug}`} cssClass="project_card_link link" />
            </div>

        </article>
    )
}