import Link from 'next/link';
import {fetchFunction, fetchPageContent_skill, fetchSkillsQuery} from "@/functions/fetchFunctions";
import SkillCard from '@/components/skillsPage/skillCard';
import {SkillTypes} from '@/types/skillTypes';
import {Metadata} from "next/types";

export const metadata: Metadata = {
    title: "Skills | Bernard Clarke | Front-end Javascript React developer",
    description: "Discover the diverse skill set of Bernard Clarke, a front-end JavaScript React developer based in Vancouver, BC. Explore expertise in React, TypeScript, Next.js, and more. Learn how these skills contribute to creating responsive and accessible web applications.",
}

export default async function Skills() {

    type fetchResultType = {
        [x: string]: any;
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
    const {FilterSection, UXIndicator} = SkillPageContent[0];


    return (
        <>
            {/* Filter button for different skills  */}
            <section className="skills_page-body">

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