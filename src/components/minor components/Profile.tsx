import Image, { StaticImageData } from 'next/image'

type cssClass = {
    cssClass: string,
    profilePhoto: StaticImageData,
    subtitle: string
    statment?: string
}
export default function Profile({ cssClass, profilePhoto, subtitle, statment }: cssClass) {

    return (
        <div className={`${cssClass} profile_container`}>
            <Image src={profilePhoto} alt="profile picture of Bernard smiling with a blue hat and gray hoodie" width={200} height={200} />

            <div className="profile_text">
                <h5>Bernard Clarke</h5>
                <span>{subtitle}</span>
                <p>{statment}</p>
            </div>
        </div>
    )
}