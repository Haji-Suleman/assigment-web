import React from "react";
import Logo from "../assets/10011.png";
import "./ExceptUS.css"

export default function ExceptUS() {
    return (
        <section className="hero-wrapper">

            {/* Logo */}
            <div className="hero-logo">
                <img src={Logo} alt="Take My Assignment" />
            </div>

            {/* Heading */}
            <h1 className="hero-heading">
                Looking for an expert to write my assignment?
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
                We're ready to assist you with an easy-to-order essay writing service,
                offering students a vast range of assistance and first-rate support. Get
                expert-level results with ease by engaging the services of seasoned
                professionals.
            </p>

            {/* CTA Button */}
            <button className="hero-btn">Place an Order</button>

        </section>
    );
}