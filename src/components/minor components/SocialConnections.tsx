import Link from "next/link";
import {IoLogoCodepen, IoLogoGithub, IoLogoLinkedin,} from "react-icons/io5";
import {MdOutlineEmail} from "react-icons/md";

type LinkProps = { divClass1?: string, divClass2?: string, linkClass?: String }
export default function SocialConnections({divClass1, divClass2, linkClass}: LinkProps) {

    return (
        <div className={divClass1}>
            <div className={divClass2}>
                <Link className={linkClass ? `${linkClass}` : 'social_connection_link'} href='https://www.linkedin.com/in/bernardwebpro' target="_blank"><IoLogoLinkedin/></Link>
                <Link className={linkClass ? `${linkClass}` : 'social_connection_link'} href='https://www.github.com/BernardProCode17' target="_blank"><IoLogoGithub/></Link>
                <Link className={linkClass ? `${linkClass}` : 'social_connection_link'} href='https://codepen.io/Christian-7' target="_blank"><IoLogoCodepen/></Link>
                <Link className={linkClass ? `${linkClass}` : 'social_connection_link'} href='mailto: bernardanthonyclarke1292@gmail.com' target="_blank"><MdOutlineEmail/></Link>
            </div>
        </div>
    )
}