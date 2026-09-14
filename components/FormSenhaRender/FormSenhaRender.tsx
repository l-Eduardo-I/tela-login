"use client";

import { useState } from "react";
import "./FormSenhaRender.css";

export default function FormSenhaRender() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    let mensagem = "";
    let sucesso = false;

    if (senha !== "" || confirmarSenha !== "") {
        if (senha === confirmarSenha) {
            mensagem = "Formulário enviado com sucesso";
            sucesso = true;
        } else {
            mensagem = "As senhas precisam ser iguais";
            sucesso = false;
        }
    }

    return (
        <div className="formSenhaRender">
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