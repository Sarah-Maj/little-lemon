import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const Login = () => {
        e.preventDefault();
        if (username === 'user' && password === 'password') {
            history.pushState('/reservations');
        } else {
            alert('Invalid credentials');
        }
        };

        return (
            <div className="login">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
    };

    export default Login;
