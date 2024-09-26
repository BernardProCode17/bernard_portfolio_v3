import PageSections from "../minor components/PageSections";
import Profile from "../minor components/Profile";
import ProfilePhoto1 from "../../assets/image_01.webp";
import SocialConnections from "../minor components/SocialConnections";
import ProjectLink from "@/components/minor components/Link";

export default function HomeAbout() {
    const text: string = "Learn more about my skills on the about page.";
    return (
        <PageSections cssClass="home_about">
            <h2 className="home_about-title">About</h2>
            <div className="home_about_content_container">

                {/* Home Page About Me Information */}
                <div className="home_about_content">
                    <p className="home_about_text"><span className="home_about_text-span">Hey, There!</span> I'm Bernard
                        Clarke, a Front-End Web
                        Developer graduated from <abbr title="British Columbia Institute of Technology">BCIT.</abbr></p>
                    <p className="home_about_text">I focus on JavaScript and the React ecosystem. I enjoy programming
                        and learning new programming <b>Things</b>, and building project. </p>
                    <ProjectLink text={text} href={'/about'} cssClass={"home_about_text-em"}/>

                </div>

                {/* Home page About me Profile */}
                <div className="home_about_profile">


                    {/* Profile component */}
                    <Profile cssClass="home_about_profile-com" profilePhoto={ProfilePhoto1}
                             subtitle="Front-End Web Developer"/>

                    {/* Social Connections and Contact Button */}
                    <SocialConnections />
                    <ProjectLink href={"/contact"} cssClass={"home_about_button link"} text="Contact"/>
                </div>
            </div>
        </PageSections>
    );
}