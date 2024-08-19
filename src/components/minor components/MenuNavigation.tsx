"use client"
import Link from 'next/link'
import Button from './Button'
import { Dispatch, SetStateAction, useState } from 'react'

export let isOpenExport: Dispatch<SetStateAction<boolean>>;

export default function MenuNavigation() {
    const [isOpen, setIsOpen] = useState(false)
    isOpenExport = setIsOpen;

    function closeButton() {
        setIsOpen(false)
    }

    return (
        // <div className='header_nav-container'>
            < nav className={isOpen ? 'header_nav-active' : 'header_nav'} >
                <ul className='header_nav-ul'>

                    <li className='header_nav-li'>
                        <Link href='/' className='header_nav-link header_nav_link-active'>Home</Link>
                    </li>

                    <li className='header_nav-li'>
                        <Link href='/project' className='header_nav-link'>Projects</Link>
                    </li>

                    <li className='header_nav-li'>
                        <Link href='/skills' className='header_nav-link'>Skills</Link>
                    </li>

                    <li className='header_nav-li'>
                        <Link href='/about' className='header_nav-link'>About</Link>
                    </li>

                    <li className='header_nav-li'>
                        <Link href='/contact' className='header_nav-link'>Contact</Link>
                    </li>

                    <li className='header_nav-li'>
                        <button className='header_nav_link-votd'>Verse Of The Day</button>
                    </li>
                </ul>
                <Button content="Close" clickFunction={closeButton} />
            </nav>
        // </div>
    )
}