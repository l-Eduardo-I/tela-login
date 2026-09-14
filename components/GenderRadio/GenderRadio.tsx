"use client";

import { useState } from "react";
import "./GenderRadio.css";

export default function GenderRadio() {
    const [genero, setGenero] = useState("");

    return (
        <div className="genderRadio">
            <p>Gender</p>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={genero === "Female"}
                    onChange={(event) => setGenero(event.target.value)}
                />
                Female
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={genero === "Male"}
                    onChange={(event) => setGenero(event.target.value)}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={genero === "Other"}
                    onChange={(event) => setGenero(event.target.value)}
                />
                Other
            </label>
        </div>
    );
}