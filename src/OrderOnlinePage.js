import React from 'react';
import './OrderOnlinePage.css';

function OrderOnlinePage() {
    return (
        <section className="order-online-page">
            <h1>Order Online</h1>
            <p>Enjoy Little Lemon at home! Order your favourite dishes online and have them delivered right to your door.</p>
            <p>Browse our online menu and place your order today!</p>
            <button className="order-now-button" aria-label="Browse the menu to order online">Browse Menu</button>
        </section>
    );
}

export default OrderOnlinePage;