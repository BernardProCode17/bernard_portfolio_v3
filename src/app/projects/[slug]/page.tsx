import { client } from '@/sanity/lib/client'
import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { fetchProjectBySlug } from '@/functions/fetchFunctions';
import { IoLogoGithub, IoGlobeOutline } from "react-icons/io5";
import { Key } from 'react';
import HeadingSection from '@/components/minor components/HeadingSection';
import ProjectLink from '@/components/minor components/Link';
import ContentArticle from '@/components/project_page-component/ContentArticle';
import Connection from '@/components/minor components/Connection';


export default async function Project({ params }: { params: { slug: string } }) {


    const projectFetchParams = await client.fetch(fetchProjectBySlug(params), { params }, { cache: 'no-store' });
    const { title, short_description, long_description, features, challenges_solutions, reflection, project_image, project_image_alt, project_links } = projectFetchParams[0];
    const contentArray = [long_description, features, challenges_solutions, reflection];

    const linkSVG = (link: string) => {
        switch (link) {
            case project_links[0]:
                return <IoGlobeOutline />;

            case project_links[1]:
                return <IoLogoGithub />;

            default:
                return null;
        }
    }

    if (!projectFetchParams) {
        return <div>Loading...</div>; // or any other fallback UI
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
                        <Image src={project_image && urlFor(project_image).url()} alt={project_image_alt} width={200} height={200} className="project_image" />

                        <div className="project_links">

                            {project_links.map((link: string, index: Key) => (
                                <ProjectLink key={index} href={link} SVG={linkSVG(link)} />))}
                        </div>

                    </div>
                </div>

                <div className="project_container-body">
                    {/* Project Article component */}
                    {contentArray.map((content: { title: string, content: string }, index: Key) => (
                        console.log(content),
                        <ContentArticle key={index} title={content && content.title} content={content && content.content} />
                    ))}
                </div>

            </div>

                <div className="project_connection">
                    <Connection />
                </div>
        </main>
    )
};