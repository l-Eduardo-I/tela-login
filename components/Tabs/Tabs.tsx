"use client";

import { useState } from "react";
import "./Tabs.css";

export default function Tabs() {
    const [abaSelecionada, setAbaSelecionada] = useState(1);

    return (
        <div className="tabs">
            <div className="tabBotoes">
                <button onClick={() => setAbaSelecionada(1)}>
                    Tab #1
                </button>

                <button onClick={() => setAbaSelecionada(2)}>
                    Tab #2
                </button>

                <button onClick={() => setAbaSelecionada(3)}>
                    Tab #3
                </button>
            </div>

            <div className="tabConteudo">
                {abaSelecionada === 1 && (
                    <div>
                        <h3>Tab content #1</h3>
                        <p>
                            Conteúdo da primeira aba.
                        </p>
                    </div>
                )}

                {abaSelecionada === 2 && (
                    <div>
                        <h3>Tab content #2</h3>
                        <p>
                            Conteúdo da segunda aba.
                        </p>
                    </div>
                )}

                {abaSelecionada === 3 && (
                    <div>
                        <h3>Tab content #3</h3>
                        <p>
                            Conteúdo da terceira aba.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}