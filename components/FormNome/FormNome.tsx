"use client";

import { useState } from "react";
import "./FormNome.css";

export default function FormNome() {
    const [nome, setNome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);

    function validarNome() {
        if (nome.length < 2) {
            setMensagem("O nome precisa ter pelo menos 2 caracteres");
            setSucesso(false);
        } else if (nome.length > 20) {
            setMensagem("O nome precisa ter até 20 caracteres");
            setSucesso(false);
        } else {
            setMensagem("Formulário enviado com sucesso");
            setSucesso(true);
        }
    }

    return (
        <div className="formNome">
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <button onClick={validarNome}>
                Enviar
            </button>

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>
        </div>
    );
}