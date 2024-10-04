import HeadingSection from "@/components/minor components/HeadingSection";
import Connection from '@/components/minor components/Connection';

export default function Skilllayout({ children }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <main>
            <HeadingSection cssClass="skills_page-heading">
                <h1>Skills</h1>
                <p>Technical, Communication and team Work are skills I showcase</p>
            </HeadingSection>

            {children}
            
            {/* Connection */}
            <Connection />

        </main>
    )
}