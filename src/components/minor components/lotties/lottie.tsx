'use client'
import React, { useEffect, useState } from 'react';
import projectsLottie from '../../../assets/project_folder_lottie.json'
import skillLottie from '../../../assets/skills_graph_lottie.json'
import developmentSkills from '../../../assets/development_skills_lottie.json'
import communicationSkills from '../../../assets/communication_skill_lottie.json'
import developmentTools from '../../../assets/developement_tools_skills_lottie.json'
import Jslottie from "@/assets/javascript_lottie.json";
import { Lottie } from '@/components/DynamicClientWrapper';


export function BannerLottie() {
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


export function ProjectsLottie() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: projectsLottie,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className={`home_projects-lottie`}>
            <Lottie options={options} width={'100%'} isClickToPauseDisabled={true}/>
        </div>
    )
}

export function SkillsLottie() {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: skillLottie,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className="home_skills-lottie">
            <Lottie options={options} width={200} isClickToPauseDisabled={true}/>
        </div>
    )
}

export function DevelopmentSkillsLottie() {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: developmentSkills,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            <Lottie options={options} width={200} isClickToPauseDisabled={true}/>
        </div>
    )
}

export function CommunicationSkillsLottie() {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: communicationSkills,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            <Lottie options={options} width={200} isClickToPauseDisabled={true}/>
        </div>
    )
}

export function DevelopmentToolsLottie() {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: developmentTools,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            <Lottie options={options} width={200}/>
        </div>
    )
}

export function SkillImageLottie(lottieFile: object) {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: lottieFile,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    if (!isClient) return null;
    return (
        <div className="skill_image">
            <Lottie options={options} width={200}/>
        </div>
    )
}