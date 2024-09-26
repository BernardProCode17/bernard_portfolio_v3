import Image from "next/image";
import logo from '../../assets/logo_mobile.svg'
import FooterNavigation from "../minor components/FooterNavigation";
import SocialConnections from "../minor components/SocialConnections";
import { Span } from "next/dist/trace";


export default function Footer() {
    return (
        <footer className="footer">

            {/* Logo */}
            <div className="footer_logo-container">
                <Image src={logo} alt="Bernard Clarke logo -'Letter B in curly braces" className="footer_logo" />
            </div>

            {/* Navigation */}
            <FooterNavigation />

            {/* social connections */}
            <SocialConnections divClass1="social_connection_container" divClass2="social_connection" linkClass="social_connection_link"/>

            {/* footer copy */}
            <div className="footer_details">
                <strong className="footer_details-author" id="author">Bernard Clarke</strong>
                <p className="footer_details-made-with">Made with
                    <em className="footer_details-made-tech">#Next.Js #TypeScript #Code</em>
                </p>
                <span className="footer_details-year">&copy; 2024</span>
            </div>
        </footer>
    )
}