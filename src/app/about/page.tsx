import Image from 'next/image'
import {urlFor} from "@/sanity/lib/image";
import {fetchFunction, fetchPageContent_about} from "@/functions/fetchFunctions";
import HeadingSection from "@/components/minor components/HeadingSection";
import Connection from '@/components/minor components/Connection';
import {Metadata} from "next/types";
import React, {Key} from "react";

export const metadata: Metadata = {
    title: "About | Bernard Clarke | Front-end Javascript React developer",
    description: 'Learn more about Bernard Clarke, a front-end JavaScript React developer based in Vancouver, BC. Discover his background, interests, and expertise in creating responsive and accessible web applications.'
}

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
                    <Image src={imgSrc} alt="Bernard Clarke profile photo" width={200} height={200}
                           className="about_page_profile_photo"/>

                    <h1 className='about_heading-title'>{profile.name}</h1>
                    <p className='about_heading-subtitle'>{profile.Content.text}</p>
                    <p className='about_heading-statement'><em>{profile.Content.subContent}</em></p>
                </HeadingSection>

                <div className="about_body">
                    <section className='section about_section'>
                        <h3 className='about_section-title'>{AboutMe.name}</h3>

                        {AboutMe.Content.map((content: { text: string, subContent: string }, index: Key) => (
                            <React.Fragment key={index}>
                                <p className='about_section-content'>{content.text}</p>
                                {content.subContent?.trim() && (
                                    <p className='about_section-content'>{content.subContent}</p>)}
                            </React.Fragment>

                        ))}
                    </section>

                    <section className='section about_section'>
                        <h3 className='about_section-title'>{Interest.name}</h3>
                        {Interest.Content.map((content: { text: string, subContent: string }, index: Key) => (
                            <React.Fragment key={index}>
                                <p className='about_section-content'>{content.text}</p>
                                <p className='about_section-content'>{content.subContent}</p>
                            </React.Fragment>
                        ))}

                    </section>

                </div>

            </div>
            {/* Connection */
            }
            <Connection/>
        </main>
    )
}