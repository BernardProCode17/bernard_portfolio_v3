import HeadingSection from "@/components/minor components/HeadingSection";
import Link from 'next/link';
import Connection from '@/components/minor components/Connection';
import SkillCard from '@/components/skillsPage/skillCard';

export default function Skills() {

    return (
        <main>
            <HeadingSection cssClass="skills_page-heading">
                <h1>Skills</h1>
                <p>Technical, Communication and Collabrative skills</p>
            </HeadingSection>

            {/* Filter button for different skills  */}

            <section className="skills_page-body">
                <h2>Developmental Skills</h2>

                <span className='link_indicator'>Click the card to view more information</span>

                <div className="skills_container">

                    {/* Map over the skills to display the cards */}

                    <Link href={`/skills/skill`}>
                    <SkillCard />
                    </Link>

                </div>
            </section>

            {/* Connection */}
            <Connection/>

        </main>
    )
}