import Link from "next/link";
import { CommunicationSkillsLottie, DevelopmentSkillsLottie, DevelopmentToolsLottie, SkillsLottie } from "../minor components/lotties/lottie";
import PageSections from "../minor components/PageSections";

export default function HomePageSkills() {

    return (
        <PageSections cssClass="home_skills">
            <h2 className="home_skills-title">Skills</h2>
            <p className="home_skills-subtitleContent">Skills include web basics, TypeScript, UI/UX design, databases, APIs, back-end tech, optimization and more</p>

            <div className="home_skills-content">
                {/* <SkillsLottie /> */}

                <div className="article_container">
                    <article className="home_skills-article">
                        <DevelopmentSkillsLottie/>
                        <h3 className="article_title">Development Skills</h3>
                        <p className="article_content">Development skills include, HTML, CSS, JavaScript, React, Next.js and more. In addition I&apos;m familiar skills such as Typescript, PHP and CSS framework such as
                            Sass and Tailwind.</p>
                    </article>

                    <article className="home_skills-article">
                        <CommunicationSkillsLottie/>
                        <h3 className="article_title">Connection Skills</h3>
                        <p className="article_content">Communication, collaboration, team work and leading a team are also among my skills.
                            I connect with the others easily, work collaboratively and solve problems for the
                            better of the team and the project.</p>
                    </article>

                    <article className="home_skills-article">
                        <DevelopmentToolsLottie/>
                        <h3 className="article_title">Tools</h3>
                        <p className="article_content">Tools used for work and development includes, Git/GitHub, Figma
                            design, Firefox browser, VS Code, Web Storm, FTP for file transfer, hosting and more.</p>
                    </article>
                </div>

            </div>

            <Link href="/skills" className="home_skills-link link">View Skills</Link>
        </PageSections>
    )
}