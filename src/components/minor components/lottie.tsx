'use client'
import Lottie from 'react-lottie'
import Jslottie from '../../assets/javascript_lottie.json'

export function JSLottie(){

   const options = {
      loop: true,
      autoplay: true, 
      animationData: Jslottie,
      renderSettings: { preserveAspectRatio: 'xMidYMIs slice'}   
   }

   return (
      <div className="home_header-lottie">
         <Lottie options={options} width={'100%'}/>
    </div>
   )
}