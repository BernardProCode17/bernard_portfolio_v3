import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoCodepen } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
export default function SocialConnections(){

   return(
      <div className="footer_social">
         <Link className="footer_social_links" href='https://www.linkedin.com/in/bernardwebpro' target="_blank"><IoLogoLinkedin />
         </Link>
         <Link className="footer_social_links" href='https://www.github.com/BernardProCode17' target="_blank"><IoLogoGithub /></Link>
         <Link className="footer_social_links" href='https://codepen.io/Christian-7' target="_blank"><IoLogoCodepen /></Link>
         <Link className="footer_social_links" href='mailto: bernardanthonyclarke1292@gmail.com' target="_blank"><MdOutlineEmail /></Link>
      </div>
   )
}