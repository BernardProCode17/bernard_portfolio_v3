export type SkillTypes = {
    title: string,
    skill_description: string,
    slug: string,
    features: {
        title: string,
        content: string
    },
    skill_filters: string[],
    skill_image: {
        image: string,
        alt: string
    }
}