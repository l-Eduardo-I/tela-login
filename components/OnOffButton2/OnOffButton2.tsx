import "./OnOffButton2.css"

type OnOffButtonProps = {
    ligado: boolean;
    onClick: () => void;
};

export default function OnOffButton2({ ligado, onClick }: OnOffButtonProps) {
    return (
        <button
            className={ligado ? "ligado" : "desligado"}
            onClick={onClick}
        >
            {ligado ? "Ligado" : "Desligado"}
        </button>
    )

}