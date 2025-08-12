import React, { useEffect, useState } from 'react';
import '../Styling/SignUp.css';
import axios from 'axios';
import { useNavigate, Navigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        localStorage.removeItem("user");
        document.getElementById("firstName")?.focus();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = firstName;

        if (!firstName || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/auth/register", {
                name,
                email,
                password,
            });

            const newUser = { name, email };
            localStorage.setItem("user", JSON.stringify(newUser));

            alert("Registered Successfully.");
            navigate("/LogIn");
        } catch (err) {
            const errMsg = err.response?.data?.message || "Registration failed.";
            setError(errMsg);
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-heading">Create Account</h2>
            <p className="signup-subtext">Join us today!</p>
            {error && <p className="signup-error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="signup-form-group">
                    <div>
                        <label htmlFor="firstName">Full Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="signup-password-hint">
                    Must be at least 8 characters with 1 uppercase, 1 number
                </div>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <button className="signup-button" type="submit">
                    Create Account
                </button>

                <div className="signup-signin-link">
                    Already have an account?{' '}
                    <a onClick={() => navigate("/LogIn")} style={{ cursor: "pointer" }}>
                        Sign in
                    </a>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
