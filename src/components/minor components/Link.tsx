import Link from "next/link";

type linkProps = {
    text: string,
    href: string,
    cssClass?: string
    onClick?: () => void
}
export default function ProjectLink({text, href, cssClass, onClick}: linkProps) {
    return (
        <Link href={href} className={cssClass} onClick={onClick}>{text}</Link>
    );
}