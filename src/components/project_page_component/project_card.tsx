import {ProjectProp} from "@/types/projectsTypes";



export default function ProjectCard({project}: ProjectProp): JSX.Element {
    const {
        title,
        short_des,
        long_des,
        feature,
        challenges_solutions,
        reflection,
        project_image,
        project_image_alt,
        project_links
    } = project;
    return (
        <article>
            <div className="project_card_image">
            </div>
            <h3>{project && project.title ? project.title : 'Title'}</h3>

            <p>{short_des}</p>
            <p>{long_des}</p>

        </article>
    )
}