import Image from "next/image"
import furniro from "../../assets/furniro_screenshot.png"
import library from "../../assets/library_theater_screenshot.png"
import js_game from "../../assets/js_game_screenshot.png"
import Link from "next/link"
export default function HomeProjectsDisplay() {

    return (
        <div className="home_project_display addDisplay">
            <Link href="/projects/furniro" className="home_project_display-link ">
                <Image src={furniro} alt="screen shot of furniro web project" width={350} height={300} className="home_project_display-image project-furniro" />
            </Link>

            <Link href="/projects/library-theater" className="home_project_display-link ">
                <Image src={library} alt="screen shot of library theater web project" width={350} height={300} className="home_project_display-image project-theater" />
            </Link>

            <Link href="/projects/js-game" className="home_project_display-link project-jsGame">
                <Image src={js_game} alt="screen shot of js game project" width={300} height={300} className="home_project_display-image project-jsGame" />
            </Link>
        </div>
    )
}