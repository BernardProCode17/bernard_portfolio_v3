import HeadingSection from "@/components/minor components/HeadingSection";
import {fetchFunction, fetchPageContent_contact} from "@/functions/fetchFunctions";

export default async function ContactLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    // Fetching data
    const contactPageData = await fetchFunction(fetchPageContent_contact);
    const {Title, Content} = contactPageData[0].PageBanner;

    return (
        <main className="contact_page">

            <HeadingSection cssClass="contact_page-heading">
                <h1 className="contact_page-title">{Title}</h1>
                <p className="contact_page-statement">{Content}</p>
            </HeadingSection>

            {children}
        </main>
    )
}