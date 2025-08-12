import React from 'react'
// import '../Styling/Campus.css'

function Campus() {
  return (
    <div>
        <main>
        <section className="hero">
            <div className="hero-content">
                <h1>Explore Our Vibrant Campus</h1>
                <p>A place where learning, innovation, and community thrive.</p>
            </div>
        </section>

        {/* Campus Map Section */}
        <section className="campus-map">
            <div className="container">
                <div className="section-title">
                    <h2>Interactive Campus Map</h2>
                    <p>Find your way around our beautiful campus.</p>
                </div>
                <div className="map-container">
                    {/* Replace with an actual embedded map (e.g., Google Maps iframe)  */}
                    <p>Interactive Map Placeholder</p>
                    {/* <!-- Example Google Maps Embed:
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2999999999996!2d144.9631!3d-37.814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f11f%3A0x504567846297620!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    --> */}
                </div>
                <div>
                    <a href="#" className="btn">Download Campus Map PDF</a>
                </div>
            </div>
        </section>

        {/* Campus Facilities Section  */}
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <h2>Our State-of-the-Art Facilities</h2>
                    <p>Designed to support your academic and personal growth.</p>
                </div>
                <div className="facilities-grid">
                    <div className="facility-card">
                        <img src="images/facility-library.jpg" alt="University Library" />
                        <div className="facility-content">
                            <h3>Modern Library & Learning Hub</h3>
                            <p>Access vast digital and physical resources, quiet study zones, and collaborative spaces.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <img src="images/facility-lab.jpg" alt="Science Lab" />
                        <div className="facility-content">
                            <h3>Advanced Research Laboratories</h3>
                            <p>Equipped with cutting-edge technology for scientific discovery and innovation.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <img src="images/facility-sports.jpg" alt="Sports Complex" />
                        <div className="facility-content">
                            <h3>Sports & Recreation Complex</h3>
                            <p>Gym, swimming pool, indoor courts, and outdoor fields for all your fitness needs.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <img src="images/facility-dorms.jpg" alt="Student Accommodation" />
                        <div className="facility-content">
                            <h3>Comfortable Student Accommodation</h3>
                            <p>Safe, modern, and vibrant living spaces designed for student comfort and community.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <img src="images/facility-arts.jpg" alt="Arts Studio" />
                        <div className="facility-content">
                            <h3>Creative Arts Studios</h3>
                            <p>Dedicated spaces for fine arts, music, and performing arts students to hone their craft.</p>
                        </div>
                    </div>
                    <div className="facility-card">
                        <img src="images/facility-cafe.jpg" alt="Campus Cafe" />
                        <div className="facility-content">
                            <h3>Dining & Social Hubs</h3>
                            <p>A variety of cafes, restaurants, and social spaces to relax and connect with friends.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Campus Gallery */}
        <section className="campus">
            <div className="container">
                <div className="section-title">
                    <h2>Campus Photo Gallery</h2>
                    <p>A glimpse into daily life at Your University.</p>
                </div>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src="images/campus1.jpg" alt="Campus Building" />
                        <div className="gallery-overlay">Main Campus Building</div>
                    </div>
                    <div className="gallery-item">
                        <img src="images/campus2.jpg" alt="University Library" />
                        <div className="gallery-overlay">Modern Library</div>
                    </div>
                    <div className="gallery-item">
                        <img src="images/campus3.jpg" alt="Student Dorms" />
                        <div className="gallery-overlay">Student Accommodation</div>
                    </div>
                    <div className="gallery-item">
                        <img src="images/campus4.jpg" alt="Sports Field" />
                        <div className="gallery-overlay">Sports Facilities</div>
                    </div>
                    <div className="gallery-item">
                        <img src="images/campus5.jpg" alt="Lecture Hall" />
                        <div className="gallery-overlay">Spacious Lecture Hall</div>
                    </div>
                    <div className="gallery-item">
                        <img src="images/campus6.jpg" alt="Student Common Area" />
                        <div className="gallery-overlay">Student Common Area</div>
                    </div>
                </div>
            </div>
        </section>

        {/* Virtual Tour / Video Section */}
        <section className="hero">
            <div className="hero-content">
                <h2>Take a Virtual Tour!</h2>
                <p>Can't visit in person? Explore our campus from anywhere in the world.</p>
                <a href="#" className="btn btn-outline">Watch Video Tour <i className="fas fa-play-circle"></i></a>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Campus
