import React from 'react'
// import '../Styling/Footer.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer-grid">
                <div className="footer-column">
                    <h3>About Us</h3>
                    <p>Your University is dedicated to fostering academic excellence, innovation, and a vibrant student community. Join us to shape your future.</p>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="features.html">Programs</a></li>
                        <li><a href="campus.html">Campus Tour</a></li>
                        <li><a href="faq.html">FAQs</a></li>
                        <li><a href="#">Admissions</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Connect With Us</h3>
                    <p>Stay updated with our latest news and events.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Your University. All rights reserved.</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
