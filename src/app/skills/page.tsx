import Image from 'next/image';
import HeadingSection from "@/components/minor components/HeadingSection";
import mobileLogo from '@/assets/logo_mobile.svg'
import Link from 'next/link';
import Connection from '@/components/minor components/Connection';

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
                        <div className="skill_card">
                            <Image src={mobileLogo} alt='placeholder' width={100} height={100} />
                            <h3>HTML</h3>
                        </div>
                    </Link>

                    <Link href={`/skills/skill`}>
                        <div className="skill_card">
                            <Image src={mobileLogo} alt='placeholder' width={100} height={100} />
                            <h3>HTML</h3>
                        </div>
                    </Link>

                    <Link href={`/skills/skill`}>
                        <div className="skill_card">
                            <Image src={mobileLogo} alt='placeholder' width={100} height={100} />
                            <h3>HTML</h3>
                        </div>
                    </Link>

                </div>
            </section>

            {/* Connection */}
            <Connection/>

        </main>
    )
}