'use client';
import {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import DesktopLogo from "../../assets/Portfolio Logo - Bernard.svg";
import MobileLogo from "../../assets/Portfolio Logo - Be.svg";

const logoDesktop = DesktopLogo;
const logoMobile = MobileLogo;

export default function ResponsiveLogo() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Link href="/">
            <Image
                src={isMobile ? logoMobile : logoDesktop}
                alt={isMobile ? "Mobile Logo - the word Be" : "Desktop Logo - the name Bernard "}
                priority={true}
                width={isMobile ? 120 : 500}
                height={40}
            />
        </Link>
    );
}