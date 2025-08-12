import React from 'react'
// import '../Styling/Checklist.css'

function Checklist() {
  return (
    <div>
        <main>
        <section className="hero">
            <div className="hero-content">
                <h1>Your Ultimate Freshers Checklist</h1>
                <p>Everything you need to do before and during your first few weeks at Your University.</p>
            </div>
        </section>

        <section className="checklist-section">
            <div className="container">
                <div className="section-title">
                    <h2>Get Ready for University Life!</h2>
                </div>

                <div className="info-box">
                    <p><i className="fas fa-info-circle" ></i> **Important: This checklist is a guide. Always refer to official university communications for the most accurate and up-to-date information.</p>
                    <p>Download our comprehensive Freshers' Guide: <a href="#" download>Freshers' Guide PDF</a></p>
                </div>

                <div className="checklist-categories">
                    <button data-category="all" className="active">All Tasks</button>
                    <button data-category="pre-arrival">Pre-Arrival</button>
                    <button data-category="first-week">First Week</button>
                    <button data-category="academics">Academics</button>
                    <button data-category="finance">Finance</button>
                </div>

                <div className="checklist-container">
                    <div className="checklist-item" data-category="pre-arrival">
                        <input type="checkbox" id="task1" />
                        <label for="task1">Complete Online Registration</label>
                    </div>
                    <div className="checklist-item" data-category="pre-arrival finance">
                        <input type="checkbox" id="task2" />
                        <label for="task2">Arrange Tuition Fee Payment</label>
                    </div>
                    <div className="checklist-item" data-category="pre-arrival">
                        <input type="checkbox" id="task3" />
                        <label for="task3">Confirm Accommodation Details</label>
                    </div>
                    <div className="checklist-item" data-category="pre-arrival">
                        <input type="checkbox" id="task4" />
                        <label for="task4">Pack Essentials (Documents, Clothes, etc.)</label>
                    </div>
                    <div className="checklist-item" data-category="pre-arrival">
                        <input type="checkbox" id="task5" />
                        <label for="task5">Plan Your Travel to Campus</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task6" />
                        <label for="task6">Attend University Welcome Event</label>
                    </div>
                    <div className="checklist-item" data-category="first-week academics">
                        <input type="checkbox" id="task7" />
                        <label for="task7">Collect Student ID Card</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task8" />
                        <label for="task8">Explore Campus and Locate Key Buildings</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task9" />
                        <label for="task9">Register with a Local Doctor/GP</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task10" />
                        <label for="task10">Open a Local Bank Account (if needed)</label>
                    </div>
                    <div className="checklist-item" data-category="academics">
                        <input type="checkbox" id="task11" />
                        <label for="task11">Access Your University Email and Online Learning Platform</label>
                    </div>
                    <div className="checklist-item" data-category="academics">
                        <input type="checkbox" id="task12" />
                        <label for="task12">Review Your Course Timetable</label>
                    </div>
                    <div className="checklist-item" data-category="academics">
                        <input type="checkbox" id="task13" />
                        <label for="task13">Attend Departmental Induction Sessions</label>
                    </div>
                    <div className="checklist-item" data-category="finance">
                        <input type="checkbox" id="task14" />
                        <label for="task14">Understand Your Student Loan/Funding</label>
                    </div>
                    <div className="checklist-item" data-category="finance">
                        <input type="checkbox" id="task15" />
                        <label for="task15">Create a Budget for Living Expenses</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task16" />
                        <label for="task16">Attend the Freshers' Fair and Join Societies</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task17" />
                        <label for="task17">Meet Your Flatmates/Hall Mates</label>
                    </div>
                    <div className="checklist-item" data-category="academics">
                        <input type="checkbox" id="task18" />
                        <label for="task18">Familiarize Yourself with Library Resources</label>
                    </div>
                    <div className="checklist-item" data-category="pre-arrival">
                        <input type="checkbox" id="task19" />
                        <label for="task19">Check Visa/Immigration Requirements (International Students)</label>
                    </div>
                    <div className="checklist-item" data-category="first-week">
                        <input type="checkbox" id="task20" />
                        <label for="task20">Locate Student Support Services</label>
                    </div>
                </div>
            </div>
        </section>

        {/* Important Dates Section  */}
        <section className="features">
            <div className="container">
                <div className="section-title">
                    <h2>Key Dates & Deadlines</h2>
                    <p>Mark your calendar for these important events.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="fas fa-calendar-alt feature-icon"></i>
                        <h3>September 1st</h3>
                        <p>Online Registration Deadline</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-calendar-check feature-icon"></i>
                        <h3>September 10th</h3>
                        <p>Official Welcome Week Begins</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-calendar-day feature-icon"></i>
                        <h3>September 15th</h3>
                        <p>Freshers' Fair</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-calendar-week feature-icon"></i>
                        <h3>September 18th</h3>
                        <p>Lectures Commence</p>
                    </div>
                </div>
            </div>
        </section>

         {/* Contact for Support */}
        <section className="hero">
            <div className="hero-content">
                <h2>Need Help?</h2>
                <p>Our student support team is here for you.</p>
                <a href="#" className="btn btn-outline">Contact Support</a>
            </div>
        </section>
    </main>
    </div>
  )
}

export default Checklist
