import React from 'react'
// import '../Styling/Features.css'

function Features() {
  return (
    <div>
      
    <main>
        <section className="hero">
            <div className="hero-content">
                <h1>Discover Our Unique Features</h1>
                <p>Explore what makes Your University an exceptional place to learn and grow.</p>
            </div>
        </section>

        <section className="features">
            <div className="container">
                <div className="section-title">
                    <h2>Academic Excellence</h2>
                </div>

                <div className="feature-detail-section">
                    <div className="content">
                        <h3>Innovative Curriculum & Programs</h3>
                        <p>Our academic programs are meticulously designed to be at the forefront of industry trends,
                            ensuring our graduates are highly sought after. We offer a blend of theoretical knowledge
                            and practical application, preparing students for real-world challenges.</p>
                        <ul>
                            <li><i className="fas fa-check-circle"></i> Industry-aligned
                                courses</li>
                            <li><i className="fas fa-check-circle"></i> Flexible learning
                                pathways</li>
                            <li><i className="fas fa-check-circle"></i> Interdisciplinary
                                studies</li>
                        </ul>
                        <a href="#" className="btn">View All Programs</a>
                    </div>
                    <div className="image">
                        <img src="images/feature-curriculum.jpg" alt="Innovative Curriculum" />
                    </div>
                </div>

                <div className="feature-detail-section">
                    <div className="image">
                        <img src="images/feature-research.jpg" alt="Research Excellence" />
                    </div>
                    <div className="content">
                        <h3>Cutting-Edge Research Opportunities</h3>
                        <p>Engage in groundbreaking research alongside world-renowned faculty. Our university is a hub
                            of innovation, providing students with access to state-of-the-art labs and funding for
                            impactful projects across various disciplines.</p>
                        <ul>
                            <li><i className="fas fa-flask"></i> Advanced laboratory
                                facilities</li>
                            <li><i className="fas fa-users"></i> Collaborative research
                                teams</li>
                            <li><i className="fas fa-lightbulb"></i> Opportunities for
                                publication</li>
                        </ul>
                        <a href="#" className="btn btn-outline">Explore Research</a>
                    </div>
                </div>

                <div className="feature-detail-section">
                    <div className="content">
                        <h3>Global Connections & Exchange Programs</h3>
                        <p>Broaden your horizons with our extensive network of international partner universities. Our
                            exchange programs offer unique opportunities to study abroad, experience new cultures, and
                            build a global professional network.</p>
                        <ul>
                            <li><i className="fas fa-globe"></i> Partnerships in over 50
                                countries</li>
                            <li><i className="fas fa-plane" ></i> Semester and year-long
                                exchanges</li>
                            <li><i className="fas fa-language"></i> Cultural immersion
                                experiences</li>
                        </ul>
                        <a href="#" className="btn">Learn About Exchange</a>
                    </div>
                    <div className="image">
                        <img src="images/feature-global.jpg" alt="Global Connections" />
                    </div>
                </div>
            </div>
        </section>

         {/* Faculty Spotlight Section */}
        <section className="faculty-spotlight">
            <div className="container">
                <div className="section-title">
                    <h2>Meet Our Esteemed Faculty</h2>
                    <p>Learn from the best in their fields.</p>
                </div>
                <div className="faculty-grid">
                    <div className="faculty-card">
                        <img src="images/prof1.jpg" alt="Professor Emily Chen" />
                        <h4>Prof. Emily Chen</h4>
                        <p>Head of Computer Science</p>
                        <p>Specializes in AI and Machine Learning ethics.</p>
                    </div>
                    <div className="faculty-card">
                        <img src="images/prof2.jpg" alt="Dr. David Lee" />
                        <h4>Dr. David Lee</h4>
                        <p>Senior Lecturer, Business</p>
                        <p>Expert in sustainable business practices and entrepreneurship.</p>
                    </div>
                    <div className="faculty-card">
                        <img src="images/prof3.jpg" alt="Dr. Sarah Khan" />
                        <h4>Dr. Sarah Khan</h4>
                        <p>Associate Professor, Biology</p>
                        <p>Leading research in genetic engineering and biotechnology.</p>
                    </div>
                    <div className="faculty-card">
                        <img src="images/prof4.jpg" alt="Prof. Mark Wilson" />
                        <h4>Prof. Mark Wilson</h4>
                        <p>Dean of Arts & Humanities</p>
                        <p>Renowned historian focusing on modern European history.</p>
                    </div>
                </div>
            </div>
        </section>

         {/* Call to Action  */}
        <section className="hero">
            <div className="hero-content">
                <h2>Ready to Start Your Journey?</h2>
                <p>Apply now and become part of our thriving academic community.</p>
                <a href="#" className="btn">Apply Now</a>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Features
