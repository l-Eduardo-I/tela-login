import "./Button.css";

type ButtonProps = {
    children: React.ReactNode
}

export default function MyButton ({ children, }: ButtonProps) {
    return(
        <button className="button">
            {children}
        </button>
    )
}