import React, { useEffect, useRef } from 'react'
import "./Aboutus.css"

// ── Replace with your actual image ──
import aboutImg from "../assets/10007.webp"

const AboutUs = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger animations on all animated children
                        const items = sectionRef.current.querySelectorAll('.au-animate')
                        items.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('au-animate--in')
                            }, i * 120)
                        })
                        observer.disconnect() // fire only once
                    }
                })
            },
            { threshold: 0.15 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="au-section" ref={sectionRef}>

            {/* ── gradient background ── */}
            <div className="au-bg" />

            <div className="au-container">

                {/* ════ LEFT TEXT COLUMN ════ */}
                <div className="au-text-col">

                    <p className="au-label au-animate">About <span className="au-red">Us</span></p>
                    <h2 className="au-title au-animate">
                        About take my <span className="au-red">assignment</span>
                    </h2>

                    <h3 className="au-subtitle au-animate">A+ Results Made Easy with Take My Assignment</h3>
                    <p className="au-body au-animate">
                        Take My Assignment is an online assignment writing service for students who are
                        overwhelmed with deadlines and other commitments and find it difficult to make time
                        for their assignments. We take all the stress away from your life so that you can
                        focus on your goals.
                    </p>

                    <h3 className="au-subtitle au-animate">Why Choose Us?</h3>
                    <p className="au-body au-animate">
                        We provide UK assignment help with the best combination of quality, price, and
                        expertise; here's why students choose Take My Assignment:
                    </p>
                    <div className="au-list au-animate">
                        <p><strong>Excellent Quality at Affordable Prices</strong></p>
                        <p>Get the best quality help on assignments within your budget.</p>
                        <p><strong>Professional Writers</strong></p>
                        <p>Our team of experts deliver A+ work tailor-made to your needs.</p>
                        <p><strong>100% Result-Oriented</strong></p>
                        <p>Your success is our priority, and we shape every assignment writing service to meet your expectations.</p>
                        <p><strong>Plagiarism-Free Content, Guaranteed</strong></p>
                        <p>Each work is checked using the Turnitin software for accuracy and originality.</p>
                    </div>

                    <h3 className="au-subtitle au-animate">We Are Available Round the Clock for Your Help</h3>
                    <p className="au-body au-animate">
                        We know that deadlines are part of the assignment and cannot be negotiated; thus,
                        we make sure to deliver on time. Besides, our support team is dedicated and ready
                        to help you with help for assignment questions or guidance throughout the process 24×7.
                    </p>

                    <h3 className="au-subtitle au-animate">Take My Assignment Is Your Academic Lifeline</h3>
                    <p className="au-body au-animate">
                        Take My Assignment is not just an ordinary{' '}
                        <strong>UK assignment help service</strong>; it's about helping you shine. Get in
                        touch with us and we'll take it from there.
                    </p>

                </div>

                {/* ════ RIGHT IMAGE COLUMN ════ */}
                <div className="au-img-col au-animate au-animate--img">
                    {/*
                      Replace src with your image:
                      <img src={aboutImg} alt="Students studying" className="au-photo" />
                    */}
                    <img src={aboutImg} alt="Students studying" className="au-photo" />
                </div>

            </div>

            {/* ════ RED BOTTOM BANNER ════ */}
            <div className="au-banner au-animate">
                <h2 className="au-banner-text">Why choose takemyassignment.co.uk ?</h2>
            </div>

        </section>
    )
}

export default AboutUs