import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../Context/AppContext';
import { toast } from 'react-toastify';

export const Login = () => {
    const navigate = useNavigate();

    const { setShowLogin, backendUrl, setUser, setToken } = useContext(AppContext);

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setLoginData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(`${backendUrl}/api/user/login`, loginData);
            if (data.success) {
                setToken(data.token);
                setUser(data.user);
                localStorage.setItem('token', data.token); // Correctly setting the token in localStorage
                setShowLogin(false);
                toast.success('Login successful!');
                navigate('/'); // Navigating to the home page after login
            } else {
                toast.error(data.message); // Displaying error message
            }
        } catch (error) {
            console.error('Error logging in user:', error.response?.data?.message || error.message);
            toast.error('Error: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div
            className="container"
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="card pb-3" style={{ width: '400px' }}>
                <div className="card-body">
                    <div className="mb-3 text-center">
                        <h1 className="fw-bold">Welcome!</h1>
                        <p>Please login to continue.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Valid Email"
                                onChange={handleInput}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                onChange={handleInput}
                                className="form-control"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mb-3"
                            style={{
                                display: 'block',
                                margin: 'auto',
                                width: '50%',
                            }}
                        >
                            Login
                        </button>
                        <Link to="/Signup">
                            <button
                                type="button"
                                className="btn"
                                style={{
                                    display: 'block',
                                    margin: 'auto',
                                    width: '50%',
                                    border: '1px solid rgb(0,29,59)',
                                    color: 'rgb(13,110,253)',
                                }}
                            >
                                Create Account
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
