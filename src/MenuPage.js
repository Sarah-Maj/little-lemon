import React from 'react';
import './MenuPage.css';

function MenuPage() {
    return (
        <section className="menu-page-container" role="main">
            <h1>Menu</h1>
            <p>Explore our delicious menu of fresh meals!</p>
            <p>Choose from our selection of appetisers, mains, and desserts - each dish crafted with passion.</p>
            <button className="cta-button" aria-label="View Full Menu">View Full Menu</button>
        </section>
    );
}

export default MenuPage;