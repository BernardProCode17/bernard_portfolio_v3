import Link from "next/link";
import {
    CommunicationSkillsLottie,
    DevelopmentSkillsLottie,
    DevelopmentToolsLottie
} from "../minor components/lotties/lottie";
import PageSections from "../minor components/PageSections";

type PageDataSkills = {
    SectionBanner: {
        Title: string,
        content: string
    },
    Link: string,
    Filter: [
        {
            title: string,
            Content: string
        },
        {
            title: string,
            Content: string
        },
        {
            title: string,
            Content: string
        }
    ]
}
export default function HomePageSkills({pageData}: { pageData: PageDataSkills }) {

    const {SectionBanner, Filter, Link: SkillLink} = pageData

     return (
        <PageSections cssClass="home_skills">
            <h2 className="home_skills-title">{SectionBanner.Title}</h2>
            <p className="home_skills-subtitleContent">{SectionBanner.content}</p>

            <div className="home_skills-content">
                {/* <SkillsLottie /> */}

                <div className="article_container">
                    <article className="home_skills-article">
                        <DevelopmentSkillsLottie/>
                        <h3 className="article_title">{Filter[0].title}</h3>
                        <p className="article_content">{Filter[0].Content}</p>
                    </article>

                    <article className="home_skills-article">
                        <CommunicationSkillsLottie/>
                        <h3 className="article_title">{Filter[1].title}</h3>
                        <p className="article_content">{Filter[1].Content}</p>
                    </article>

                    <article className="home_skills-article">
                        <DevelopmentToolsLottie/>
                        <h3 className="article_title">{Filter[2].title}</h3>
                        <p className="article_content">{Filter[2].Content}</p>
                    </article>
                </div>

            </div>

            <Link href="/skills" className="home_skills-link link">{SkillLink}</Link>
        </PageSections>
    )
}