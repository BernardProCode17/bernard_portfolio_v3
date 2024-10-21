import {urlFor} from "@/sanity/lib/image";
import {Image} from "next-sanity/image";

type ProfileProps = {
    cssClass: string,
    subtitle: string
    statement?: string
    profilePhoto: { URL: string, altText: string }
}
export default function Profile({cssClass, profilePhoto, subtitle, statement}: ProfileProps) {
    console.log(profilePhoto.URL && urlFor(profilePhoto.URL).url())
    return (
        <div className={`${cssClass} profile_container`}>
            <div className="home_about_profile_image_container">
                <Image className="home_about_profile_image" src={profilePhoto.URL && urlFor(profilePhoto.URL).url()}
                       alt={profilePhoto.altText} width={200} height={200}
                       loading={"lazy"} quality={100}/>
            </div>

            <div className="profile_text">
                <h3>Bernard Clarke</h3>
                <p>{subtitle}</p>
                {statement && <p>{statement}</p>}

            </div>
        </div>
    )
}