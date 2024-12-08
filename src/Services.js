import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <section className="services-header">
                <h2>Our Services</h2>
                <p>At Little Lemon, we offer a variety of services to make your experience memorable.</p>
            </section>

            <section className="services-list">
                <div className="service-item">
                    <h3>Catering</h3>
                    <p>We offer catering services for events of all sizes. Let us bring our delicious Mediterranean cuisine to your next celebration!</p>
                </div>
                <div className="service-item">
                    <h3>Reservations</h3>
                    <p>Book a table at Little Lemon to enjoy an intimate dining experience with your loved ones. Reservations are quick and easy!</p>
                </div>
                <div className="service-item">
                    <h3>Delivery</h3>
                    <p>Can't make it to the restaurant? No problem! We offer delivery services so you can enjoy our dishes at home.</p>
                </div>
                <div className="service-item">
                    <h3>Private Events</h3>
                    <p>Our restaurant is available for private events. Celebrate special occasions with personalized menus and exclusive service.</p>
                </div>
            </section>
        </div>
    );
};

export default Services;