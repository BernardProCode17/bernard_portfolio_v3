import {client} from '@/sanity/lib/client';

export async function fetchFunction(query: string): Promise<any> {
    const option: { cache: RequestCache } = {cache: 'no-store'};
    const pageContent: any = await client.fetch(query, {}, option);
    return pageContent
}

export const fetchProjectQuery: string = `*[_type == 'projects'] {
  title,
  'slug':slug.current,
  short_description,
  'features':feature.content,
  'long_description':{'title': long_description.title, 'content':long_description.content[0].children[0].text},
  'challenges_solutions': {'title': challenges_solutions.title, 'content':challenges_solutions.content[0].children[0].text},
  'reflection':{'title': reflection.title, 'content':reflection.content[0].children[0].text},
  'project_image': project_image.asset._ref,
  'project_image_alt': project_image.alt,
  project_links
}`

export const fetchProjectBySlug = (params: {
    slug: string
}): string => `*[_type == 'projects' && slug.current == '${params.slug}'] {
  title,
  'slug':slug.current,
  short_description,
  'features':{'title': feature.title, 'content':feature.content},
  'long_description':{'title': long_description.title, 'content':long_description.content[0].children[0].text},
  'challenges_solutions': {'title': challenges_solutions.title, 'content':challenges_solutions.content[0].children[0].text},
  'reflection':{'title': reflection.title, 'content':reflection.content[0].children[0].text},
  'project_image': project_image.asset._ref,
  'project_image_alt': project_image.alt,
  project_links
}`


export const fetchSkillsQuery: string = `*[_type == 'skills']
{
  title,
  skill_description,
  'slug': slug.current,
  'features': {'title': feature.title, 'content': feature.content},
  skill_filters[0],
  'skill_image': {'image':skill_image.asset._ref,'alt': skill_image.alt}
}`

export const fetchSkillBySlug = (params: {
    slug: string
}): string => `*[_type == 'skills' && slug.current == '${params.slug}']{
  title,
  skill_description,
  'slug': slug.current,
  'features': {'title': feature.title, 'content': feature.content},
  skill_filters[0],
  'skill_image': {'image':skill_image.asset._ref,'alt': skill_image.alt}
}`
export const fetchPageContent_home: string = `*[_type == 'pageContent' && pageTitle == 'Home Page']{  
  'bannerSection': {
    'H1': pageSection[0].content[0].text,
    'SubTitle': pageSection[0].content[1].text,
    'Statement': pageSection[0].content[2].text,
    'Links': [pageSection[0].content[3].text, pageSection[0].content[4].text]
  },
  
  'StatementSection': {
    'Title': pageSection[1].title,
    'Content': pageSection[1].content[]
  },
  
  'projectSection': {
    'Title': pageSection[2].title,
    'Content': pageSection[2].content[0].text,
    'Link': pageSection[2].content[1].text
  },
  
  'skillSection': {
    'SectionBanner': {
      'Title': pageSection[3].title,
      'content': pageSection[3].content[0].text
    },
    'Link': pageSection[3].content[1].text,
    'Filter': [
      {
        'title': pageSection[3].content[2].text,
        'Content': pageSection[3].content[2].subContent
      },
      {
        'title': pageSection[3].content[3].text,
        'Content': pageSection[3].content[3].subContent
      },
      {
        'title': pageSection[3].content[4].text,
        'Content': pageSection[3].content[4].subContent
      }
    ]
  },  
    'aboutSection': {
    'Title': pageSection[4].title,
    'Content': pageSection[4].content[].text,
    'Image': {'URL':image[0].image_url.asset._ref, 'altText': image[0].alt}
  }
  }

`

export const fetchPageContent_projects: string = `*[_type == 'pageContent' && pageTitle == 'Projects Page']
{
  'pageSection': {'Title': pageSection[0].title, 'content':pageSection[0].content[0].text}
}`

export const fetchPageContent_skill: string = `*[_type == 'pageContent' && pageTitle == 'Skills Page']
{
  'BannerSection': {'Title': pageSection[0].content[0].text, 'Content':pageSection[0].content[0].subContent},
  'FilterSection': [pageSection[1].content[].text],
  'UXIndicator': pageSection[2].content[0].text
}`

export const fetchPageContent_about: string = `*[_type == 'pageContent' && pageTitle == 'About Page']
{
  'profile':{'name':pageSection[0].content[0].text, 'Content': pageSection[0].content[1]},
  'AboutMe': {'name': pageSection[1].title, 'Content': pageSection[1].content[0].text},
  'Interest': {'name': pageSection[2].title, 'Content': pageSection[2].content[0].text},
  'ProfileImage':{'image_url': image[0].image_url.asset._ref, 'image_alt': image[0].alt}
}`


export const fetchPageContent_contact: string = `*[_type == 'pageContent' && pageTitle == 'Contact Page']
{
  'PageBanner': {'Title': pageSection[0].title, 'Content': pageSection[0].content[0].text}
}`
// fetch function

