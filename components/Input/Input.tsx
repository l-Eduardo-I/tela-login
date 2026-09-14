import "./Input.css";

type Inputprops = {
    placeholder: string
    type: "text" | "password"
};

export default function MyInput ({ placeholder, type }: Inputprops) {
    return (
        <input 
        className="inputbox" 
        placeholder={placeholder} 
        type={type}/>
    );
}