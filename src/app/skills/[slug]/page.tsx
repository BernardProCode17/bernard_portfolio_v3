import {urlFor} from "@/sanity/lib/image";
import {Image} from "next-sanity/image";
import {fetchFunction, fetchSkillBySlug} from "@/functions/fetchFunctions";
import {Metadata} from "next/types";

// Fetching data for Metadata
export const generateMetadata = async ({params}: { params: { slug: string } }): Promise<Metadata> => {
    const {slug} = await params;
    const projectFetchParams = await fetchFunction(fetchSkillBySlug({slug}));
    const {title, skill_description} = projectFetchParams[0];
    return {
        title: `${title} | Bernard Clarke | Front-end Javascript React developer`,
        description: skill_description,
    };
};

export default async function SkillPage({params}: { params: { slug: string } }) {

    //Fetch skill data
    const {slug} = await params;
    const skillResults = await fetchFunction(fetchSkillBySlug({slug}));
    const {title, skill_description, features, skill_image, ...rest} = skillResults[0];

    //Image URL
    const imageUrl = skill_image?.image ? urlFor(skill_image.image).url() : '';

    return (
        <section className="section skill_page_body">

            <div className="skill_heading">
                <Image src={imageUrl} alt={skill_image.alt} width={200} height={200} className="skill_logo"/>
                <h3 className="skill_title">{title}</h3>
            </div>

            {/*<BackButton cssclass={'skill_page_back_button'}/>*/}

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