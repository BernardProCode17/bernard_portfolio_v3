import Image from "next/image"
import furniro from "../../assets/furniro_screenshot.png"
import library from "../../assets/library_theater_screenshot.png"
import js_game from "../../assets/js_game_screenshot.png"
export default function HomeProjectsDisplay() {

    return (
        <div className="home_project_display addDisplay">
            <Image src={furniro} alt="screen shot of furniro web project" width={100} height={100} />
            <Image src={library} alt="screen shot of library theater web project" width={100} height={100} />
            <Image src={js_game} alt="screen shot of js game project" width={100} height={100} />
        </div>
    )
}