import React, { useState, useEffect, useRef } from 'react'
import './Accordion.css'

const items = [
    {
        title: 'Healthy Development',
        body: 'We are eager to see you grow into true experts in your chosen fields, which is why we are committed to offering top-notch writing services. We encourage you to flourish under the mentorship of experienced professionals, as we aim for our clients to tackle academic writing with the same ease and expertise as seasoned specialists in their disciplines.',
    },
    {
        title: 'Plagiarism Free Content',
        body: 'Every assignment we deliver is 100% original and crafted from scratch. We run all content through Turnitin and other plagiarism detection tools to ensure complete authenticity. Our writers never copy or recycle content — your work is always unique and tailored specifically to your requirements.',
    },
    {
        title: 'Trustworthiness',
        body: 'We have built our reputation on trust and transparency. Our clients rely on us because we consistently deliver what we promise — on time, to specification, and with full confidentiality. Your personal and academic information is always kept strictly private and secure.',
    },
    {
        title: 'Timely Delivery',
        body: 'We understand that deadlines are non-negotiable in academic life. Our team is trained to work efficiently under pressure, ensuring your assignments are delivered well before the due date. Whether it\'s a 24-hour deadline or a week away, we guarantee punctual delivery without compromising quality.',
    },
    {
        title: 'Brilliance Guarantee',
        body: 'Quality is at the heart of everything we do. Our experts hold advanced degrees in their respective fields and are committed to producing work that meets the highest academic standards. Every submission goes through a thorough review process before it reaches you.',
    },
    {
        title: 'Affordable & Transparent Pricing',
        body: 'We believe premium academic support should be accessible to every student. Our pricing is straightforward with no hidden fees — what you see is what you pay. We offer competitive rates and flexible packages to suit different budgets without ever cutting corners on quality.',
    },
]

const stats = [
    { number: '15000+', label: 'No. Of Assignments' },
    { number: '8000+', label: 'No. Of Students' },
    { number: '15+', label: 'No. Of Countries' },
    { number: '50+', label: 'No. Of Professional Experts' },
]

const leftItems = items.filter((_, i) => i % 2 === 0)
const rightItems = items.filter((_, i) => i % 2 !== 0)

const AccordionColumn = ({ columnItems, idOffset }) => {
    const [openIndex, setOpenIndex] = useState(idOffset === 0 ? 0 : null)
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <div className="ac-column">
            {columnItems.map((item, i) => (
                <div
                    key={i}
                    className={`ac-item${openIndex === i ? ' ac-open' : ''}`}
                    onClick={() => toggle(i)}
                >
                    <div className="ac-header">
                        <p className="ac-header-title">{item.title}</p>
                        <span className="ac-icon">+</span>
                    </div>
                    <div className="ac-body">
                        <div className="ac-body-inner">{item.body}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const Accordion = () => {
    const statsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = statsRef.current?.querySelectorAll('.ac-stat-item')
                        items?.forEach((el) => el.classList.add('ac-stat--in'))
                        observer.disconnect()
                    }
                })
            },
            { threshold: 0.2 }
        )
        if (statsRef.current) observer.observe(statsRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <section className="ac-section">
                <div className="ac-container">
                    <AccordionColumn columnItems={leftItems} idOffset={0} />
                    <AccordionColumn columnItems={rightItems} idOffset={1} />
                </div>
            </section>

            {/* Stats Banner */}
            <div className="ac-stats" ref={statsRef}>
                <div className="ac-stats-inner">
                    {stats.map((s, i) => (
                        <div className="ac-stat-item" key={i}>
                            <p className="ac-stat-number">{s.number}</p>
                            <p className="ac-stat-label">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Accordion