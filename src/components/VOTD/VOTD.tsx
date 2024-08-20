"use client"
import { useState, useEffect, Dispatch, SetStateAction } from "react"
import { IoClose } from "react-icons/io5";

export let setModalexport: Dispatch<SetStateAction<boolean>>;

export default function VOTD() {

   interface VerseDetails {
      reference: string;
      text: string;
   }

   const [details, setDetails] = useState<VerseDetails>({});
   const [copied, setCopied] = useState<string>('');
   const [attribution, setAttribution] = useState<string>('');
   const [modal, setModal] = useState(false);

   setModalexport = setModal;

   useEffect(() => {
      async function VOTDData() {
         const dataFetch = await fetch('https://beta.ourmanna.com/api/v1/get?format=json&order=daily')
         const dataJson = await dataFetch.json();
         setAttribution(dataJson.verse.notice)
         setDetails(dataJson.verse.details)
      }
      VOTDData()
   }, [])

   function clipboard() {
      navigator.clipboard.writeText(details.text).then(
         () => {
            setCopied('Verse of the Day')
            setTimeout(() => setCopied(''), 2000)
         })
   }

   return (
      <section className={modal ? 'modal-active' : 'modal'}>
         <span>
            <button onClick={() => setModal(false)}>
               <IoClose />
            </button>
         </span>

         <h2>Verse Of The Day</h2>

         <h3>{!details.reference ? 'Loading...' : details.reference}</h3>

         <article>
            {!details.text ? 'Loading...' : <q>{details.text}</q>}
         </article>

         <span>
            <button onClick={() => clipboard()}>Copy to clipboard</button>
            <span>{copied}</span>
         </span>

         <span>{attribution}</span>
      </section>
   )
}