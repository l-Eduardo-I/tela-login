"use client";

import { useState } from "react";
import OnOffButton2 from "@/components/OnOffButton2/OnOffButton2";

export default function page () {

    const [ligado, setLigado] = useState(false);
    
    return (
        <main>
            <OnOffButton2
                ligado={ligado}
                onClick={() => setLigado(!ligado)}
            />
        </main>
    );
}