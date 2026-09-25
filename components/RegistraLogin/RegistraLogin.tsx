"use client";

import { useState } from "react";
import "./Registralogin.css";

export default function RegistroDeLogin() {

    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [alert, setAlert] = useState("");
    const [validation, setValidation] = useState(false);

    function validalogin() {
        if (email.trim() === "" ||
            user.trim() === "" ||
            senha.trim() === "") {
            setAlert("Os campos não podem ser vazios");
            setEmail("");
            setUser("");
            setSenha("");
            setConfirmaSenha("");
            return;
        }

        if (senha !== confirmaSenha) {
            setAlert("As senhas devem ser iguais");
            setEmail("");
            setUser("");
            setSenha("");
            setConfirmaSenha("");
            return;
        }  
        setAlert("Sucesso!");

        const usuarios = {
            email,
            user,
            senha,
            confirmaSenha,
            validacao: true,
            data: {
                dia: new Date().getDate(),
                mes: new Date().getMonth() + 1,
                ano: new Date().getFullYear(),
                hora: new Date().getHours(),
            }
        }
        console.log(usuarios);

    }
    return (
        <div className="cadastroContainer">

            <input
                type="email"
                placeholder="Digite seu Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <input
                type="text"
                placeholder="Digite seu usuario"
                value={user}
                onChange={(event) => setUser(event.target.value)}
            />


            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
            />

            <input
                type="password"
                placeholder="Digite sua senha novamente"
                value={confirmaSenha}
                onChange={(event) => setConfirmaSenha(event.target.value)}
            />

            <button className={alert ? "sucesso" : "erro"} onClick={validalogin}>
                Enviar
            </button>

            <p>
                {alert}
            </p>


        </div>



    );
}