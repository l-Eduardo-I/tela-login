"use client";

import "./input.css";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Myinput() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const router = useRouter();

    function validaSenha() {
        if (senha === "Edu123" && usuario === "Eduardo") {
            setMensagem("Entrou!");
            setSucesso(true);
            router.push("/Home");
        } else {
            setMensagem("Login incorreto!");
            setSucesso(false);
        }


        const novoUsers = {
            usur: {usuario},
            password: {senha},
            dateAdd: {
                dia: new Date().getDate(),
                mes: new Date().getMonth() +1,
                ano: new Date().getFullYear(),
            }
        }
        console.log("Lista de Usuários:", novoUsers);
    }
    return (
        <div className="LoginContainer">
            <input 
            type="text"
            placeholder="Digite seu usuário"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}  
            />

            <input 
                type="password" 
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
            />

            <button onClick={validaSenha} className="button">
                Acessar
            </button>

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>


        </div>



    );
}