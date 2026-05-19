import React, { useEffect, useRef } from 'react'
import "./Assurance.css"

const cards = [
    {
        icon: "fas fa-money-bill-wave",
        title: "Guaranteed Money Return",
        desc: "Unfulfilled commitments will be reimbursed under our refund policy.",
        anim: "from-left",
    },
    {
        icon: "fas fa-headset",
        title: "Feedback Facilities",
        desc: "Any missing requirements in the assignment will be revised and edited to your satisfaction, ensuring you're fully content.",
        anim: "from-top",
    },
    {
        icon: "fas fa-user-shield",
        title: "Confidentiality Surety",
        desc: "Our policies are designed to ensure the confidentiality of our customers' identities. Also visitors' identities are shielded by top-tier cybersecurity technology.",
        anim: "from-bottom",
    },
    {
        icon: "fas fa-circle-check",
        title: "Human Written Content",
        desc: "We uphold a strict no-plagiarism policy, ensuring the provision of original human-crafted content. Every assignment is processed through Turnitin to verify its authenticity.",
        anim: "from-right",
    },
]

const Assurance = () => {
    const rowRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = rowRef.current.querySelectorAll('.as-card')
                        items.forEach((card, i) => {
                            setTimeout(() => card.classList.add('as-card--in'), i * 150)
                        })
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0 }
        )
        if (rowRef.current) observer.observe(rowRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="as-section">
            <div className="as-row" ref={rowRef}>
                {cards.map((card, i) => (
                    <div className={`as-card as-card--${card.anim}`} key={i}>
                        <div className="as-icon-circle">
                            <i className={card.icon}></i>
                        </div>
                        <h3 className="as-title">{card.title}</h3>
                        <p className="as-desc">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Assurance