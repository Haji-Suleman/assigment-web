import React, { useState } from 'react'
import './Accordion.css'

const items = [
    {
        title: 'Healthy Development',
        body: 'We are eager to see you grow into true experts in your chosen fields, which is why we are committed to offering top-notch writing services. We encourage you to flourish under the mentorship of experienced professionals, as we aim for our clients to tackle academic writing with the same ease and expertise as seasoned specialists in their disciplines.',
    },
    {
        title: 'Trustworthiness',
        body: 'We are committed to delivering reliable, high-quality academic support that our clients can depend on. Our extensive base of repeat clients is a testament to the consistency and integrity of our work. We hold every team member to the highest standards, ensuring that academic writers, subject matter experts, and support staff are thoroughly vetted through comprehensive entrance exams and regular performance evaluations. This rigorous process guarantees that we maintain a team of professionals who can be trusted to provide exceptional service every time.',
    },
    {
        title: 'Brilliance Guarantee',
        body: 'All of our experts are highly proficient in their respective tasks, whether it’s crafting essays, conducting thorough research, or handling complex calculations. We wholeheartedly support all our clients in reaching their academic goals, as we firmly believe that everyone deserves to succeed academically and, ultimately, in their professional careers.',
    },
    {
        title: 'Plagiarism Free Content',
        body: 'We are a custom writing service, meaning that every paper is crafted according to your specific requirements. Additionally, we use plagiarism detection software to ensure that all documents we deliver are completely original. With the support of our experienced professionals, we guarantee that the content is unique.',
    },
    {
        title: 'Timely Delivery',
        body: 'At Take My Assignment, we are known for consistently meeting deadlines, ensuring that students receive their assignments on time without ever compromising on quality',
    },
    {
        title: 'Affordable & Transparent Pricing',
        body: 'We believe premium academic support should be accessible to every student. Our pricing is straightforward with no hidden fees — what you see is what you pay. We offer competitive rates and flexible packages to suit different budgets without ever cutting corners on quality.',
    },
]

// Split into left (odd indices) and right (even indices) columns
const leftItems = items.filter((_, i) => i % 2 === 0)  // 0, 2, 4
const rightItems = items.filter((_, i) => i % 2 !== 0)  // 1, 3, 5

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
    return (
        <section className="ac-section">

        </section>
    )
}

export default Accordion