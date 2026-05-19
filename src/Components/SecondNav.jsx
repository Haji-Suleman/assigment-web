import React, { useState } from 'react'
import "./SecondNav.css"

const navLinks = [
    { id: "home", label: "Home" },
    { id: "how-we-work", label: "How we work" },
    { id: "reviews", label: "Reviews" },
    { id: "services", label: "Services" },
    { id: "blogs", label: "Blogs" },
    { id: "contact-us", label: "Contact Us" },
]

const SecondNav = () => {
    const [activeLink, setActiveLink] = useState("home")

    return (
        <nav className="second-nav">
            <ul className="second-nav__list">
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={`#${link.id}`}
                            className={`second-nav__link ${activeLink === link.id ? "second-nav__link--active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setActiveLink(link.id)
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SecondNav