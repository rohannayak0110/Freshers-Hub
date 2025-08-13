import React, { useState } from "react";

function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const categories = [
    { key: "all", label: "All" },
    { key: "admissions", label: "Admissions" },
    { key: "campus-life", label: "Campus Life" },
    { key: "academics", label: "Academics" },
    { key: "finance", label: "Fees & Funding" },
    { key: "support", label: "Student Support" },
  ];

  const faqData = [
    {
      category: "admissions",
      question: "How do I apply to Your University?",
      answer:
        "Applications are submitted online through our admissions portal. You'll need to create an account, fill out the application form, and upload required documents such as transcripts, personal statement, and references."
    },
    {
      category: "finance",
      question: "What are the tuition fees and available scholarships?",
      answer:
        "Tuition fees vary by program and student status. Detailed fee schedules are available on our Fees & Funding page. We also offer scholarships based on merit and financial need."
    },
    {
      category: "campus-life",
      question: "What accommodation options are available for students?",
      answer:
        "We offer a variety of on-campus accommodation options, including catered and self-catered halls of residence. Off-campus housing support is also available."
    },
    {
      category: "academics",
      question: "How can I change my course or modules?",
      answer:
        "Course and module changes are subject to academic regulations and availability. You should first consult with your academic advisor or department head."
    },
    {
      category: "support",
      question: "What student support services does the university offer?",
      answer:
        "Your University provides academic advising, career services, mental health support, disability services, and international student assistance."
    },
    {
      category: "campus-life",
      question: "Are there opportunities to join clubs and societies?",
      answer:
        "Our Students' Union hosts over 200 clubs and societies covering a wide range of interests, from academic to cultural, sports, and volunteering."
    },
    {
      category: "admissions",
      question: "What are the English language requirements for international students?",
      answer:
        "We accept IELTS, TOEFL, and PTE Academic, with specific score requirements varying by program."
    },
    {
      category: "academics",
      question: "How do I access the university's online learning platforms?",
      answer:
        "After registration, you'll receive login credentials to our Virtual Learning Environment (VLE), university email, and other online resources."
    },
  ];

  const filteredFaqs =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about admissions, campus life, academics, and more.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-title">
              <h2>Your Questions, Answered</h2>
            </div>

            <div className="faq-categories">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setOpenIndex(null); // close all answers when changing category
                  }}
                  className={selectedCategory === cat.key ? "active" : ""}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="faq-container">
              {filteredFaqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <div
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                    style={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      marginBottom: "5px"
                    }}
                  >
                    {faq.question}
                  </div>
                  {openIndex === index && (
                    <div
                      className="faq-answer"
                      style={{
                        background: "#f9f9f9",
                        padding: "10px",
                        borderRadius: "5px",
                        marginBottom: "10px"
                      }}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div>
              <h2>Still Have Questions?</h2>
              <p>
                If you can't find the answer you're looking for, please don't hesitate to contact us directly.
              </p>
              <a href="#" className="btn">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FAQ;
