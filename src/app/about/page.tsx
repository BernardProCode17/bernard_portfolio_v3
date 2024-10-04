import Image from 'next/image'
import HeadingSection from "@/components/minor components/HeadingSection";
import profilePhoto from '@/assets/image_extra.webp'
import Connection from '@/components/minor components/Connection';

export default function About() {

    return (
        <main>
            
            <div className="about_wrapper">

                <HeadingSection cssClass="about_page-heading">
                    <Image src={profilePhoto} alt="Bernard Clarke profile photo" width={200} height={200} className="about_page_profile_photo" />

                    <h1 className='about_heading-title'>Bernard Clarke</h1>
                    <p className='about_heading-subtitle'>Front-End Developer</p>
                    <p className='about_heading-statement'><em>Aspiring Full Stack Developer</em></p>
                </HeadingSection>

                <div className="about_body">
                    <section className='section about_section'>
                        <h3 className='about_section-title'>About me</h3>
                        <p className='about_section-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate dolores architecto iure doloribus omnis sunt alias ipsam necessitatibus saepe nostrum eius sapiente illo atque perferendis, soluta rerum adipisci quidem accusamus, molestias consectetur maiores! Quisquam exercitationem assumenda, voluptatum nam sint ut minima veritatis sequi fugit laudantium delectus eum aut quos?</p>
                    </section>

                    <section className='section about_section'>
                        <h3 className='about_section-title'>Interest</h3>
                        <p className='about_section-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate dolores architecto iure doloribus omnis sunt alias ipsam necessitatibus saepe nostrum eius sapiente illo atque perferendis, soluta rerum adipisci quidem accusamus, molestias consectetur maiores! Quisquam exercitationem assumenda, voluptatum nam sint ut minima veritatis sequi fugit laudantium delectus eum aut quos?</p>
                    </section>
                </div>

            </div>
            {/* Connection */}
            <Connection />
        </main>

    )
}