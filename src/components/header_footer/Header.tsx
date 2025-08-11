import MenuButton from "../minor components/MenuButton"
import MenuNavigation from "../minor components/MenuNavigation"
import ResponsiveLogo from "@/components/minor components/ResponsiveLogo";

export default function Header() {
    return (
        <header className="header">

            {/* Logo */}
            <div className="header_logo">
                <ResponsiveLogo/>
            </div>

            {/* Menu */}
            <div className="header_menu">
                <MenuButton/>
                <MenuNavigation/>
            </div>
        </header>
    )
}