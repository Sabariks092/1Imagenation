import React from 'react';
import { assets } from '../assets/assets';

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container text-center py-3">
                <p style={styles.text}>
                    @2024 Designed & Developed by <strong>Sabari K</strong>
                </p>
                <a
                    href="https://sabarikportfolio.netlify.app" // Replace with your portfolio URL
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Visit My Portfolio
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2 gap-3">
                    <img style={{cursor:"pointer"}} src={assets.linkedIn} alt="LinkedIn" />
                    <img src={assets.github} alt="GitHub" />
                    <img src={assets.facebook_icon} width={23} alt="Facebook" />
                    <img src={assets.instagram_icon} width={30}  alt="Instagram" />
                </div>

            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop:'aut'
    },
    text: {
        margin: 0,
        fontSize: '16px',
    },
    link: {
        color: '#00bcd4',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Footer;
