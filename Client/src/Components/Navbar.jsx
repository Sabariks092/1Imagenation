import React, { useContext, useState } from 'react';
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../Context/AppContext';

export const Navbar = () => {

    const {user,logout,credit,setShowLogin}= useContext(AppContext);
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo Section */}
                    <img
                        src={assets.logo}
                        alt="Logo"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate('/')}
                        className="me-auto"
                    />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse ms-auto navbar-collapse" id="navbarSupportedContent">
                        {/* If logged in */}
                        {user ? (
                            <ul className="navbar-nav ms-auto d-flex column align-items-center gap-3 mt-3 mt-lg-0">
                                
                                {/* User Info Section */}
                                <li className="nav-item d-flex align-items-center">
                                    <p className="mb-0">Hi, {user.name}</p>
                                    <div className="ms-2">
                                        <img
                                            src={assets.profile_icon}
                                            style={{
                                                cursor: "pointer",
                                                width: "30px",
                                                height: "30px",
                                                objectFit: "cover",
                                            }}
                                            className="rounded-circle img-fluid"
                                            alt="Profile Icon"
                                        />
                                    </div>
                                </li>
                                {/* Credits Section */}
                                <li className="nav-item d-flex ">
                                    <button style={{backgroundColor:"rgb(201, 200, 199)"}}
                                        className="btn d-flex align-items-center gap-2 rounded-pill"
                                        onClick={() => navigate('/pricing')}
                                    >
                                        <img src={assets.credit_star} alt="Credits" />
                                        <span >Credits Left : {credit}</span>
                                    </button>
                                </li>
                                <li>
                                    <div>
                                        <button className='LoginBtn rounded-5' onClick={logout}>logout</button>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            /* If not logged in */
                            <ul className="navbar-nav ms-auto d-flex column align-items-center gap-3 mt-3 mt-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => navigate('/pricing')}
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="LoginBtn btn-dark text-white rounded-pill py-2 px-4"
                                        onClick={() => navigate('/login')}
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};
