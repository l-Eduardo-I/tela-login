"use client";

import { useState } from "react";
import "./Registralogin.css";

export default function RegistroDeLogin() {

    //Declaração de variaveis 
    const [email, setEmail] = useState("");
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [alert, setAlert] = useState("");
    const [validation, setValidation] = useState(false);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [usuarios, setUsuarios] = useState([]);

    //Função que valida Login
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

        //Verifica se o Email atende os requisitos 
        if (!emailValido.test(email)) {
            setAlert("Digite um email Valido.")
            return;
        }

        //Verifica se a senha é igual a confirmação.
        if (senha !== confirmaSenha) {
            setAlert("As senhas devem ser iguais");
            setEmail("");
            setUser("");
            setSenha("");
            setConfirmaSenha("");
            return;
        } 

        //Se passar pelos filtros o usuário é cadastrado.
        setAlert("Sucesso!");

        //Const que está armazenado os dados de login em formato de Objeto. Opção temporaria, pq quando o logi e feito a function reinicia e os dados são perdidos.
        const novoUsuarios = {
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
        console.log(novoUsuarios);

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
