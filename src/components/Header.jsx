import React from "react";
import "../assets/component_styles/Header.css";

export default function Header() {
    return (
        <header className="header">
            <img src="/Images/world_icon.png" alt="world_icon" className="location_img" />
            <p>my travel journal.</p>
        </header>
    )
}