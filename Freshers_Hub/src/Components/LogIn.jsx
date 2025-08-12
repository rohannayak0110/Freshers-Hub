import React, { useState } from 'react';
import '../Styling/LogIn.css';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        console.log('Login button clicked');

        if (!email.trim() || !password.trim()) {
            setError('Email and password cannot be empty');
            return;
        }

        try {
            console.log('Sending login request...');
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            });

            console.log('Login response:', response);

            if (response.status === 201) {
                alert('Login successful!');
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (err) {
            console.error('Login error:', err);

            if (err.response && err.response.status === 401) {
                setError('Invalid email or password');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div>
            <div className="login-container">
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">
                        Password{' '}
                        <a href="#" className="forgot">
                            Forgot password?
                        </a>
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && <p className="error-text">{error}</p>}

                    <button type="submit">
                        Log in
                    </button>
                </form>

                <p className="signup-text">
                    Don't have an account?{' '}
                    <a onClick={() => navigate('/SignUp')} style={{ cursor: 'pointer' }}>
                        Sign up
                    </a>
                </p>

                <div className="divider">Or continue with</div>

                <div className="social-buttons">
                    <button className="facebook-btn">Facebook</button>
                    <button className="github-btn">GitHub</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
