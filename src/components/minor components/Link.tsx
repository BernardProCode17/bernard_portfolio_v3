import Link from "next/link";

type linkProps = {
    text: string,
    href: string,
    cssClass?: string
}
export default function ProjectLink({text, href, cssClass}: linkProps) {
    return (
<Link href={href} className={cssClass}>{text}</Link>
    );
}