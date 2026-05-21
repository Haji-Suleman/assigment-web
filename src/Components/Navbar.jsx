import React, { useState } from 'react'
import callLogo from "../assets/10002.svg"
import siteLogo from "../assets/10011.png"
import whatsappIcon from "../assets/10001.svg"
import "./Navbar.css"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <>
            <header className="navbar">

                {/* ── LEFT: phone button ── */}
                <a href="tel:+447848102577" className="navbar__phone">
                    <img src={callLogo} alt="Call us" className="navbar__phone-icon" />
                    <span>+447848102577</span>
                </a>

                {/* ── CENTRE: brand logo ── */}
                <a href="/" className="navbar__brand">
                    <img src={siteLogo} alt="TakeMyAssignment.co.uk" className="navbar__logo" />
                </a>

                {/* ── RIGHT: social icons (desktop) ── */}
                <div className="navbar__socials">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer"
                        className="navbar__social-btn" aria-label="Facebook">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"
                        className="navbar__social-btn" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/447848102577" target="_blank" rel="noreferrer"
                        className="navbar__social-btn" aria-label="WhatsApp">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>

                {/* ── RIGHT: hamburger (mobile only) ── */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </header>

            {/* ── Mobile dropdown menu ── */}
            <nav className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`}>
                <a href="tel:+447848102577" onClick={closeMenu}>
                    <i className="fa-solid fa-phone"></i>
                    +447848102577
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" onClick={closeMenu}>
                    <i className="fa-brands fa-facebook-f"></i>
                    Facebook
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" onClick={closeMenu}>
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                </a>
                <a href="https://wa.me/447848102577" target="_blank" rel="noreferrer" onClick={closeMenu}>
                    <i className="fa-brands fa-whatsapp"></i>
                    WhatsApp
                </a>
            </nav>

            <hr className="HR_TAGE" />
        </>
    )
}

export default Navbar