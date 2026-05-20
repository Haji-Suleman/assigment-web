import React, { useState } from 'react'
import './FAQ.css'

const leftItems = [
    {
        title: 'Are your writers qualified?',
        body: 'Yes, all of our writers are highly qualified professionals with advanced degrees in their respective fields. They have a proven track record of delivering high-quality, original academic content tailored to each client\'s specific requirements.',
    },
    {
        title: 'What is your policy on plagiarism?',
        body: 'We have a strict zero-tolerance policy on plagiarism. Every assignment is written from scratch and passed through Turnitin before delivery. You will receive a plagiarism report along with your completed work as proof of originality.',
    },
    {
        title: 'Can I speak directly with the writer?',
        body: 'Yes, we facilitate direct communication between you and your assigned writer. This ensures your specific instructions are understood clearly and any adjustments can be made in real time throughout the writing process.',
    },
    {
        title: 'What is the credibility of your writers?',
        body: 'Our writers are vetted through a rigorous selection process. Each one holds at least a Master\'s degree, has passed subject-specific tests, and has demonstrated consistent quality across multiple assignments before being accepted onto our platform.',
    },
]

const rightItems = [
    {
        title: 'Do you provide a money-back guarantee?',
        body: 'Absolutely. If we fail to meet your requirements or deliver on time, you are entitled to a full or partial refund depending on the circumstances. Our refund policy is transparent and hassle-free — your satisfaction is our priority.',
    },
    {
        title: 'How soon can I get my assignment completed?',
        body: 'We can handle urgent deadlines as tight as 24 hours. Simply provide your deadline when placing your order and our team will assign a writer who can deliver within that timeframe without compromising on quality.',
    },
    {
        title: 'What academic levels do you cover?',
        body: 'We cover all academic levels — from undergraduate and A-level coursework to postgraduate dissertations and doctoral research. Whatever the complexity, we have specialists with the right expertise to handle your assignment.',
    },
    {
        title: 'What are the payment options available?',
        body: 'We accept all major credit and debit cards, PayPal, and various other secure payment methods. All transactions are encrypted and fully secure. We never store your payment details after the transaction is complete.',
    },
]

const FAQColumn = ({ columnItems, defaultOpen }) => {
    const [openIndex, setOpenIndex] = useState(defaultOpen ? 0 : null)
    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <div className="faq-column">
            {columnItems.map((item, i) => (
                <div
                    key={i}
                    className={`faq-item${openIndex === i ? ' faq-open' : ''}`}
                    onClick={() => toggle(i)}
                >
                    <div className="faq-header">
                        <p className="faq-header-title">{item.title}</p>
                        <span className="faq-icon">+</span>
                    </div>
                    <div className="faq-body">
                        <div className="faq-body-inner">{item.body}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

const FAQ = () => {
    return (
        <section className="faq-section">
            <h2 className="faq-title">
                Frequently asked <span>question!</span>
            </h2>

            <div className="faq-container">
                <FAQColumn columnItems={leftItems} defaultOpen={true} />
                <FAQColumn columnItems={rightItems} defaultOpen={false} />
            </div>
        </section>
    )
}

export default FAQ