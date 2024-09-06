import { ReactNode } from "react";

type sectionProps = {children: ReactNode; cssClass?: string}

export default function PageSections({ children, cssClass }: sectionProps) {
    return (
        <section className={`section ${cssClass}`}>
            {children}
        </section>
    )
}