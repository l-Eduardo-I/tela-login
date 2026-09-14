import "./ButtonLogin.css"

type ButtonProps = {
    children: React.ReactNode
}


export default function ButtonLogin ( {children, }: ButtonProps){
    return (
        <button className="buttonlogin">
            {children}
        </button>
    );
}