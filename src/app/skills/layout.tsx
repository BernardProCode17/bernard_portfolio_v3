import HeadingSection from "@/components/minor components/HeadingSection";
import Connection from '@/components/minor components/Connection';
import {fetchFunction, fetchPageContent_skill} from "@/functions/fetchFunctions";

export default async function Skilllayout({children}: Readonly<{ children: React.ReactNode; }>) {

    type SkillPageContentType = {
        BannerSection: {
            Title: string,
            Content: string
        },
        FilterSection: string[],
        UXIndicator: string
    }[];
    const SkillPageContent: SkillPageContentType = await fetchFunction(fetchPageContent_skill);
    const {BannerSection, ...rest} = SkillPageContent[0];

    return (
        <main>
            <HeadingSection cssClass="skills_page-heading">
                <h1>{BannerSection.Title}</h1>
                <p>{BannerSection.Content}</p>
            </HeadingSection>

            {children}

            {/* Connection */}
            <Connection/>

        </main>
    )
}