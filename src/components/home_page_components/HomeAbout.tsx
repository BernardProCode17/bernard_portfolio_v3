import PageSections from "../minor components/PageSections";
import Profile from "../minor components/Profile";
import ProfilePhoto1 from "../../assets/image_01.webp";
import SocialConnections from "../minor components/SocialConnections";
import Button from "../minor components/Button";

export default function HomeAbout() {

    return (
        <PageSections cssClass="home_about">
            <h2>About</h2>
            <div className="home_about_content_container">

                {/* Home Page About Me Information */}
                <div className="home_about_content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam praesentium quis neque, laudantium rerum voluptatibus rem amet eveniet consequatur consectetur facere quam. Optio consequatur, cumque laboriosam numquam voluptatibus suscipit alias.</p>
                </div>

                {/* Home page About me Profile */}
                <div className="home_about_profile">
                    <Profile cssClass="home_about_profile-image" profilePhoto={ProfilePhoto1} subtitle="Front-end Developer" />
                    <SocialConnections divClass="home_about_social" linkClass="home_about_social-links" />
                    <Button cssClass="home_about_profile-button" content="Contact" />
                </div>
            </div>
        </PageSections>
    )
}