import React from 'react';
import conceptDish from './assets/dish.jpg'; // Replace with the actual image path
import owners from './assets/Mario and Adrian b.jpg';
import chef from './assets/restaurant chef B.jpg';
import restaurant from './assets/restaurant.jpg';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* Hero Section (Large Image & Text) */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Welcome to Little Lemon</h1>
                    <p>Where Mediterranean Tradition Meets Innovation</p>
                </div>
            </section>

            {/* Concept Section */}
            <section className="concept-section">
                <div className="concept-text">
                    <h2>Our Concept</h2>
                    <p>At Little Lemon, we blend Mediterranean traditions with contemporary culinary innovation. Our mission is to serve dishes that are as authentic as they are creative, offering an unforgettable dining experience for all guests.</p>
                </div>
                <div className="concept-image">
                    <img src={conceptDish} alt="Delicious dish" />
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2>Meet the Team</h2>
                <p> Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                <br/> 
                <br/>
                To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                </p>
                <br/>
                <div className="team-images">
                    <img src={owners} alt="Mario and Adrian" />
                    <img src={chef} alt="Our chef" />
                </div>
            </section>

            {/* Venue Section */}
            <section className="venue-section">
                <div className="venue-text">
                    <h2>Our Venue</h2>
                    <p>Our restaurant is designed to reflect the warmth of Mediterranean culture. Whether you're here for a casual meal or a celebration, we provide the perfect atmosphere for every occasion.</p>
                </div>
                <div className="venue-image">
                    <img src={restaurant} alt="Our restaurant" />
                </div>
            </section>

            {/* Newsletter CTA Section */}
            <section className="newsletter-section">
                <h2>Stay in Touch!</h2>
                <p>Sign up for our newsletter to receive the latest updates, special offers, and more.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe Now</button>
                </form>
            </section>

            {/* Menu Section */}
            <section className="menu-section">
                <div className="menu-text">
                    <h2>Our Menu</h2>
                    <p>
            At our restaurant, we take pride in serving only the finest Mediterranean-inspired dishes, made with the freshest ingredients. <br/>
            From ocean-fresh seafood to handcrafted pasta, every dish on our menu is thoughtfully prepared to bring you an authentic taste of the Mediterranean.
        </p>
        <p>
            Whether you're craving a light appetizer, a hearty entrée, or a delicious dessert, our menu offers something for everyone. 
            Our commitment to quality and flavor ensures that each bite transports you to the sunny shores of the Mediterranean, with every meal crafted to perfection.
        </p>
        <p>
            Explore our diverse range of options, including vegan and gluten-free choices, and let us treat you to an unforgettable dining experience.
        </p>
                </div>
                    <a href="/menu" className="view-menu-link">View Menu</a>
            </section>
        </div>
    );
};

export default About;