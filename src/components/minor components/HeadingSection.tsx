import { ReactNode } from 'react';
type sectionProps = {children: ReactNode; cssClass?: string}

export default function HeadingSection({ children, cssClass }: sectionProps) {

   return (
      <section className={`section ${cssClass}`}>
         {children}
      </section>
   )
}