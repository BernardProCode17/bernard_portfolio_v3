import HeadingSection from "@/components/minor components/HeadingSection";

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <main className="contact_page">
            
            <HeadingSection cssClass="contact_page-heading">
                <h1 className="contact_page-title">Contact</h1>
                <p className="contact_page-statement">Contact Me To Work Together</p>
            </HeadingSection>

            {children}
        </main >
    )
}