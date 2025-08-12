import FooterNavigation from "../minor components/FooterNavigation";
import SocialConnections from "../minor components/SocialConnections";
import ResponsiveLogo from "@/components/minor components/ResponsiveLogo";


export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer_sections_container">

                {/* Logo */}
                <div className="footer_logo"><ResponsiveLogo/></div>

                {/* Navigation */}
                <FooterNavigation/>

                {/* social connections */}
                <SocialConnections divClass1="social_connection_container" divClass2="social_connection"
                                   linkClass="footer_social_links"/>

            </div>

            {/*footer copy */}
            <div className="footer_details">
                <p className="footer_details-made-with">Made with
                    <em className="footer_details-made-tech">#Next.Js #TypeScript #Code</em>
                </p>
                <span className="footer_details-year"><strong className="footer_details-author" id="author">Bernard Clarke {new Date().getFullYear()}</strong> </span>
            </div>
        </footer>
    )
}