import Link from 'next/link';
import {fetchFunction, fetchPageContent_skill, fetchSkillsQuery} from "@/functions/fetchFunctions";
import SkillCard from '@/components/skillsPage/skillCard';
import {SkillTypes} from '@/types/skillTypes';

export default async function Skills() {

    type fetchResultType = {
        title: string,
        content: string
    }
    const fetchResult: fetchResultType = await fetchFunction(fetchSkillsQuery);

    type SkillPageContentType = {
        BannerSection: {
            Title: string,
            Content: string
        },
        FilterSection: string[],
        UXIndicator: string
    }[];
    const SkillPageContent: SkillPageContentType = await fetchFunction(fetchPageContent_skill);
    const {FilterSection, UXIndicator, ...rest} = SkillPageContent[0];
    console.log(fetchResult)


    return (
        <>
            {/* Filter button for different skills  */}
            <section className="skills_page-body">
                <h2>Developmental Skills</h2>

                <span className='link_indicator'>{UXIndicator}</span>
                <div className="skills_container">

                    {fetchResult.map((skill: SkillTypes, index: any) => (
                        <Link key={index} href={`/skills/${skill.slug}`}>
                            <SkillCard skill={skill}/>
                        </Link>
                    ))}

                </div>
            </section>

        </>
    )
}