import Link from 'next/link'
export default function FooterNavigation() {

   return (
      <nav className='footer_nav'>
         <ul className='footer_ul'>
            <li className='footer_li'>
               <Link className='footer_nav-link' href='/'>Home</Link>
            </li>
            <li className='footer_li'>
               <Link className='footer_nav-link' href='/projects'>Projects</Link>
            </li>
            <li className='footer_li'>
               <Link className='footer_nav-link' href='/skills'>Skills</Link>
            </li>
            <li className='footer_li'>
               <Link className='footer_nav-link' href='/about'>About</Link>
            </li>
            <li className='footer_li'>
               <Link className='footer_nav-link' href='/contact'>Contact</Link>
            </li>
         </ul>
      </nav>
   )
}