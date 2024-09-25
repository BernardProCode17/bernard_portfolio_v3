export const fetchProjectQuery: string = `*[_type == 'projects'] {
    title,
    'slug':slug.current,
    short_des,
    'long_des': long_des[0].children[0].text,
    feature,
    'challenges_solutions': challenges_solutions[0].children[0].text,
    'reflection': reflection[0].children[0].text,
    'project_image': project_image.asset._ref,
    'project_image_alt': project_image.alt,
    project_links
}`
