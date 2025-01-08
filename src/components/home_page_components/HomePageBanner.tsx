import HeadingSection from "@/components/minor components/HeadingSection";
import Link from "next/link";

type pageDataBanner = {
    H1: string,
    SubTitle: string,
    Statement: string,
    Links: string[]
}

export default function HomePageBanner({pageData}: { pageData: pageDataBanner }) {

    const {H1, SubTitle, Statement, Links} = pageData;

    return (
        <>
            <HeadingSection cssClass="home_header">
                <div className="home_header-intro">
                    <h1 className="header_intro-title">{H1}</h1>
                    <h2 className="header_intro-subtitle">{SubTitle}</h2>
                    <p className="header_intro-content">{Statement}</p>
                </div>

                {/* Jesus */}
                {/*<BannerLottie/>*/}

                <div className="home_header-links">
                    <Link href='/projects' className="home_header_links-projects">{Links[0]}</Link>
                    <Link href='/skills' className="home_header_links-skills">{Links[1]}</Link>
                </div>

            </HeadingSection></>
    );
}