import Connection from "@/components/minor components/Connection";
import { Metadata } from "next/types";
import ContactForm from "@/components/contact_page_components/ContactForm";

export const metadata: Metadata = {
    title: "Contact | Bernard Clarke | Front-end Javascript React developer",
    description: "Get in touch with Bernard Clarke, a front-end JavaScript React developer based in Vancouver, BC. Reach out for inquiries, collaborations, or to learn more about his expertise in creating responsive and accessible web applications."
}

export default function Contact() {
    return (
        <div className="contact_page-body">
            {/* Form Component */}
            <ContactForm />

            {/* Connection */}
            <Connection />
        </div>
    )
}