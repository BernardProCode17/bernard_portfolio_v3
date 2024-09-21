import Image, {StaticImageData} from 'next/image'

type cssClass = {
    cssClass: string,
    profilePhoto: StaticImageData,
    subtitle: string
    statement?: string
}
export default function Profile({cssClass, profilePhoto, subtitle, statement}: cssClass) {

    return (
        <div className={`${cssClass} profile_container`}>
            <div className="home_about_profile_image_container">
                <Image className="home_about_profile_image" src={profilePhoto}
                       alt="profile picture of Bernard smiling with a blue hat and gray hoodie" width={300} height={300}
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