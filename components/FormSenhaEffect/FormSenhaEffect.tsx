"use client";

import { useEffect, useState } from "react";
import "./FormSenhaEffect.css";

export default function FormSenhaEffect() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        if (senha === "" && confirmarSenha === "") {
            setMensagem("");
            return;
        }

        if (senha === confirmarSenha) {
            setMensagem("Formulário enviado com sucesso");
            setSucesso(true);
        } else {
            setMensagem("As senhas precisam ser iguais");
            setSucesso(false);
        }
    }, [senha, confirmarSenha]);

    return (
        <div className="formSenhaEffect">
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

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>
        </div>
    );
}