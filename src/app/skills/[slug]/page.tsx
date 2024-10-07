import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Image } from "next-sanity/image";
import { fetchSkillBySlug } from "@/functions/fetchFunctions";
import BackButton from "@/components/minor components/BackButton";


export default async function SkillPage({ params }: { params: { slug: string } }) {

    const projectFetchParams = await client.fetch(fetchSkillBySlug(params), { params }, { cache: 'no-store' });
    const { title, skill_description, features, skill_image, ...rest } = projectFetchParams[0];

    const imageUrl = skill_image?.image ? urlFor(skill_image.image).url() : '';
    
    return (
        <section className="section skill_page_body">

            <div className="skill_heading">
                <Image src={imageUrl} alt={skill_image.alt} width={200} height={200} className="skill_logo" />
                <h3 className="skill_title">{title}</h3>
            </div>

            <BackButton cssclass={'skill_page_back_button'} />

            <div className="skill_content">
                <h3 className="skill_concepts">{features.title}</h3>
                <p className="skill_description">{skill_description}</p>
                <ul className="skill_concept_list">
                    {features.content.map((feature: string[], index: any) => (
                        <li className="skill_concept_item" key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}