import { client } from '@/sanity/lib/client'
import { fetchProjectBySlug } from '@/functions/fetchFunctions';
import Head from 'next/head';
import HeadingSection from '@/components/minor components/HeadingSection';

export default async function Project({ params }: { params: { slug: string } }) {


    const option: { cache: string } = { cache: 'no-store' };
    const query = fetchProjectBySlug(params);
    const projectFetchParams = await client.fetch(query, { params }, option);
    const projectData = await projectFetchParams;
    const { title, short_des, long_des, feature, challenges_solutions, reflection, project_image, project_image_alt, project_links } = projectData[0];
    console.log(title);
    return (
        
        <main>

            <HeadingSection cssClass="project_heading">
                <h1>{title}</h1>
                <p>{short_des}</p>
            </HeadingSection>

        </main>
    )
};