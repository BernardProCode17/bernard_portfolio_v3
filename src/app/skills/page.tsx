import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { fetchSkillsQuery } from "@/functions/fetchFunctions";
import SkillCard from '@/components/skillsPage/skillCard';
import { SkillTypes } from '@/types/skillTypes';

export default async function Skills() {

    const option: { cache: RequestCache } = { cache: 'no-store' };
    const fetchResult: any = await client.fetch(fetchSkillsQuery, {}, option);

    return (
        <>
            {/* Filter button for different skills  */}
            <section className="skills_page-body">
                <h2>Developmental Skills</h2>

                <span className='link_indicator'>Click the card to view more information</span>
                <div className="skills_container">

                    {fetchResult.map((skill: SkillTypes, index: any) => (
                        <Link key={index} href={`/skills/${skill.slug}`}>
                            <SkillCard skill={skill} />
                        </Link>
                    ))}

                </div>
            </section>

        </>
    )
}