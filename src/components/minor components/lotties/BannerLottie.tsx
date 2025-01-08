"use client"

import React, {useEffect, useState} from "react";
import Jslottie from "@/assets/javascript_lottie.json";
import Lottie from "react-lottie";

export default function BannerLottie() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: Jslottie,
        renderSettings: {preserveAspectRatio: 'xMidYMid slice'}
    };

    return (
        <div className="home_header-lottie">
            {isClient && (
                <Lottie
                    options={options}
                    width={'100%'}
                    isClickToPauseDisabled={true}
                />
            )}
        </div>
    );
}