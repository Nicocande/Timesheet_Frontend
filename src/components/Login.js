
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get('http://localhost:8080/auths', {
                email,
                pwd,
            });

            // Save token in local storage
            localStorage.setItem('authToken', response.data.entity);
            getData();

            // Redirect or other actions can go here
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // method for get data in token
    const getData = () => {
        const token = localStorage.getItem('authToken');
        const decodedToken = jwtDecode(token);

        console.log("ID: " + decodedToken.id,"\nEmail: " + decodedToken.email);
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

