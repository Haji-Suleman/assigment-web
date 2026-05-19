import React from 'react'
import "./HeroSection.css"

// ── CHANGE THESE 3 to your actual filenames ──
import heroBg from "../assets/10006.jpg"     // your background photo
import whatsappIcon from "../assets/10002.svg"    // whatsapp icon
import phoneIcon from "../assets/10001.svg"       // phone/call icon

const HeroSection = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>

            {/* dark tint overlay */}
            <div className="hero__overlay" />

            {/* ── LEFT side floating icons ── */}
            <div className="hero__side-icons">
                <a
                    href="https://wa.me/4447848102577"
                    target="_blank"
                    rel="noreferrer"
                    className="hero__side-btn"
                    aria-label="WhatsApp"
                >
                    <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a
                    href="tel:+4447848102577"
                    className="hero__side-btn"
                    aria-label="Call us"
                >
                    <img src={phoneIcon} alt="Call" />
                </a>
            </div>



        </section>
    )
}

export default HeroSection