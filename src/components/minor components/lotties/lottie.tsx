'use client'
import Lottie from 'react-lottie'
import Jslottie from '../../../assets/javascript_lottie.json'
import projectsLottie from '../../../assets/project_folder_lottie.json'
type LottieProps = {
   display: string
}
export function JSLottie(){

   const options = {
      loop: true,
      autoplay: true, 
      animationData: Jslottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice'}   
   }

   return (
      <div className="home_header-lottie">
         <Lottie options={options} width={'100%'} isClickToPauseDisabled={true}/>
    </div>
   )
}

export function ProjectsLottie({display}: LottieProps){
   const options = {
      loop: true,
      autoplay: true,
      animationData: projectsLottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice'}
   }

   return (
      <div className={`home_projects-lottie ${display}`}>
         <Lottie options={options} width={'100%'} isClickToPauseDisabled={true}/>
      </div>
   )
}