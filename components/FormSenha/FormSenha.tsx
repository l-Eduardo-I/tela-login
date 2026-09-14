"use client";

import { useState } from "react";
import "./FormSenha.css";

export default function FormSenha() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);

    function validarSenhas() {
        if (senha === confirmarSenha) {
            setMensagem("Formulário enviado com sucesso");
            setSucesso(true);
        } else {
            setMensagem("As senhas precisam ser iguais");
            setSucesso(false);
        }
    }

    return (
        <div className="formSenha">
            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
            />

            <input
                type="password"
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(event) => setConfirmarSenha(event.target.value)}
            />

            <button onClick={validarSenhas}>
                Enviar
            </button>

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>
        </div>
    );
}