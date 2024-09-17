import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoLogoCodepen } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
type LinkProps = { divClass?: string, linkClass?: String}
export default function SocialConnections({divClass, linkClass}: LinkProps) {

   return(
      <div className={divClass}>
         <Link className={`${linkClass}`} href='https://www.linkedin.com/in/bernardwebpro' target="_blank"><IoLogoLinkedin />
         </Link>
         <Link className={`${linkClass}`} href='https://www.github.com/BernardProCode17' target="_blank"><IoLogoGithub /></Link>
         <Link className={`${linkClass}`} href='https://codepen.io/Christian-7' target="_blank"><IoLogoCodepen /></Link>
         <Link className={`${linkClass}`} href='mailto: bernardanthonyclarke1292@gmail.com' target="_blank"><MdOutlineEmail /></Link>
      </div>
   )
}