import React from 'react';
import './index.css'; // Optional: Import your CSS file for styling

// Import images
import logoImage from '../../assets/60.png';
import appStoreImage from '../../assets/666.jpg';
import playStoreImage from '../../assets/777.png';
import paymentGatewayImage from '../../assets/777.jpeg';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-col contact-info">
                <img className="footer-logo" src={logoImage} height="50" width="50" alt="Logo" />
                <h4>Contact</h4>
                <p><strong>Address:</strong>D/79 Welcome Seelampur.</p>
                <p><strong>Phone:</strong> 8826786309</p>
                <p><strong>Phone:</strong> 8851220302</p>
                <p><strong>Hours:</strong> 10:00 AM to 08:00 PM</p>
                <div className="social-follow">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-col about-info">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="footer-col account-info">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div className="footer-col app-install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="app-icons">
                    <img src={appStoreImage} height="60" width="80" alt="App Store" />
                    <img src={playStoreImage} height="60" width="80" alt="Google Play" />
                </div>
                <p>Secured Payment Gateways</p>
                <img src={paymentGatewayImage} height="60" width="80" alt="Payment Gateway" />
            </div>
        </footer>
    );
};

export default Footer;
