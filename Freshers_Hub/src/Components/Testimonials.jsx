import React from 'react'
import '../Styling/Testimonials.css'

function Testimonials() {
  return (
    <div>
        <main>
        <section className="hero">
            <div className="hero-content">
                <h1>Hear From Our Community</h1>
                <p>Real stories from students and alumni who shaped their future at Your University.</p>
            </div>
        </section>

         {/* Written Testimonials Section  */}
        <section className="testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Student Success Stories</h2>
                    <p>Read about the transformative experiences of our current students.</p>
                </div>
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-content">"The supportive environment and the hands-on projects in my
                            engineering course truly prepared me for my internship. I couldn't have asked for a better
                            start to my career!"</p>
                        <div className="testimonial-author">
                            <img src="images/student1.jpg" alt="Alice Johnson" />
                            <div className="author-info">
                                <h4>Alice Johnson</h4>
                                <p>B.Eng. Mechanical Engineering, Year 3</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-content">"Your University's focus on interdisciplinary studies allowed me
                            to combine my passion for literature with digital media, opening up unique career paths I
                            never imagined."</p>
                        <div className="testimonial-author">
                            <img src="images/student2.jpg" alt="Ben Carter" />
                            <div className="author-info">
                                <h4>Ben Carter</h4>
                                <p>BA English & Digital Arts, Year 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-content">"The campus community is incredibly welcoming. I've made friends
                            from all over the world and found my voice through various student societies."</p>
                        <div className="testimonial-author">
                            <img src="images/student3.jpg" alt="Chloe Davis" />
                            <div className="author-info">
                                <h4>Chloe Davis</h4>
                                <p>BSc Environmental Science, Year 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-card">
                        <p className="testimonial-content">"The career services team was instrumental in helping me secure
                            my first job after graduation. Their workshops and networking events were invaluable."</p>
                        <div className="testimonial-author">
                            <img src="images/student4.jpg" alt="David Green" />
                            <div className="author-info">
                                <h4>David Green</h4>
                                <p>BBA Business Administration, Graduate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="video-testimonials">
            <div className="container">
                <div className="section-title">
                    <h2>Watch Our Stories</h2>
                    <p>Hear directly from our students and alumni.</p>
                </div>
                <div className="video-grid">
                    <div className="video-card">
                        {/* Replace with your YouTube/Vimeo embed code */}
                        {/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe> */}
                        <div className="video-content">
                            <h4>My Journey in Computer Science</h4>
                            <p>Sarah, a final-year CS student, shares her experience with research projects.</p>
                        </div>
                    </div>
                    <div className="video-card">
                        {/* <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe> */}
                        <div className="video-content">
                            <h4>Life as an International Student</h4>
                            <p>Omar talks about adapting to university life and finding community.</p>
                        </div>
                    </div>
                    <div className="video-card">
                        <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <div className="video-content">
                            <h4>From Classroom to Career</h4>
                            <p>Emily, an alumni, discusses how her degree led to her dream job.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Alumni Spotlight Section */}
        <section className="alumni-spotlight">
            <div className="container">
                <div className="section-title">
                    <h2>Alumni Success Spotlight</h2>
                    <p>Where our graduates are making an impact.</p>
                </div>
                <div className="alumni-grid">
                    <div className="alumni-card">
                        <img src="images/alumni1.jpg" alt="Alumni 1" />
                        <h4>Dr. Anya Sharma</h4>
                        <p>Class of 2015, PhD Biology</p>
                        <p>Lead Researcher at BioTech Innovations</p>
                    </div>
                    <div className="alumni-card">
                        <img src="images/alumni2.jpg" alt="Alumni 2" />
                        <h4>Mr. Kevin Wong</h4>
                        <p>Class of 2018, BA Marketing</p>
                        <p>Digital Marketing Manager at Global Brands Inc.</p>
                    </div>
                    <div className="alumni-card">
                        <img src="images/alumni3.jpg" alt="Alumni 3" />
                        <h4>Ms. Sofia Rodriguez</h4>
                        <p>Class of 2017, B.Arch Architecture</p>
                        <p>Award-winning Architect at CityScape Designs</p>
                    </div>
                </div>
            </div>
        </section>

         {/* Submit Your Story */}
        <section className="hero">
            <div className="hero-content">
                <h2>Share Your University Story!</h2>
                <p>We'd love to hear about your experience and success.</p>
                <a href="#" className="btn btn-outline">Submit Your Testimonial</a>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Testimonials
