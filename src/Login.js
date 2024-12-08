import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Adding a separate CSS for styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            navigate('/reservations');
        } else {
            setError('Invalid credentials, please try again.');
        }
    };

    return (
        <div className="login-container">
            <section className="login-header">
                <h2>Login to Your Account</h2>
                <p>Welcome back! Please login to manage your reservations.</p>
            </section>

            <section className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Display error message if credentials are invalid */}
                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="login-btn">Login</button>
                </form>
            </section>

            <section className="login-options">
                <p className="forgot-password"><a href="#">Forgot Password?</a></p>
                <p className="sign-up">Don't have an account? <a href="#">Sign up</a></p>
            </section>

            <section className="login-info">
                <p><strong>Login Information:</strong> Use your username and password to access your account and manage your reservations. If you don't have an account, you can register by clicking the "Sign up" link above.</p>
            </section>
        </div>
    );
};

export default Login;