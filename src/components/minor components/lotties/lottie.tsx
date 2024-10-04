'use client'
import Lottie from 'react-lottie'
import Jslottie from '../../../assets/javascript_lottie.json'
import projectsLottie from '../../../assets/project_folder_lottie.json'
import skillLottie from '../../../assets/skills_graph_lottie.json'
import developmentSkills from '../../../assets/development_skills_lottie.json'
import communicationSkills from '../../../assets/communication_skill_lottie.json'
import developmentTools from '../../../assets/developement_tools_skills_lottie.json'

type LottieProps = {
   display: string
}
export function JSLottie() {

   const options = {
      loop: true,
      autoplay: true,
      animationData: Jslottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="home_header-lottie">
         <Lottie options={options} width={'100%'} isClickToPauseDisabled={true} />
      </div>
   )
}

export function ProjectsLottie({ display }: LottieProps) {
   const options = {
      loop: true,
      autoplay: true,
      animationData: projectsLottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className={`home_projects-lottie ${display}`}>
         <Lottie options={options} width={'100%'} isClickToPauseDisabled={true} />
      </div>
   )
}

export function SkillsLottie() {

   const options = {
      loop: true,
      autoplay: true,
      animationData: skillLottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="home_skills-lottie">
         <Lottie options={options} width={200} isClickToPauseDisabled={true} />
      </div>
   )
}

export function DevelopmentSkillsLottie() {

   const options = {
      loop: true,
      autoplay: true,
      animationData: developmentSkills,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="home_skills-lottie home_skills_lottie-display">
         <Lottie options={options} width={200} isClickToPauseDisabled={true} />
      </div>
   )
}

export function CommunicationSkillsLottie() {

   const options = {
      loop: true,
      autoplay: true,
      animationData: communicationSkills,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="home_skills-lottie home_skills_lottie-display">
         <Lottie options={options} width={200} isClickToPauseDisabled={true} />
      </div>
   )
}

export function DevelopmentToolsLottie() {

   const options = {
      loop: true,
      autoplay: true,
      animationData: developmentTools,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="home_skills-lottie home_skills_lottie-display">
         <Lottie options={options} width={200}/>
      </div>
   )
}

export function SkillImageLottie(lottieFile: object) {

   const options = {
      loop: true,
      autoplay: true,
      animationData: lottieFile,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice' }
   }

   return (
      <div className="skill_image">
         <Lottie options={options} width={200}/>
      </div>
   )
}