import React, { useState } from 'react';
import './index.css';
import logo from '../../assets/60.png'; // Adjust the path based on your folder structure
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode', !isDarkMode);
    };

    return (
        <section id="header">
            <a href="#">
                <img src={logo} className="logo" alt="Logo" />
            </a>
            
            <div>
                <ul id="navbar">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li>
                        <a href="cart.html" className="cart-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </a>
                    </li>
                    
                    <li className='mode'>
                        <button onClick={toggleDarkMode} className="dark-mode-toggle">
                            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
                        </button>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Header;
