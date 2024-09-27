import Link from "next/link";
import { ReactNode } from "react";

type linkProps = {
    text?: string,
    href: string,
    cssClass?: string,
    SVG?: ReactNode,
    onClick?: () => void
}
export default function ProjectLink({text, href, cssClass, SVG, onClick}: linkProps) {
    return (
        <Link href={href} className={cssClass} onClick={onClick}>{text ? text : SVG}</Link>
    );
}