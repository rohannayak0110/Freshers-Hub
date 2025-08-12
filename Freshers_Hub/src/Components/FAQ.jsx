import React from 'react'
// import '../Styling/FAQ.css'

function FAQ() {
  return (
    <div>
       <main>
        <section className="hero">
            <div className="hero-content">
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about admissions, campus life, academics, and more.</p>
            </div>
        </section>

        <section className="faq-section">
            <div className="container">
                <div className="section-title">
                    <h2>Your Questions, Answered</h2>
                </div>

                <div className="faq-search">
                    <input type="text" id="faqSearch" placeholder="Search FAQs..." />
                </div>

                <div className="faq-categories">
                    <button data-category="all" className="active">All</button>
                    <button data-category="admissions">Admissions</button>
                    <button data-category="campus-life">Campus Life</button>
                    <button data-category="academics">Academics</button>
                    <button data-category="finance">Fees & Funding</button>
                    <button data-category="support">Student Support</button>
                </div>

                <div className="faq-container">
                    <div className="faq-item" data-category="admissions">
                        <div className="faq-question">
                            How do I apply to Your University?
                        </div>
                        <div className="faq-answer">
                            <p>Applications are submitted online through our admissions portal. You'll need to create an account, fill out the application form, and upload required documents such as transcripts, personal statement, and references. Please refer to our <a href="#">Admissions page</a> for detailed instructions and deadlines.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="finance">
                        <div className="faq-question">
                            What are the tuition fees and available scholarships?
                        </div>
                        <div className="faq-answer">
                            <p>Tuition fees vary by program and student status (domestic/international). Detailed fee schedules are available on our <a href="#">Fees & Funding page</a>. We also offer a range of scholarships and bursaries based on merit and financial need. Information on how to apply for these is also available online.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="campus-life">
                        <div className="faq-question">
                            What accommodation options are available for students?
                        </div>
                        <div className="faq-answer">
                            <p>We offer a variety of on-campus accommodation options, including catered and self-catered halls of residence. Off-campus housing support is also available. You can find more details, virtual tours, and application procedures on our <a href="campus.html">Accommodation page</a>.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="academics">
                        <div className="faq-question">
                            How can I change my course or modules?
                        </div>
                        <div className="faq-answer">
                            <p>Course and module changes are subject to academic regulations and availability. You should first consult with your academic advisor or department head. Official procedures and forms can be found on the student intranet or by contacting the Registry office.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="support">
                        <div className="faq-question">
                            What student support services does the university offer?
                        </div>
                        <div className="faq-answer">
                            <p>Your University provides comprehensive student support, including academic advising, career services, mental health and wellbeing support, disability services, and international student support. Visit our <a href="#">Student Support Hub</a> for contact details and resources.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="campus-life">
                        <div className="faq-question">
                            Are there opportunities to join clubs and societies?
                        </div>
                        <div className="faq-answer">
                            <p>Absolutely! Our Students' Union hosts over 200 clubs and societies covering a wide range of interests, from academic and cultural to sports and volunteering. The annual Freshers' Fair is a great opportunity to explore and sign up. You can also browse the full list on the <a href="#">Students' Union website</a>.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="admissions">
                        <div className="faq-question">
                            What are the English language requirements for international students?
                        </div>
                        <div className="faq-answer">
                            <p>For international students, proof of English language proficiency is required. We accept various tests, including IELTS, TOEFL, and PTE Academic, with specific score requirements varying by program. Please check the <a href="#">International Admissions page</a> for detailed information.</p>
                        </div>
                    </div>

                    <div className="faq-item" data-category="academics">
                        <div className="faq-question">
                            How do I access the university's online learning platforms?
                        </div>
                        <div className="faq-answer">
                            <p>Upon successful registration, you will receive your university login credentials. These will grant you access to our Virtual Learning Environment (VLE), university email, and other online resources. Training sessions are provided during Welcome Week to help you get started.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Still Have Questions?</h2>
                    <p>If you can't find the answer you're looking for, please don't hesitate to contact us directly.</p>
                    <a href="#" className="btn">Contact Us</a>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default FAQ
