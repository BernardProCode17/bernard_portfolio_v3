import {urlFor} from "@/sanity/lib/image";
import {Image} from "next-sanity/image";
import {fetchFunction, fetchProjectBySlug} from '@/functions/fetchFunctions';
import {IoGlobeOutline, IoLogoGithub} from "react-icons/io5";
import {Key} from 'react';
import HeadingSection from '@/components/minor components/HeadingSection';
import ProjectLink from '@/components/minor components/Link';
import ContentArticle from '@/components/project_page-component/ContentArticle';
import Connection from '@/components/minor components/Connection';
import {Metadata} from "next/types";

type slugProps = {
    slug: string
}
// Fetching data for Metadata
export const generateMetadata = async ({params}: { params: Promise<slugProps> }): Promise<Metadata> => {
    const slug = (await params).slug;
    const projectFetchParams = await fetchFunction(fetchProjectBySlug({slug}));
    const {title, long_description} = projectFetchParams[0];
    return {
        title: `${title} | Bernard Clarke | Front-end Javascript React developer`,
        description: long_description.content,
    };
};

export default async function Project({params}: { params: Promise<slugProps> }) {

    // console.log('params Props', (await params).slug)
    const slug = (await params).slug;
    const projectFetchParams = await fetchFunction(fetchProjectBySlug({slug}));

    const {
        title,
        short_description,
        long_description,
        features,
        challenges_solutions,
        reflection,
        project_image,
        project_image_alt,
        project_links
    } = projectFetchParams[0];

    const contentArray = [long_description, features, challenges_solutions, reflection];

    const linkSVG = (link: string) => {
        switch (link) {
            case project_links[0]:
                return <IoGlobeOutline/>;

            case project_links[1]:
                return <IoLogoGithub/>;

            default:
                return null;
        }
    }

    return (
        <main>
            <div className="project_container">

                <div className="project_container-head">
                    <HeadingSection cssClass="project_heading">
                        <h1 className='heading_title'>{title}</h1>
                        <p className='heading_content'>{short_description}</p>
                    </HeadingSection>

                    <div className="project_image_link-container">
                        <Image src={project_image && urlFor(project_image).url()} alt={project_image_alt} width={200}
                               height={200} className="project_image"/>

                        <div className="project_links">

                            {project_links.map((link: string, index: Key) => (
                                <ProjectLink key={index} href={link} SVG={linkSVG(link)}/>))}
                        </div>

                    </div>
                </div>

                <div className="project_container-body">
                    {/* Project Article component */}
                    {contentArray.map((content: { title: string, content: string }, index: Key) => (
                        <ContentArticle key={index} title={content && content.title}
                                        content={content && content.content}/>
                    ))}
                </div>

            </div>

            {/*                Links to other project from the  **PROJECT PAGE**    */}
            <Connection/>
        </main>
    )
};