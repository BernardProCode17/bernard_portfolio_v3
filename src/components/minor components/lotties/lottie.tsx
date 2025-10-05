'use client'
import React, {useEffect, useState} from 'react';
import Lottie from 'react-lottie'
import projectsLottie from '../../../assets/project_folder_lottie.json'
import skillLottie from '../../../assets/skills_graph_lottie.json'
import developmentSkills from '../../../assets/development_skills_lottie.json'
import communicationSkills from '../../../assets/communication_skill_lottie.json'
import developmentTools from '../../../assets/developement_tools_skills_lottie.json'

// type LottieProps = { display: string }
const clientDocument = typeof window !== 'undefined'


export function ProjectsLottie() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: projectsLottie,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className={`home_projects-lottie`}>
            {isClient && <Lottie options={options} width={'100%'} isClickToPauseDisabled={true}/>}
        </div>
    )
}

export function SkillsLottie() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);
    const options = {
        loop: true,
        autoplay: true,
        animationData: skillLottie,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className="home_skills-lottie">
            {isClient && clientDocument && <Lottie options={options} width={200} isClickToPauseDisabled={true}/>}
        </div>
    )
}

export function DevelopmentSkillsLottie() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: developmentSkills,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            {isClient && clientDocument && <Lottie options={options} width={200} isClickToPauseDisabled={true}/>}
        </div>
    )
}

export function CommunicationSkillsLottie() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);
    const options = {
        loop: true,
        autoplay: true,
        animationData: communicationSkills,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            {isClient && clientDocument && <Lottie options={options} width={200} isClickToPauseDisabled={true}/>}
        </div>
    )
}

export function DevelopmentToolsLottie() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: developmentTools,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className="home_skills-lottie home_skills_lottie-display">
            {isClient && clientDocument && <Lottie options={options} width={200}/>}
        </div>
    )
}

export function SkillImageLottie(lottieFile: object) {

    // const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsClient(true);
        }
    }, []);

    const options = {
        loop: true,
        autoplay: true,
        animationData: lottieFile,
        renderSettings: {preserveAspectRatio: 'xMidYMIs slice'}
    }

    return (
        <div className="skill_image">
            {clientDocument && <Lottie options={options} width={200}/>}
        </div>
    )
}