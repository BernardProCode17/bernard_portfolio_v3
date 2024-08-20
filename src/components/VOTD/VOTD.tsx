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
      <div className={modal ? 'modal-active' : 'modal'}>

         <section className='modal_section'>

            <span className="modal_close_container">
               <button className="modal_close" onClick={() => setModal(false)}>
                  <IoClose />
               </button>
            </span>

            <div className="modal_title_container">
               <h2 className="modal_title">Verse Of The Day</h2>
               <h3 className="modal_reference">{!details.reference ? 'Loading...' : details.reference}</h3>
            </div>

            <article className="modal_content">
               {!details.text ? <span className="modal_loading">&rsquo;Loading...&rsquo;</span> : <q className="modal_verse">{details.text}</q>}
            </article>

            <span className="modal_copy_container">
               <button className="modal_copy" onClick={() => clipboard()}>Copy to clipboard</button>
               <span className="modal_copied">{copied}</span>
            </span>

            <span className="modal_attribution">{attribution}</span>
         </section>
      </div>
   )
}