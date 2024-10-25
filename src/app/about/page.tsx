import Image from 'next/image'
import {urlFor} from "@/sanity/lib/image";
import {fetchPageContent_about, fetchFunction} from "@/functions/fetchFunctions";
import HeadingSection from "@/components/minor components/HeadingSection";
import Connection from '@/components/minor components/Connection';

export default async function About() {

    //Fetch About Page Content
    const aboutPageResult = await fetchFunction(fetchPageContent_about)
    const {profile, AboutMe, Interest, ProfileImage} = aboutPageResult[0]

    //Profile Image
    const imgSrc = ProfileImage.image_url && urlFor(ProfileImage.image_url).url()

    return (
        <main>
            
            <div className="about_wrapper">

                <HeadingSection cssClass="about_page-heading">
                    <Image src={imgSrc} alt="Bernard Clarke profile photo" width={200} height={200} className="about_page_profile_photo" />

                    <h1 className='about_heading-title'>{profile.name}</h1>
                    <p className='about_heading-subtitle'>{profile.Content.text}</p>
                    <p className='about_heading-statement'><em>{profile.Content.subContent}</em></p>
                </HeadingSection>

                <div className="about_body">

                    <section className='section about_section'>
                        <h3 className='about_section-title'>{AboutMe.name}</h3>
                        <p className='about_section-content'>{AboutMe.Content}</p>
                    </section>

                    <section className='section about_section'>
                        <h3 className='about_section-title'>{Interest.name}</h3>
                        <p className='about_section-content'>{Interest.Content}</p>
                    </section>

                </div>

            </div>
            {/* Connection */}
            <Connection />
        </main>

    )
}