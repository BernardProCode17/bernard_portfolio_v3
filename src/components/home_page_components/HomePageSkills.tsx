import Link from "next/link";
import { CommunicationSkillsLottie, DevelopmentSkillsLottie, DevelopmentToolsLottie, SkillsLottie } from "../minor components/lotties/lottie";
import PageSections from "../minor components/PageSections";

export default function HomePageSkills() {

    return (
        <PageSections cssClass="home_skills">
            <h2 className="home_skills-title">Skills</h2>
            <p className="home_skills-subtitleContent">(Unclear Sentence) <br/>  <br/> Skills I've learned for different parts of web development, including web basics, UI/UX design, project management, performance and optimization, databases, APIs, and servers-file system interaction with PHP and Node.js</p>

            <div className="home_skills-content">
                {/* <SkillsLottie /> */}

                <div className="article_container">
                    <article className="home_skills-article">
                        <DevelopmentSkillsLottie/>
                        <h3 className="article_title">Development Skills</h3>
                        <p className="article_content">Development skills include, HTML, CSS and JavaScript, React, and
                            Next.js. In addition to familiar skills such as Typescript, PHP and CSS framework such as
                            Sass and Tailwind.</p>
                    </article>

                    <article className="home_skills-article">
                        <CommunicationSkillsLottie/>
                        <h3 className="article_title">Connection Skills</h3>
                        <p className="article_content">With communication, collaboration, team work and leading a team.
                            I have the skills to connect with the other, work collaboratively and solve problems for the
                            better of the project.</p>
                    </article>

                    <article className="home_skills-article">
                        <DevelopmentToolsLottie/>
                        <h3 className="article_title">Tools</h3>
                        <p className="article_content">Tools used for work and development includes, Git/GitHub, Figma
                            design, Firefox browser, VS Code and web Storm. I also have skill setting hosting and
                            transferring with FTP transfer and deployment with Vercel systems. </p>
                    </article>
                </div>

            </div>

            <Link href="/skills" className="home_skills-link link">View Skills</Link>
        </PageSections>
    )
}