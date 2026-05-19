import React, { useEffect, useRef } from 'react'
import "./WhyChoose.css"

const cards = [
    { icon: "fa-solid fa-money-bill-wave", title: "Excellent quality at affordable prices", anim: "from-left" },
    { icon: "fa-solid fa-pen-nib", title: "Professional writers", anim: "from-top" },
    { icon: "fa-solid fa-bullseye", title: "100% result oriented", anim: "from-right" },
    { icon: "fa-solid fa-clock", title: "On-time delivery", anim: "from-bottom" },
    { icon: "fa-solid fa-headset", title: "24x7 dedicated support", anim: "from-bottom" },
    { icon: "fa-solid fa-shield-halved", title: 'Robust content analyzed by "turnitin software"', anim: "from-bottom" },
]

const WhyChoose = () => {
    const gridRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = gridRef.current.querySelectorAll('.wc-card')
                        items.forEach((card, i) => {
                            setTimeout(() => card.classList.add('wc-card--in'), i * 150)
                        })
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.1 }
        )
        if (gridRef.current) observer.observe(gridRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="wc-section">
            <div className="wc-grid" ref={gridRef}>
                {cards.map((card, i) => (
                    <div className={`wc-card wc-card--${card.anim}`} key={i}>
                        <div className="wc-icon-wrap">
                            <i className={card.icon}></i>
                        </div>
                        <p className="wc-card-title">{card.title}</p>
                    </div>
                ))}
            </div>

            <div className="wc-bottom-banner">
                <h2 className="wc-banner-text">Our customers are protected by the following assurance</h2>
            </div>
        </section>
    )
}

export default WhyChoose