type ButtonProps = {
    content: string;
}

export default function Button({ content}: ButtonProps) {

    return (
        <button className="button">
            {content}
        </button>
    )
}