import React from 'react';
import './index.css'; // Optional, for styles
import { useState } from 'react';

// Import images for features
import featureImage1 from '../../assets/79.png';
import featureImage2 from '../../assets/80.jpg';
import featureImage3 from '../../assets/81.jpg';
import featureImage4 from '../../assets/82.jpg';
import featureImage5 from '../../assets/78.png';
import featureImage6 from '../../assets/222.jpg';

// Import images for products
import img32 from '../../assets/32.jpeg';
import img31 from '../../assets/31.jpeg';
import img29 from '../../assets/29.jpeg';
import img33 from '../../assets/33.jpeg';
import img35 from '../../assets/35.jpeg';
import img342 from '../../assets/342.jpg';
import img543 from '../../assets/543.jpg';
import img1 from '../../assets/342.jpg';  // New arrivals images
import img2 from '../../assets/WMJN006036_2.jpg';
import img3 from '../../assets/543.jpg';
import img4 from '../../assets/93.jpeg';
import img5 from '../../assets/837.jpg';
import img6 from '../../assets/87.jpeg';
import img7 from '../../assets/89.jpg';
import img8 from '../../assets/95.jpg';
import img9 from '../../assets/96.webp';
import img10 from '../../assets/99.png';

// Data for features
const featuresData = [
    { imgSrc: featureImage1, title: 'Free Shipping' },
    { imgSrc: featureImage2, title: 'Online Order' },
    { imgSrc: featureImage3, title: 'Save Money' },
    { imgSrc: featureImage4, title: 'Promotions' },
    { imgSrc: featureImage5, title: 'Happy Sell' },
    { imgSrc: featureImage6, title: '24/7 Support' },
];

// Data for products
const productsData = [
    { imgSrc: img32, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img31, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img29, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img33, brand: 'adidas', name: 'cotton jeans', price: '$78' },
];

// Data for new arrivals
const newArrivalsData = [
    { imgSrc: img1, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img2, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img3, brand: 'adidas', name: 'cotton jeans', price: '$78' },
    { imgSrc: img4, brand: 'adidas', name: 'cotton jeans', price: '$78' },
];

// Main component
const ProductsAndFeatures = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleNewsletterSignup = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            alert('Thanks')
            setMessage('Thank you for signing up for our newsletter!');
            setEmail(''); // Reset the email field after submission
        } else {
            setMessage('There was a problem signing you up. Please try again.');
        }
    };
    return (
        <div>
            {/* New Arrivals Section */}
            <section id="new-arrivals" className="section-p1">
                <h2>New Arrivals</h2>
                <p>Summer Collection New Modern Design</p>
                <div className="pro-container">
                    {newArrivalsData.map((product, index) => (
                        <div className="pro2" key={index}>
                            <img src={product.imgSrc} alt={product.name} />
                            <div className="des">
                                <span>{product.brand}</span>
                                <h5>{product.name}</h5>
                                <h4>{product.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* banners */}
            <section id="sm-banner" class="section-p1">
                <div class="banner-box">
                <h4>Crazy Deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>The best classic jeans is on sale at blackjack2</span>
                    <button class="white">Learn more</button>
</div>
<div class="banner-box banner-box2">
    <h4>spring/summer</h4>
    <h2>upcoming season</h2>
    <span>The best classic jeans is on sale at blackjack2</span>
    <button class="white">Collection</button>
</div>
    </section>

            {/* Products Section */}
            <section id="product1" className="section-p1">
    <h1>Featured Products</h1>
    <p>Summer Collection New Modern Design</p>
    <div className="pro-container2">
        {productsData.map((product, index) => (
            <div className="pro" key={index}>
                <img src={product.imgSrc} alt={product.name} />
                <div className="des">
                    <span>{product.brand}</span>
                    <h5>{product.name}</h5>
                    <h4>{product.price}</h4>
                </div>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        ))}
    </div>
</section>
        
            {/* Features Section */}
            <section id="feature" className="section-p1">
                {featuresData.map((feature, index) => (
                    <div className="fe-box" key={index}>
                        <img src={feature.imgSrc} alt={feature.title} />
                        <h6>{feature.title}</h6>
                    </div>
                ))}
            </section>

            {/* Banner Section */}
            <section id="banner" className="section-m1">
                <h1>Repair Services</h1>
                <h2>Up to <span>70% off</span> - All jeans</h2>
                <button className="normal">Explore More</button>
            </section>

            {/* Newslettr */}
            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign up for newsletters</h4>
                    <p>Get E-mail updates about our latest shop and<span> special offers</span>.</p>
                </div>
                <div className="form">
                    <form onSubmit={handleNewsletterSignup}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="normal" type="submit">Sign up</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </section>
        </div>
    );
};

export default ProductsAndFeatures;
