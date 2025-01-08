"use client"

import React, {useEffect, useState} from "react";
import Jslottie from "@/assets/javascript_lottie.json";
import Lottie from "react-lottie";

export default function BannerLottie() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: Jslottie,
        renderSettings: {preserveAspectRatio: 'xMidYMid slice'}
    };

    if (!isClient) return null;
    return (
        <div className="home_header-lottie">
            <Lottie options={options} width={'100%'} isClickToPauseDisabled={true}/>
        </div>
    );
}