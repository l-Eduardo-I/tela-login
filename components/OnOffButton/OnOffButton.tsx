"use client";

import "./OnOffButton.css";
import React, { useState } from "react";

export default function OnOffButton () {

    const [ligado, setLigado] = useState(false)

    return (
        <button
            className={ligado ? "ligado" : "desligado"}
            onClick={ () => setLigado(!ligado)}
            >
            {ligado ? "Ligado" : "Desligado"} 
        </button>
    );
}