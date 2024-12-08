import React from 'react';
import './OrderOnline.css';

const OrderOnline = () => {
    console.log('OrderOnline component rendered'); // Add this for debugging
    return (
        <div className="order-online-container">
            {/* Promo Banner moved to top */}
            <section className="promo-banner">
                <h3>Special Offer!</h3>
                <p>Use code <strong>LEMON10</strong> for 10% off your first online order!</p>
            </section>

            <section className="order-online-header">
                <h2>Order Online</h2>
                <p>Craving a delicious meal? Order from us through your favorite delivery platforms!</p>
            </section>

            <section className="order-online-buttons">
                <a href="https://www.deliveroo.co.uk" target="_blank" rel="noopener noreferrer" className="order-btn deliveroo">
                    <img src="https://logos-world.net/wp-content/uploads/2021/02/Deliveroo-Logo-700x394.png" alt="Deliveroo" />
                    <span>Order on Deliveroo</span>
                </a>
                <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer" className="order-btn ubereats">
                    <img src="https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Logo-700x394.png" alt="Uber Eats" />
                    <span>Order on UberEats</span>
                </a>
                <a href="https://www.just-eat.co.uk" target="_blank" rel="noopener noreferrer" className="order-btn justeat">
                    <img src="https://icrtouch.com/wp-content/uploads/elementor/thumbs/Integration-logos-800x400-JustEat-q398w9kxnv8jh126ogtx7rt47vcc14g1no4984oiqk.png" alt="Just Eat" />
                    <span>Order on Just Eat</span>
                </a>
            </section>

            {/* Delivery Areas Section */}
            <section className="delivery-area">
                <h3>Delivery Areas</h3>
                <p>We are proud to serve the following areas in and around Chicago:</p>
                <ul className="delivery-list">
                    <li>Lincoln Park</li>
                    <li>Wicker Park</li>
                    <li>Gold Coast</li>
                    <li>Lakeview</li>
                    <li>Hyde Park</li>
                    <li>River North</li>
                    <li>Logan Square</li>
                    <li>West Loop</li>
                    <li>North Center</li>
                    <li>Bridgeport</li>
                </ul>
                <p>Delivery times typically range between 30-60 minutes, depending on the area.</p>

                {/* Placeholder for Delivery Map */}
                <div className="delivery-map">
                    <p>View our delivery zones on the map below!</p>
                    {/* You can replace this with an actual map integration like Google Maps */}
                    <img src="https://www.manilowsuites.com/wp-content/uploads/2016/07/Manilow-Suites-Locations-Map.jpg" alt="Chicago Delivery Zones Map" />
                </div>

                {/* FAQ about Delivery */}
                <div className="delivery-faq">
                    <h4>Delivery FAQ</h4>
                    <ul>
                        <li><strong>Minimum Order:</strong> $15 for delivery.</li>
                        <li><strong>Free Delivery:</strong> Free delivery for orders over $30 in central Chicago.</li>
                        <li><strong>When can I expect my order?</strong> Orders typically take 30-60 minutes depending on your location.</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default OrderOnline;