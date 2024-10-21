import PageSections from "../minor components/PageSections";
import Profile from "../minor components/Profile";
import SocialConnections from "../minor components/SocialConnections";
import ProjectLink from "@/components/minor components/Link";


type pageDataAbout = {
    Title: string,
    Content: string[],
    Image:{URL: string, altText: string}
}

export default function HomeAbout({pageData}: { pageData: pageDataAbout }) {

    const {Title, Content, Image} = pageData

    return (
        <PageSections cssClass="home_about">
            <h2 className="home_about-title">{Title}</h2>
            <div className="home_about_content_container">

                {/* Home Page About Me Information */}
                <div className="home_about_content">
                    <p className="home_about_text">
                        <span className="home_about_text-span">{Content[0]}</span>
                    </p>
                    <p className="home_about_text">{Content[1]}</p>
                    <p className="home_about_text">{Content[2]}</p>
                    <ProjectLink text={Content[3]} href={'/about'} cssClass={"home_about_text-em"}/>

                </div>

                {/* Home page About me Profile */}
                <div className="home_about_profile">

                    {/* Profile component */}
                    <Profile cssClass="home_about_profile-com" profilePhoto={Image}
                             subtitle="Front-End Web Developer"/>

                    {/* Social Connections and Contact Button */}
                    <SocialConnections divClass1="social_connection_container" divClass2="social_connection"
                                       linkClass='home_about_social-links'/>
                    <ProjectLink href={"/contact"} cssClass={"home_about_button link"} text="Contact"/>
                </div>

            </div>
        </PageSections>
    );
}