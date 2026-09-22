"use client"

import { useState } from "react";
import "./Button.css";

export default function LogarComo() {
    const [abrirModal, setAbrirModal] = useState(false);

    return (
        <>
            <button onClick={() => setAbrirModal(true)}>
                Entrar de outra forma
            </button>

            {abrirModal && (
                <div className="modal">
                    <div className="janela">
                        <h2>Escolha uma forma de login</h2>

                        <button>Entrar com Goolge</button>
                        <button>Entrar com GitHub</button>

                        <button onClick={() => setAbrirModal(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );

}