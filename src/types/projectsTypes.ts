export type ProjectCardProps = {
    title: string,
    slug: string
    short_description: string,
    long_description: string,
    feature: string[],
    challenges_solutions: string,
    reflection: string,
    project_image: string,
    project_image_alt: string,
    project_links: string[]
}

export type ProjectProp = {project: ProjectCardProps}