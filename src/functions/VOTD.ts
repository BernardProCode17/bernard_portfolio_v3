import {SetStateAction} from "react"

export function clipboard(setFunction: { (value: SetStateAction<string>): void; (arg0: string): void }, details: {
    text: string
}) {
    navigator.clipboard.writeText(details.text).then(
        () => {
            setFunction('Copied to clipboard')
            setTimeout(() => setFunction(''), 2000)
        })
}