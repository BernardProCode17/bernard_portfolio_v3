import Link from 'next/link'
import Button from './Button'

export default function MenuNavigation() {
   

    return (
        <nav className='header_nav'>
            <ul className='header_nav-ul'>

                <li className='header_nav-li'>
                    <Link href='/' className='header_nav-link'>Home</Link>
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
                    <Link href='/votd' className='header_nav-link'>Verse Of The Day</Link>
                </li>
            </ul>
            <Button content="Close" />
        </nav>
    )
}