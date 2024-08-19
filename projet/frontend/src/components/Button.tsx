interface ButtonProps {
    text: string;
}


export default function Button({text} : ButtonProps) {

    return  (
    
    <button onClick={() => alert(text)}>
        {text}
    </button>
    
)
}