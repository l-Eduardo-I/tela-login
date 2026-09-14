"use client";

import { useState } from "react";
import "./FruitSelect.css";

export default function FruitSelect() {
    const [fruta, setFruta] = useState("");

    return (
        <div className="fruitSelect">
            <select
                value={fruta}
                onChange={(event) => setFruta(event.target.value)}
            >
                <option value="">Select a Fruit</option>
                <option value="Apple">Apple</option>
                <option value="Banana">Banana</option>
                <option value="Blueberry">Blueberry</option>
                <option value="Grapes">Grapes</option>
                <option value="Pineapple">Pineapple</option>
            </select>

            {fruta && (
                <p>
                    Selected fruit: {fruta}
                </p>
            )}
        </div>
    );
}