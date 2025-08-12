import React from 'react'
// import '../Styling/Navbar.css'
import { useNavigate } from 'react-router-dom'
function Navbar() {
    const navigate = useNavigate()
    return (
        <div>
            <header>
                <div className="container">
                    <nav>
                        <a href="index.html" className="logo">Your<span>University</span></a>
                        <ul className="nav-links">
                            <li><a onClick={() => { navigate('/'); }}>Home</a></li>
                            <li><a onClick={() => { navigate('/features'); }}>Features</a></li>
                            <li><a onClick={() => { navigate('/campus'); }}>Campus</a></li>
                            <li><a onClick={() => { navigate('/checklist'); }}>Checklist</a></li>
                            <li><a onClick={() => { navigate('/faq'); }}>FAQ</a></li>
                            <li><a onClick={() => { navigate('/testimonials'); }}>Testimonials</a></li>
                            <li><button id="btn-log" onClick={() => {navigate('/login')}}>Log in</button></li>
                        </ul>
                        <div className="mobile-menu">Future</div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
