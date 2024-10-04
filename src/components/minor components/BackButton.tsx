'use client';

import { useRouter } from "next/navigation";
export default function BackButton({ cssclass }: { cssclass: string }) {
    const router = useRouter();

    return (
        <button onClick={() => router.back()} className={cssclass}>
            Back
        </button>
    )
}

