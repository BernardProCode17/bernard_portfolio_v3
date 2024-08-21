import { SetStateAction } from "react"

export function clipboard(setFunction: { (value: SetStateAction<string>): void; (arg0: string): void }, details) {
   navigator.clipboard.writeText(details.text).then(
      () => {
         setFunction('Verse of the Day')
         setTimeout(() => setFunction(''), 2000)
      })
}