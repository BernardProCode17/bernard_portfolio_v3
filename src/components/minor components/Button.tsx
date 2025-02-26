"use client"
type ButtonProps = {
    content: string;
    clickFunction?: () => void;
    cssClass: string;
};

export default function Button({ content, clickFunction, cssClass }: ButtonProps) {
    const click = () => { clickFunction && clickFunction() }

    return (
            <button className={`${cssClass}`} onClick={click}>
            {content}
        </button>
    );
}