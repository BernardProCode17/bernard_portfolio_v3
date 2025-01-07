"use client"
// imports
import {Dispatch, SetStateAction, useEffect, useState} from "react"
import {IoClose} from "react-icons/io5";
import Link from 'next/link'

import {clipboard} from "@/functions/VOTD";
// exports
export let setModalexport: Dispatch<SetStateAction<boolean>>;
export let Modalexport: boolean;

export default function VOTD() {

    interface VerseDetails {
        reference: string;
        text: string;
    }

    const [details, setDetails] = useState<VerseDetails>({reference: '', text: ''});
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


    return (
        <div className={modal ? 'modal-active' : 'modal'}>

            <section className='modal_section'>

            <span className="modal_close_container">
               <button className="modal_close" onClick={() => setModal(false)}>
                  <IoClose/>
               </button>
            </span>

                <div className="modal_title_container">
                    <h2 className="modal_title">Verse Of The Day</h2>
                    <h3 className="modal_reference">{!details.reference ? 'Loading...' : details.reference}</h3>
                </div>

                <article className="modal_content">
                    {!details.text ? <span className="modal_loading">&rsquo;Loading...&rsquo;</span> :
                        <q className="modal_verse">{details.text}</q>}
                </article>

                <span className="modal_copy_container">
               <button className="modal_copy" onClick={() => clipboard(setCopied, details)}>Copy to clipboard</button>
               <span className="modal_copied">{copied}</span>
            </span>

                <span className="modal_attribution">
               <Link href="https://www.ourmanna.com">
               {attribution}               
               </Link>
               </span>
            </section>
        </div>
    )
}