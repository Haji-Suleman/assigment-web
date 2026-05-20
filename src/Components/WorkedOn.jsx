import React from "react";
import MapGif from "../assets/10010.gif"; // 👈 Replace with your actual GIF filename
import "./WorkedOn.css";

export default function CountriesSection() {
    return (
        <section className="countries-wrapper">

            {/* Title */}
            <h2 className="countries-title">
                Countries we have <span>worked</span> with
            </h2>

            {/* Map GIF */}
            <div className="countries-map">
                <img src={MapGif} alt="World map showing countries we have worked with" />
            </div>

            {/* Red footer bar */}
            <div className="countries-footer">
                <p>Proudly serving in 15+ countries</p>
            </div>

        </section>
    );
}