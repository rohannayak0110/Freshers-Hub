import React from 'react'
import '../Styling/Maimt.css'

function Maimt_Hub() {
    return (
        <main>
            {/* Hero Section  */}
            <section className="hero">
                <div className="hero-video-container">
                    {/* Replace with your video or image carousel  */}
                    {/* <!-- <video className="hero-video" autoplay loop muted playsinline>
                    <source src="https://youtu.be/100kBKE9FN0" type="video/mp4">
                    Your browser does not support the video tag.
                </video> --> */}
                </div>
                <h2></h2>

                <div className="hero-content">
                    <h1>Welcome to Your Future!</h1>
                    <p>Discover endless possibilities and a vibrant community at Your University.</p>
                    <a href="features.html" className="btn">Explore Programs</a>
                    <a href="checklist.html" className="btn btn-outline">Freshers Checklist</a>
                </div>
            </section>

            {/* Why Choose Us Section  */}
            <section className="why-choose-us">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Us?</h2>
                    </div>
                    <div className="why-choose-us-grid">
                        <div className="why-item">
                            <i className="fas fa-graduation-cap"></i>
                            <h3>Academic Excellence</h3>
                            <p>Top-tier faculty and cutting-edge research opportunities.</p>
                        </div>
                        <div className="why-item">
                            <i className="fas fa-users"></i>
                            <h3>Vibrant Community</h3>
                            <p>Join diverse clubs, societies, and make lifelong friends.</p>
                        </div>
                        <div className="why-item">
                            <i className="fas fa-building"></i>
                            <h3>Modern Facilities</h3>
                            <p>State-of-the-art labs, libraries, and recreational spaces.</p>
                        </div>
                        <div className="why-item">
                            <i className="fas fa-briefcase"></i>
                            <h3>Career Opportunities</h3>
                            <p>Strong industry links and high graduate employability rates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Key Features</h2>
                    </div>
                    <div className="features-grid">
                        <div className="feature-card">
                            <i className="fas fa-book-open feature-icon"></i>
                            <h3>Innovative Curriculum</h3>
                            <p>Our programs are designed to equip you with future-ready skills.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-globe feature-icon"></i>
                            <h3>Global Connections</h3>
                            <p>Opportunities for international exchange and diverse perspectives.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-flask feature-icon"></i>
                            <h3>Research Excellence</h3>
                            <p>Engage in groundbreaking research with leading experts.</p>
                        </div>
                        <div className="feature-card">
                            <i className="fas fa-handshake feature-icon"></i>
                            <h3>Industry Partnerships</h3>
                            <p>Benefit from internships and real-world projects with top companies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus Gallery */}
            <section className="campus">
                <div className="container">
                    <div className="section-title">
                        <h2>Campus Life</h2>
                    </div>
                    <div className="gallery">
                        <div className="gallery-item">
                            <img src="/image1.png" alt="Campus Building" />
                            <div className="gallery-overlay">Main Campus Building</div>
                        </div>
                        <div className="gallery-item">
                            <img src="/image2.png" alt="University Library" />
                            <div className="gallery-overlay">Modern Library</div>
                        </div>
                        <div className="gallery-item">
                            <img src="/image3.png" alt="Student Dorms" />
                            <div className="gallery-overlay">Student Accommodation</div>
                        </div>
                        <div className="gallery-item">
                            <img src="/image4.png" alt="Sports Field" />
                            <div className="gallery-overlay">Sports Facilities</div>
                        </div>
                        <div className="gallery-item">
                            <img src="/image5.png" alt="Sports Field" />
                            <div className="gallery-overlay">Air Conditioner Classrooms</div>
                        </div>
                        <div className="gallery-item">
                            <img src="/image7.png" alt="Sports Field" />
                            <div className="gallery-overlay">Cafeteria</div>
                        </div>
                    </div>
                    <div >
                        <a href="campus.html" className="btn">View Full Gallery</a>
                    </div>
                </div>
            </section>

            {/* Latest News & Events  */}
            <section className="news-events">
                <div className="container">
                    <div className="section-title">
                        <h2>Latest News & Events</h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-card">
                            <img src="/image5.png" alt="News Image 1" />
                            <div className="news-content">
                                <h3>Annual Freshers' Fair Announced!</h3>
                                <p>Get ready to explore over 100 clubs and societies on September 15th.</p>
                                <a href="#">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="news-card">
                            <img src="/image6.png" alt="News Image 2" />
                            <div className="news-content">
                                <h3>Research Breakthrough in AI Ethics</h3>
                                <p>Our Computer Science department publishes groundbreaking paper.</p>
                                <a href="#">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="news-card">
                            <img src="image8.png" alt="News Image 3" />
                            <div className="news-content">
                                <h3>New Student Support Centre Opens</h3>
                                <p>Enhanced services for mental health, careers, and academic advice.</p>
                                <a href="#">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Students Say</h2>
                    </div>
                    <div className="testimonial-grid">
                        <div className="testimonial-card">
                            <p className="testimonial-content">"Joining Your University was the best decision I ever made. The support from faculty and the vibrant campus life exceeded all my expectations!"</p>
                            <div className="testimonial-author">
                                <img src="Student1.png" alt="Student 1" />
                                <div className="author-info">
                                    <h4>Alice Johnson</h4>
                                    <p>Computer Science, Year 2</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-content">"The practical experience and industry connections I gained here are invaluable. I feel fully prepared for my career thanks to Your University."</p>
                            <div className="testimonial-author">
                                <img src="Student1.png" alt="Student 2" />
                                <div className="author-info">
                                    <h4>Ben Carter</h4>
                                    <p>Business Management, Graduate</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <p className="testimonial-content">"The diverse community and endless opportunities to get involved in clubs and societies made my university experience truly unforgettable."</p>
                            <div className="testimonial-author">
                                <img src="Student1.png" alt="Student 3" />
                                <div className="author-info">
                                    <h4>Chloe Davis</h4>
                                    <p>Fine Arts, Year 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="testimonials.html" className="btn">Read More Testimonials</a>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Maimt_Hub
