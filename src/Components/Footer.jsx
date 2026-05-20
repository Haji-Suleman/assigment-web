import React from "react";
import Logo from "../assets/10011.png"; // 👈 your logo
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer-wrapper">

            {/* Main grid */}
            <div className="footer-main">

                {/* Col 1 — Brand */}
                <div className="footer-brand">
                    <img src={Logo} alt="Take My Assignment" className="footer-logo" />
                    <p>
                        Welcome to TMA, where academic excellence meets personalized
                        assistance. We are a dedicated team of professionals committed to
                        providing top-notch assignment services tailored to meet the unique
                        needs of students like you.
                    </p>
                </div>

                {/* Col 2 — Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        {["How We Work", "Services", "Contact Us", "Reviews", "Blogs"].map((link) => (
                            <li key={link}>
                                <span className="link-icon">🔒</span>
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Col 3 — Address */}
                <div className="footer-address">
                    <h3>Address</h3>
                    <p>
                        Address : Level 18, 40 Bank Street, Canary Wharf, London E14 5NR, United Kingdom
                        <br />
                        Phone no: <a href="tel:+447848102577">+447848102577</a>
                        <br />
                        G-mail : info@takemyassignment.co.uk
                    </p>
                </div>

                {/* Col 4 — Map + Socials */}
                <div className="footer-map-col">
                    <div className="footer-map">
                        <iframe
                            title="Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.690452203487!2d-0.01956682303834252!3d51.50444747181321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b9c947e2b3%3A0x5dc44bb8f0e6c50d!2s40%20Bank%20St%2C%20London%20E14%205NR%2C%20UK!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="footer-socials">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn facebook"
                            aria-label="Facebook"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn instagram"
                            aria-label="Instagram"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                        <a
                            href="https://wa.me/447848102577"
                            target="_blank"
                            rel="noreferrer"
                            className="social-btn whatsapp"
                            aria-label="WhatsApp"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                <path d="M9 10c0 5 3.5 7.5 7.5 4" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p>
                    ©2025. takemyassignment.co.uk All Rights Reserved. | Developed &amp; maintained by @Siliconsofts.com
                </p>
            </div>

        </footer>
    );
}