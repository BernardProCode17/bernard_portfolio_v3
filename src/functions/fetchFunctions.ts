export const fetchProjectQuery: string = `*[_type == 'projects'] {
  title,
  'slug':slug.current,
  short_description,
  'features':feature.content,
  'long_description':{'title': long_description.title, 'content':long_description.content[0].children[0].text},
  'challenges_colutions': {'title': challenges_solutions.title, 'content':challenges_solutions.content[0].children[0].text},
  'reflection':{'title': reflection.title, 'content':reflection.content[0].children[0].text},
  'project_image': project_image.asset._ref,
  'project_image_alt': project_image.alt,
  project_links
}`

export const fetchProjectBySlug = (params: { slug: string }): string => `*[_type == 'projects' && slug.current == '${params.slug}'] {
  title,
  'slug':slug.current,
  short_description,
  'features':feature.content,
  'long_description':{'title': long_description.title, 'content':long_description.content[0].children[0].text},
  'challenges_colutions': {'title': challenges_solutions.title, 'content':challenges_solutions.content[0].children[0].text},
  'reflection':{'title': reflection.title, 'content':reflection.content[0].children[0].text},
  'project_image': project_image.asset._ref,
  'project_image_alt': project_image.alt,
  project_links
}`
