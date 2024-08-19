"use client"
type ButtonProps = {
    content: string;
    clickFunction: () => void;
};

export default function Button({ content, clickFunction }: ButtonProps) {
    const click = () => { clickFunction() }

    return (
        <button className="button header_nav-close" onClick={click}>
            {content}
        </button>
    );
}