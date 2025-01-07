import Image from "next/image"
import logo from '../../assets/logo_mobile.svg'
import Link from 'next/link'
import MenuButton from "../minor components/MenuButton"
import MenuNavigation from "../minor components/MenuNavigation"

export default function Header() {
    return (
        <header className="header">

            {/* Logo */}
            <div className="header_logo">
                <Link href="/">
                    <Image src={logo} alt="Bernard Clarke logo -'Letter B in curly braces" priority={true}/>
                </Link>
            </div>

            {/* Menu */}
            <div className="header_menu">
                <MenuButton/>
                <MenuNavigation/>
            </div>
        </header>
    )
}