import React from 'react'
import callLogo from "../assets/10002.svg"       // replace with your call icon
import siteLogo from "../assets/10009.jpg"       // replace with your centre logo
import facebookIcon from "../assets/10001.svg"   // replace with your FB icon
import whatsappIcon from "../assets/10001.svg"   // replace with your WA icon
import instagramIcon from "../assets/10001.svg" // replace with your IG icon
import "./Navbar.css"

const Navbar = () => {
    return (
            <>
            <header className="navbar">

                {/* ── LEFT: phone button ── */}
                <a href="tel:+4447848102577" className="navbar__phone">
                    <img src={callLogo} alt="Call us" className="navbar__phone-icon" />
                    <span>+4447848102577</span>
                </a>

                {/* ── CENTRE: brand logo ── */}
                <a href="/" className="navbar__brand">
                    <img src={siteLogo} alt="TakeMyAssignment.co.uk" className="navbar__logo" />
                </a>

                {/* ── RIGHT: social icons ── */}
                <div className="navbar__socials">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="navbar__social-btn" aria-label="Facebook">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://wa.me/4447848102577" target="_blank" rel="noreferrer" className="navbar__social-btn" aria-label="WhatsApp">
                        <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="navbar__social-btn" aria-label="Instagram">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                </div>

            </header>
            <hr className='HR_TAGE' />
        </>
    )
}

export default Navbar